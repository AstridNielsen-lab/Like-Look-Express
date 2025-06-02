import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Like Look Express - Logística Inteligente',
  description: 'Plataforma de logística inteligente e coleta agendada com integração direta aos Correios.',
  keywords: 'logística, correios, coleta, frete, rastreamento, envio',
  authors: [{ name: 'Like Look Express' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Like Look Express - Logística Inteligente',
    description: 'Agende coletas, calcule fretes e acompanhe entregas com integração aos Correios.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Like Look Express',
    description: 'Logística inteligente ao seu alcance',
  },
  manifest: '/manifest.json',
  themeColor: '#4F46E5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

