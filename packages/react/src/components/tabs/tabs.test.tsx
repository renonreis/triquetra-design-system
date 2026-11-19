import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe.js';
import { Tabs, type TabsRootProps } from './tabs.js';

const Example = (props: Partial<TabsRootProps>) => (
  <Tabs.Root defaultValue="tokens" {...props}>
    <Tabs.List aria-label="Sections">
      <Tabs.Trigger value="tokens">Tokens</Tabs.Trigger>
      <Tabs.Trigger value="components">Components</Tabs.Trigger>
      <Tabs.Trigger value="archive" disabled>
        Archive
      </Tabs.Trigger>
      <Tabs.Trigger value="docs">Docs</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tokens">Tokens panel</Tabs.Content>
    <Tabs.Content value="components">Components panel</Tabs.Content>
    <Tabs.Content value="archive">Archive panel</Tabs.Content>
    <Tabs.Content value="docs">Docs panel</Tabs.Content>
  </Tabs.Root>
);

describe('Tabs', () => {
  it('renders a named tablist with tabs and the selected panel', () => {
    render(<Example />);
    const tablist = screen.getByRole('tablist', { name: 'Sections' });
    expect(tablist).toHaveAttribute('aria-orientation', 'horizontal');
    expect(screen.getAllByRole('tab')).toHaveLength(4);
    expect(screen.getByRole('tab', { name: 'Tokens' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Components' })).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(screen.getByRole('tabpanel', { name: 'Tokens' })).toHaveTextContent('Tokens panel');
    expect(screen.queryByRole('tabpanel', { name: 'Components' })).not.toBeInTheDocument();
  });

  it('selects a tab on click and calls onValueChange', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Example onValueChange={onValueChange} />);
    await user.click(screen.getByRole('tab', { name: 'Components' }));
    expect(screen.getByRole('tab', { name: 'Components' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tabpanel', { name: 'Components' })).toBeVisible();
    expect(onValueChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ value: 'components' }),
    );
  });

  // Selection that follows focus (automatic activation) is scheduled through chained animation
  // frames that jsdom does not run in order; the Line story's play function covers it in a browser.
  it('moves between tabs with arrow keys, skipping disabled tabs and wrapping', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.tab();
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Tokens' })).toHaveFocus();
    });
    await user.keyboard('{ArrowRight}');
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Components' })).toHaveFocus();
    });
    await user.keyboard('{ArrowRight}');
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Docs' })).toHaveFocus();
    });
    await user.keyboard('{ArrowRight}');
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Tokens' })).toHaveFocus();
    });
    await user.keyboard('{End}');
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Docs' })).toHaveFocus();
    });
  });

  it('moves focus from the selected tab into the panel with Tab', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await user.tab();
    await user.tab();
    await waitFor(() => {
      expect(screen.getByRole('tabpanel', { name: 'Tokens' })).toHaveFocus();
    });
  });

  it('does not select a disabled tab', async () => {
    const user = userEvent.setup();
    render(<Example />);
    const archive = screen.getByRole('tab', { name: 'Archive' });
    expect(archive).toBeDisabled();
    await user.click(archive);
    expect(archive).toHaveAttribute('aria-selected', 'false');
  });

  it('uses up/down arrows when vertical', async () => {
    const user = userEvent.setup();
    render(<Example orientation="vertical" />);
    expect(screen.getByRole('tablist')).toHaveAttribute('aria-orientation', 'vertical');
    await user.tab();
    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Components' })).toHaveFocus();
    });
    await user.keyboard('{ArrowUp}');
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Tokens' })).toHaveFocus();
    });
  });

  it('only moves focus with manual activation', async () => {
    const user = userEvent.setup();
    render(<Example activationMode="manual" />);
    await user.tab();
    await user.keyboard('{ArrowRight}');
    const components = screen.getByRole('tab', { name: 'Components' });
    await waitFor(() => {
      expect(components).toHaveFocus();
    });
    expect(components).toHaveAttribute('aria-selected', 'false');
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(components).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('supports a controlled value', async () => {
    const { rerender } = render(<Example value="tokens" />);
    expect(screen.getByRole('tabpanel', { name: 'Tokens' })).toBeInTheDocument();
    rerender(<Example value="docs" />);
    await waitFor(() => {
      expect(screen.getByRole('tabpanel', { name: 'Docs' })).toBeInTheDocument();
      expect(screen.queryByRole('tabpanel', { name: 'Tokens' })).not.toBeInTheDocument();
    });
  });

  it('forwards refs and merges className', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Tabs.Root ref={ref} className="mt-4" defaultValue="a">
        <Tabs.List aria-label="x">
          <Tabs.Trigger value="a">A</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="a">A</Tabs.Content>
      </Tabs.Root>,
    );
    expect(ref.current).toHaveClass('mt-4');
    expect(ref.current).toHaveClass('flex');
  });

  it.each([
    ['line, horizontal', {}],
    ['enclosed', { variant: 'enclosed' }],
    ['vertical', { orientation: 'vertical' }],
    ['manual activation', { activationMode: 'manual' }],
  ] as const)('has no axe violations (%s)', async (_name, props) => {
    const { container } = render(<Example {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no axe violations after selecting another tab', async () => {
    const user = userEvent.setup();
    const { container } = render(<Example />);
    await user.click(screen.getByRole('tab', { name: 'Docs' }));
    expect(await axe(container)).toHaveNoViolations();
  });
});
