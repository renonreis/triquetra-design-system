'use client';

import { Button, Card, Dialog } from '@renonreis/triquetra';
import { useState } from 'react';

export function DangerZoneCard() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title asChild>
          <h2>Danger zone</h2>
        </Card.Title>
        <Card.Description>Destructive actions ask for confirmation in a dialog.</Card.Description>
      </Card.Header>
      <Card.Body>
        <DeleteDialog />
      </Card.Body>
    </Card.Root>
  );
}

function DeleteDialog() {
  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Dialog.Root
        open={open}
        onOpenChange={(details) => {
          setOpen(details.open);
        }}
        size="sm"
      >
        <Dialog.Trigger asChild>
          <Button variant="negative" disabled={deleted}>
            Delete workspace
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Delete workspace?</Dialog.Title>
            <Dialog.Description>
              This removes every project in the workspace. This cannot be undone.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <Button variant="ghost">Cancel</Button>
            </Dialog.CloseTrigger>
            <Button
              variant="negative"
              onClick={() => {
                setDeleted(true);
                setOpen(false);
              }}
            >
              Delete
            </Button>
          </Dialog.Footer>
          <Dialog.CloseTrigger />
        </Dialog.Content>
      </Dialog.Root>
      {deleted && (
        <p role="status" className="text-sm text-fg-muted">
          Workspace deleted (not really, this is a sample).
        </p>
      )}
    </div>
  );
}
