import type { Meta, StoryObj } from '@storybook/react-vite';
import brand from '../../tokens/brands/triquetra.tokens.json' with { type: 'json' };
import resolved from '../styles/generated/tokens.json' with { type: 'json' };

type Resolved = Record<
  string,
  Record<string, { value: unknown; type: string; description?: string }>
>;

const semantic = (resolved as Resolved)['triquetra/default/light'] ?? {};
const cssVar = (path: string) => `var(--tq-${path.replaceAll('.', '-')})`;
const byType = (type: string) => Object.entries(semantic).filter(([, t]) => t.type === type);

const meta = {
  title: 'Foundations/Tokens',
  parameters: { layout: 'padded' },
  tags: ['!autodocs', 'visual'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-semibold text-fg-default">{title}</h2>
      {children}
    </section>
  );
}

export const SemanticColors: Story = {
  render: () => {
    const groups = Map.groupBy(byType('color'), ([path]) => path.split('.').slice(1, -1).join('.'));
    return (
      <div className="font-body">
        {[...groups].map(([group, tokens]) => (
          <Section key={group} title={group}>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
              {tokens.map(([path, token]) => (
                <li key={path} className="flex items-center gap-3">
                  <span
                    className="size-10 shrink-0 rounded-control border border-border-default"
                    style={{ background: cssVar(path) }}
                  />
                  <span className="flex flex-col">
                    <code className="font-mono text-sm text-fg-default">{path}</code>
                    {token.description ? (
                      <span className="text-xs text-fg-muted">{token.description}</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        ))}
      </div>
    );
  },
};

const roles = Object.entries(brand.brand.color).filter(([key]) => !key.startsWith('$'));

export const BrandPalette: Story = {
  render: () => (
    <div className="font-body">
      {roles.map(([role, scale]) => (
        <Section key={role} title={`brand.color.${role}`}>
          <ul className="grid grid-cols-10 gap-1">
            {Object.keys(scale)
              .filter((k) => !k.startsWith('$'))
              .map((step) => (
                <li key={step} className="flex flex-col gap-1">
                  <span
                    className="h-12 rounded-control"
                    style={{ background: `var(--tq-brand-color-${role}-${step})` }}
                  />
                  <code className="font-mono text-xs text-fg-muted">{step}</code>
                </li>
              ))}
          </ul>
        </Section>
      ))}
    </div>
  ),
};

export const RadiusAndShadow: Story = {
  render: () => (
    <div className="font-body">
      <Section title="radius">
        <ul className="flex flex-wrap gap-6">
          {byType('dimension')
            .filter(([p]) => p.startsWith('radius.'))
            .map(([path]) => (
              <li key={path} className="flex flex-col items-center gap-2">
                <span
                  className="size-16 border border-border-strong bg-bg-muted"
                  style={{ borderRadius: cssVar(path) }}
                />
                <code className="font-mono text-xs text-fg-muted">{path}</code>
              </li>
            ))}
        </ul>
      </Section>
      <Section title="shadow">
        <ul className="flex flex-wrap gap-8 bg-bg-canvas p-4">
          {byType('shadow').map(([path]) => (
            <li key={path} className="flex flex-col items-center gap-3">
              <span
                className="size-20 rounded-surface bg-bg-surface"
                style={{ boxShadow: cssVar(path) }}
              />
              <code className="font-mono text-xs text-fg-muted">{path}</code>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <Section title="space">
      <ul className="flex flex-col gap-2 font-body">
        {Object.entries(semantic)
          .filter(([p]) => p.startsWith('space.'))
          .map(([path, token]) => (
            <li key={path} className="flex items-center gap-4">
              <code className="w-24 font-mono text-xs text-fg-muted">{path}</code>
              <span className="h-3 bg-action-primary-bg" style={{ width: cssVar(path) }} />
              <code className="font-mono text-xs text-fg-muted">{String(token.value)}</code>
            </li>
          ))}
      </ul>
    </Section>
  ),
};

export const Typography: Story = {
  render: () => (
    <Section title="font.size">
      <ul className="flex flex-col gap-3 font-body text-fg-default">
        {Object.entries(semantic)
          .filter(([p]) => p.startsWith('font.size.'))
          .map(([path, token]) => (
            <li key={path} className="flex items-baseline gap-4">
              <code className="w-24 font-mono text-xs text-fg-muted">{path}</code>
              <span style={{ fontSize: cssVar(path) }}>Triquetra design system</span>
              <code className="font-mono text-xs text-fg-muted">{String(token.value)}</code>
            </li>
          ))}
      </ul>
    </Section>
  ),
};
