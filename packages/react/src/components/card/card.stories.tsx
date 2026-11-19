import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/index.js';
import { Input } from '../input/index.js';
import { Card } from './card.js';

const meta = {
  title: 'Components/Card',
  component: Card.Root,
  tags: ['autodocs', 'visual'],
  args: { variant: 'outline', size: 'md' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['outline', 'elevated'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  render: (args) => (
    <Card.Root {...args} style={{ width: '24rem' }}>
      <Card.Header>
        <Card.Title>Design tokens</Card.Title>
        <Card.Description>Brand, theme and mode, in one continuous loop.</Card.Description>
      </Card.Header>
      <Card.Body>
        Semantic tokens reference brand roles, so every component works with any brand.
      </Card.Body>
      <Card.Footer>
        <Button size="sm">Explore</Button>
        <Button size="sm" variant="ghost">
          Dismiss
        </Button>
      </Card.Footer>
    </Card.Root>
  ),
} satisfies Meta<typeof Card.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {};
export const Elevated: Story = { args: { variant: 'elevated' } };
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };

export const WithForm: Story = {
  render: (args) => (
    <Card.Root {...args} asChild style={{ width: '24rem' }}>
      <form
        aria-labelledby="newsletter-title"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Card.Header>
          <Card.Title id="newsletter-title">Newsletter</Card.Title>
          <Card.Description>One email per release. No spam.</Card.Description>
        </Card.Header>
        <Card.Body>
          <Input type="email" aria-label="Email" placeholder="you@example.com" />
        </Card.Body>
        <Card.Footer>
          <Button type="submit" variant="secondary" fullWidth>
            Subscribe
          </Button>
        </Card.Footer>
      </form>
    </Card.Root>
  ),
};

export const CustomHeadingLevel: Story = {
  render: (args) => (
    <Card.Root {...args} style={{ width: '24rem' }}>
      <Card.Header>
        <Card.Title asChild>
          <h2>Rendered as h2</h2>
        </Card.Title>
        <Card.Description>Use asChild to match the page outline.</Card.Description>
      </Card.Header>
    </Card.Root>
  ),
};
