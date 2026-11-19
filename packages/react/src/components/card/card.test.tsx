import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { Card } from './card.js';

const Example = () => (
  <Card.Root data-testid="root">
    <Card.Header>
      <Card.Title>Title</Card.Title>
      <Card.Description>Description</Card.Description>
    </Card.Header>
    <Card.Body>Body</Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card.Root>
);

describe('Card', () => {
  it('renders the title as an h3 heading by default', () => {
    render(<Example />);
    expect(screen.getByRole('heading', { level: 3, name: 'Title' })).toBeInTheDocument();
    expect(screen.getByText('Description').tagName).toBe('P');
  });

  it('lets the title change the heading level with asChild', () => {
    render(
      <Card.Root>
        <Card.Title asChild>
          <h2>Level two</h2>
        </Card.Title>
      </Card.Root>,
    );
    expect(screen.getByRole('heading', { level: 2, name: 'Level two' })).toBeInTheDocument();
  });

  it('renders the root as another element with asChild', () => {
    render(
      <Card.Root asChild>
        <section aria-label="Profile">content</section>
      </Card.Root>,
    );
    expect(screen.getByRole('region', { name: 'Profile' })).toBeInTheDocument();
  });

  it('forwards refs and merges className', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Card.Root ref={ref} className="mt-4">
        x
      </Card.Root>,
    );
    expect(ref.current).toHaveClass('mt-4');
    expect(ref.current).toHaveClass('rounded-surface');
  });

  it('throws a helpful error when a part is used outside Card.Root', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    expect(() => render(<Card.Title>Orphan</Card.Title>)).toThrow(
      '<Card.Title> must be used inside <Card.Root>.',
    );
  });

  it('has no axe violations', async () => {
    const { container } = render(<Example />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
