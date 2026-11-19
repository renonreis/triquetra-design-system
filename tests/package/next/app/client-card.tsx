'use client';

import { Card, Field } from '@renonreis/triquetra';

export function ClientCard() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Client island</Card.Title>
      </Card.Header>
      <Card.Body>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Field.Input />
        </Field.Root>
      </Card.Body>
    </Card.Root>
  );
}
