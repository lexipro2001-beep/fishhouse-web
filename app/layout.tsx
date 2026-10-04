import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fishhouse-seafood.lexipro2001.chatgpt.site'),
  title: 'The Old Fish House | Huron, Ohio',
  description: 'Waterfront fish favorites, pizzas, subs, shareable snacks, cold drinks, and good times at 30 Main Street in Huron, Ohio.',
  openGraph: {
    title: 'The Old Fish House | Huron, Ohio',
    description: 'More choices, more favorites, and the same Old Fish House flavor on the Huron waterfront.',
    images: [{ url: '/support-local.png', width: 1400, height: 1540, alt: 'Support local — The Old Fish House in Huron, Ohio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Old Fish House | Huron, Ohio',
    description: 'More choices, more favorites, and the same Old Fish House flavor on the Huron waterfront.',
    images: ['/support-local.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
