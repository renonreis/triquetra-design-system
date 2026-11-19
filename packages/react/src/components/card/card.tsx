import { ark, type HTMLArkProps } from '@ark-ui/react/factory';
import { createContext, forwardRef, useContext } from 'react';
import { cardVariants, type CardVariants } from './card.variants.js';

type CardStyles = ReturnType<typeof cardVariants>;
const CardContext = createContext<CardStyles | null>(null);

function useCardStyles(part: string): CardStyles {
  const styles = useContext(CardContext);
  if (!styles) throw new Error(`<Card.${part}> must be used inside <Card.Root>.`);
  return styles;
}

export interface CardRootProps extends HTMLArkProps<'div'>, CardVariants {}

const Root = forwardRef<HTMLDivElement, CardRootProps>(function CardRoot(
  { variant, size, className, ...props },
  ref,
) {
  const styles = cardVariants({ variant, size });
  return (
    <CardContext.Provider value={styles}>
      <ark.div ref={ref} className={styles.root({ className })} {...props} />
    </CardContext.Provider>
  );
});

export type CardHeaderProps = HTMLArkProps<'div'>;
const Header = forwardRef<HTMLDivElement, CardHeaderProps>(function CardHeader(
  { className, ...props },
  ref,
) {
  return <ark.div ref={ref} className={useCardStyles('Header').header({ className })} {...props} />;
});

/** Renders an `h3` by default. Use `asChild` to pick the right heading level for the page. */
export type CardTitleProps = HTMLArkProps<'h3'>;
const Title = forwardRef<HTMLHeadingElement, CardTitleProps>(function CardTitle(
  { className, ...props },
  ref,
) {
  return <ark.h3 ref={ref} className={useCardStyles('Title').title({ className })} {...props} />;
});

export type CardDescriptionProps = HTMLArkProps<'p'>;
const Description = forwardRef<HTMLParagraphElement, CardDescriptionProps>(function CardDescription(
  { className, ...props },
  ref,
) {
  return (
    <ark.p
      ref={ref}
      className={useCardStyles('Description').description({ className })}
      {...props}
    />
  );
});

export type CardBodyProps = HTMLArkProps<'div'>;
const Body = forwardRef<HTMLDivElement, CardBodyProps>(function CardBody(
  { className, ...props },
  ref,
) {
  return <ark.div ref={ref} className={useCardStyles('Body').body({ className })} {...props} />;
});

export type CardFooterProps = HTMLArkProps<'div'>;
const Footer = forwardRef<HTMLDivElement, CardFooterProps>(function CardFooter(
  { className, ...props },
  ref,
) {
  return <ark.div ref={ref} className={useCardStyles('Footer').footer({ className })} {...props} />;
});

/** Container for related content and actions. Compose with `Card.Root`, `Card.Header`, … */
export const Card = { Root, Header, Title, Description, Body, Footer };
