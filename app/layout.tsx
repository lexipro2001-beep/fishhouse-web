import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fishhouse-seafood.lexipro2001.chatgpt.site'),
  title: 'Fishhouse | Fresh from the tide',
  description: 'A neighborhood fishhouse serving the day’s best catch, simply cooked over flame.',
  openGraph: {
    title: 'Fishhouse | Fresh from the tide',
    description: 'A neighborhood fishhouse serving the day’s best catch, simply cooked over flame.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Fishhouse — Fresh from the tide.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fishhouse | Fresh from the tide',
    description: 'A neighborhood fishhouse serving the day’s best catch, simply cooked over flame.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
