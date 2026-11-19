// A Server Component importing the package directly (needs the 'use client' banner).
import { Button } from '@renonreis/triquetra';
import { ClientCard } from './client-card';

export default function Page() {
  return (
    <main>
      <Button variant="primary">Server-rendered button</Button>
      <ClientCard />
    </main>
  );
}
