'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  UserCircle, 
  Package, 
  Bell, 
  Settings, 
  CreditCard, 
  LogOut,
  Truck,
  FileText,
  BarChart2,
  Calendar,
  MapPin,
  Shield,
  Home,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Navigation items
  const navigation = [
    { name: 'Painel', href: '/dashboard', icon: Home },
    { name: 'Envios', href: '/dashboard/envios', icon: Package },
    { name: 'Coletas', href: '/dashboard/coletas', icon: Calendar },
    { name: 'Etiquetas', href: '/dashboard/etiquetas', icon: FileText },
    { name: 'Relatórios', href: '/dashboard/relatorios', icon: BarChart2 },
  ];

  const secondaryNavigation = [
    { name: 'Meu Perfil', href: '/dashboard/perfil', icon: UserCircle },
    { name: 'Notificações', href: '/dashboard/notificacoes', icon: Bell, badge: 3 },
    { name: 'Configurações', href: '/dashboard/configuracoes', icon: Settings },
    { name: 'Segurança', href: '/dashboard/seguranca', icon: Shield },
  ];

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 transition-opacity md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Mobile sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
          <Link href="/" className="flex items-center">
            <span className="text-2xl mr-2">🚚</span>
            <span className="text-xl font-bold text-indigo-600">Like Look Express</span>
          </Link>
          <button 
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="px-4 py-6">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-2 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Minha Conta
            </h3>
            <div className="mt-2 space-y-1">
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-2 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                  {item.badge && (
                    <span className="ml-auto bg-indigo-600 text-white rounded-full text-xs px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-6 border-t border-gray-200">
            <Link
              href="/login"
              className="flex items-center px-2 py-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Sair
            </Link>
          </div>
        </nav>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex-1 flex flex-col min-h-0 bg-white shadow-lg">
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <Link href="/" className="flex items-center">
              <span className="text-2xl mr-2">🚚</span>
              <span className="text-xl font-bold text-indigo-600">Like Look</span>
            </Link>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-4 py-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-2 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Minha Conta
                </h3>
                <div className="mt-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-2 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                      {item.badge && (
                        <span className="ml-auto bg-indigo-600 text-white rounded-full text-xs px-2 py-0.5">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="px-2 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex justify-center mb-2">
                      <img src="/correios-logo-small.png" alt="Correios" className="h-5" />
                    </div>
                    <p className="text-xs text-gray-600 text-center">
                      Parceiro oficial dos Correios
                    </p>
                  </div>
                </div>
                <Link
                  href="/contato"
                  className="flex items-center px-2 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <HelpCircle className="mr-3 h-5 w-5" />
                  Suporte
                </Link>
                <Link
                  href="/login"
                  className="flex items-center px-2 py-2 mt-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Sair
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow-sm">
          <button
            type="button"
            className="md:hidden px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Abrir menu lateral</span>
            <Menu size={24} />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                <img src="/correios-logo-small.png" alt="Correios" className="h-4 mr-1" />
                <span>Parceiro Oficial Correios</span>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* Notification dropdown would go here */}
              <button
                type="button"
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative"
              >
                <span className="sr-only">Ver notificações</span>
                <Bell size={20} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>

              {/* Profile dropdown would go here */}
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Abrir menu do usuário</span>
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <UserCircle size={20} className="text-indigo-600" />
                    </div>
                  </button>
                </div>
                {/* Dropdown menu would be here */}
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}

