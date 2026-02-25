import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'soozynn"s Portfolio | Frontend Developer',
  description: 'soozynn"s portfolio website',
  openGraph: {
    title: 'Soozynn Portfolio',
    description: 'Frontend Developer Portfolio',
    url: 'https://portfolio-soozynn.vercel.app',
    siteName: 'Soozynn Portfolio',
    images: [
      {
        url: 'https://portfolio-soozynn.vercel.app/profile.webp',
        width: 1200,
        height: 630,
        alt: 'Soozynn Portfolio Profile Image',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
