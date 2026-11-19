import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from './axe';

describe('axe matcher', () => {
  it('passes for accessible markup', async () => {
    const { container } = render(<img src="logo.png" alt="Triquetra" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('reports violations for inaccessible markup', async () => {
    // eslint-disable-next-line jsx-a11y/alt-text -- intentionally inaccessible to prove the matcher fails
    const { container } = render(<img src="logo.png" />);
    expect(await axe(container)).not.toHaveNoViolations();
  });
});
