'use client';

import { Button, Card, Field } from '@renonreis/triquetra';
import { type SubmitEvent, useState } from 'react';

type Status = 'idle' | 'submitting' | 'done';

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function SignupCard() {
  return (
    <Card.Root variant="elevated">
      <Card.Header>
        <Card.Title asChild>
          <h2>Release notes</h2>
        </Card.Title>
        <Card.Description>Get an email when a new Triquetra version ships.</Card.Description>
      </Card.Header>
      <Card.Body>
        <SignupForm />
      </Card.Body>
    </Card.Root>
  );
}

function SignupForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [touched, setTouched] = useState(false);
  const [email, setEmail] = useState('');
  const invalid = touched && !isEmail(email);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    if (!isEmail(email)) return;
    setStatus('submitting');
    // Stand-in for a network request.
    setTimeout(() => {
      setStatus('done');
    }, 800);
  }

  if (status === 'done') {
    return (
      <p
        role="status"
        className="rounded-control border border-status-positive-border bg-status-positive-bg p-4 text-sm text-status-positive-fg"
      >
        Thanks! We sent a confirmation link to <strong>{email}</strong>.
      </p>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field.Root required invalid={invalid} disabled={status === 'submitting'}>
        <Field.Label>
          Email <Field.RequiredIndicator />
        </Field.Label>
        <Field.Input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          onBlur={() => {
            setTouched(true);
          }}
        />
        <Field.HelperText>We only use it to send release notes.</Field.HelperText>
        <Field.ErrorText>Enter a valid email address.</Field.ErrorText>
      </Field.Root>
      <Button type="submit" variant="primary" loading={status === 'submitting'}>
        Subscribe
      </Button>
    </form>
  );
}
