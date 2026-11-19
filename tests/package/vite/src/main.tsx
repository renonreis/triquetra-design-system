// A Tailwind v4 consumer (tokens.css + theme.css + @source on dist), as the README documents.
import './tailwind.css';
import tokens from '@renonreis/triquetra/tokens.json';
import { Button, type ButtonProps, Card, Dialog, Field, Input } from '@renonreis/triquetra';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const props: ButtonProps = { variant: 'secondary', size: 'sm' };

function App() {
  return (
    <Card.Root data-tokens={Object.keys(tokens).length}>
      <Card.Header>
        <Card.Title>Smoke</Card.Title>
      </Card.Header>
      <Card.Body>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Field.Input />
        </Field.Root>
        <Input aria-label="Standalone" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button {...props}>Open</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Dialog</Dialog.Title>
          </Dialog.Content>
        </Dialog.Root>
      </Card.Body>
    </Card.Root>
  );
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
