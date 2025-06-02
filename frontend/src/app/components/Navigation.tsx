import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
        Início
      </Link>
      
      {/* Services Dropdown */}
      <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
        <Link href="/servicos" className="text-gray-700 hover:text-indigo-600 font-medium flex items-center">
          Serviços
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
        
        {isServicesOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <Link href="/servicos#pac" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
              PAC Correios
            </Link>
            <Link href="/servicos#sedex" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
              SEDEX Correios
            </Link>
            <Link href="/servicos#carta" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
              Carta Registrada
            </Link>
            <Link href="/servicos#valor-declarado" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
              Valor Declarado
            </Link>
          </div>
        )}
      </div>
      
      <Link href="/rastreamento" className="text-gray-700 hover:text-indigo-600 font-medium">
        Rastreamento
      </Link>
      
      <Link href="/calcular-frete" className="text-gray-700 hover:text-indigo-600 font-medium">
        Cálculo de Frete
      </Link>
      
      <Link href="/agendar-coleta" className="text-gray-700 hover:text-indigo-600 font-medium">
        Agendar Coleta
      </Link>
      
      <Link href="/contato" className="text-gray-700 hover:text-indigo-600 font-medium">
        Contato
      </Link>
      
      {/* Correios Partnership Badge */}
      <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
        <span className="mr-1">Parceiro</span>
        <img src="/correios-logo-small.png" alt="Correios" className="h-4" />
      </div>
    </nav>
  );
}

