import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link href="/" className="text-gray-700 hover:text-indigo-600">
        Início
      </Link>
      <Link href="/servicos" className="text-gray-700 hover:text-indigo-600">
        Serviços
      </Link>
      <Link href="/rastreamento" className="text-gray-700 hover:text-indigo-600">
        Rastreamento
      </Link>
      <Link href="/contato" className="text-gray-700 hover:text-indigo-600">
        Contato
      </Link>
    </nav>
  );
}

