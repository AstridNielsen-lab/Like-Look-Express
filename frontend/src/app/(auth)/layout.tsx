import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autenticação | Like Look Express',
  description: 'Login, registro e gerenciamento de conta na plataforma Like Look Express.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}

