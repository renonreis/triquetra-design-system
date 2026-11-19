import { Switch as ArkSwitch } from '@ark-ui/react';
import { createContext, forwardRef, useContext } from 'react';
import { switchVariants, type SwitchVariants } from './switch.variants.js';

type Styles = ReturnType<typeof switchVariants>;
const StylesContext = createContext<Styles>(switchVariants());
const useStyles = () => useContext(StylesContext);

export interface SwitchRootProps extends ArkSwitch.RootProps, SwitchVariants {}
/**
 * The clickable `<label>` that holds the state (`checked`, `defaultChecked`, `onCheckedChange`,
 * `disabled`, `invalid`, `required`, `readOnly`, `name`, `value`). It renders the native,
 * visually hidden `<input type="checkbox" role="switch">` that forms and assistive tech use.
 * Inside `Field.Root`, it takes the field's states, ids and description.
 */
const Root = forwardRef<HTMLLabelElement, SwitchRootProps>(function SwitchRoot(
  { size, className, children, ...props },
  ref,
) {
  const styles = switchVariants({ size });
  return (
    <StylesContext.Provider value={styles}>
      <ArkSwitch.Root ref={ref} className={styles.root({ className })} {...props}>
        {children}
        <ArkSwitch.HiddenInput role="switch" />
      </ArkSwitch.Root>
    </StylesContext.Provider>
  );
});

export type SwitchControlProps = ArkSwitch.ControlProps;
/** The track. Without children, it renders the `Thumb`. */
const Control = forwardRef<HTMLSpanElement, SwitchControlProps>(function SwitchControl(
  { className, children, ...props },
  ref,
) {
  const styles = useStyles();
  return (
    <ArkSwitch.Control ref={ref} className={styles.control({ className })} {...props}>
      {children ?? <Thumb />}
    </ArkSwitch.Control>
  );
});

export type SwitchThumbProps = ArkSwitch.ThumbProps;
/** The knob that slides to the end of the track while checked. */
const Thumb = forwardRef<HTMLSpanElement, SwitchThumbProps>(function SwitchThumb(
  { className, ...props },
  ref,
) {
  const styles = useStyles();
  return <ArkSwitch.Thumb ref={ref} className={styles.thumb({ className })} {...props} />;
});

export type SwitchLabelProps = ArkSwitch.LabelProps;
/** Required: it names the switch (`aria-labelledby`). */
const Label = forwardRef<HTMLSpanElement, SwitchLabelProps>(function SwitchLabel(
  { className, ...props },
  ref,
) {
  const styles = useStyles();
  return <ArkSwitch.Label ref={ref} className={styles.label({ className })} {...props} />;
});

/** On/off toggle built on Ark UI: `Root` (label + state), `Control`, `Thumb`, `Label`. */
export const Switch = { Root, Control, Thumb, Label };
