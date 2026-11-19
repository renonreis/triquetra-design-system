import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { MODE_STORAGE_KEY } from './mode';
import './globals.css';

export const metadata: Metadata = {
  title: 'Triquetra Sample',
  description: 'A Next.js App Router app built with the Triquetra Design System.',
};

// Applies the saved mode before the first paint, so dark mode doesn't flash.
const modeScript = `try{var m=localStorage.getItem('${MODE_STORAGE_KEY}');if(m==='light'||m==='dark')document.documentElement.dataset.mode=m}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // `data-mode` is set by the script above, before React hydrates.
    <html lang="en" data-brand="triquetra" data-theme="default" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </head>
      <body className="bg-bg-canvas font-body text-fg-default antialiased">{children}</body>
    </html>
  );
}
