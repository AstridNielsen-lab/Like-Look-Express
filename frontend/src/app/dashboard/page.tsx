'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Shield
} from 'lucide-react';

export default function DashboardPage() {
  // Mock user data
  const [user, setUser] = useState({
    name: 'João Silva',
    email: 'joao.silva@example.com',
    createdAt: '2025-01-15',
    avatarUrl: '/avatar-placeholder.png',
    address: 'Av. Paulista, 1000 - São Paulo, SP',
    plan: 'Premium',
  });

  // Mock shipment data
  const [shipments, setShipments] = useState([
    {
      id: 'LLE789456123',
      trackingCode: 'BR456789123',
      service: 'SEDEX',
      origin: 'São Paulo, SP',
      destination: 'Rio de Janeiro, RJ',
      status: 'Em trânsito',
      updatedAt: '2025-05-30T14:30:00',
      estimatedDelivery: '2025-06-01',
    },
    {
      id: 'LLE123456789',
      trackingCode: 'BR123456789',
      service: 'PAC',
      origin: 'São Paulo, SP',
      destination: 'Belo Horizonte, MG',
      status: 'Entregue',
      updatedAt: '2025-05-25T10:15:00',
      estimatedDelivery: '2025-05-27',
    },
    {
      id: 'LLE456789123',
      trackingCode: 'BR789123456',
      service: 'SEDEX',
      origin: 'São Paulo, SP',
      destination: 'Curitiba, PR',
      status: 'Postado',
      updatedAt: '2025-05-31T09:45:00',
      estimatedDelivery: '2025-06-03',
    },
  ]);

  // Mock notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Encomenda em trânsito',
      message: 'Sua encomenda LLE789456123 está em trânsito e chegará em breve.',
      date: '2025-05-30T14:30:00',
      read: false,
    },
    {
      id: 2,
      title: 'Coleta agendada',
      message: 'Sua coleta está agendada para amanhã entre 14:00 e 18:00.',
      date: '2025-05-29T10:15:00',
      read: true,
    },
    {
      id: 3,
      title: 'Promoção exclusiva',
      message: 'Aproveite 15% de desconto em envios SEDEX até o fim do mês.',
      date: '2025-05-28T09:45:00',
      read: true,
    },
  ]);

  // Mock scheduled pickups
  const [scheduledPickups, setScheduledPickups] = useState([
    {
      id: 'PC123456789',
      date: '2025-06-02',
      time: '14:00 - 18:00',
      address: 'Av. Paulista, 1000 - São Paulo, SP',
      status: 'Agendado',
      packages: 2,
    },
  ]);

  // Format date to locale string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  // Format datetime to locale string
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl shadow-lg mb-8 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Bem-vindo de volta, {user.name}!</h1>
              <p className="text-indigo-100">
                Gerencie suas encomendas e acompanhe seus envios na plataforma Like Look Express.
              </p>
              <div className="mt-4 flex items-center">
                <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                  <img src="/correios-logo-small.png" alt="Correios" className="h-4 mr-1" />
                  <span>Parceiro Oficial Correios</span>
                </div>
                <span className="ml-4 text-sm bg-white bg-opacity-20 rounded-full px-3 py-1">
                  Plano {user.plan}
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-white p-1">
                  <div className="w-full h-full rounded-full bg-indigo-100 flex items-center justify-center">
                    <UserCircle size={48} className="text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/calcular-frete" className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition text-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-2">
                    <Truck size={20} />
                  </div>
                  <span className="text-sm font-medium">Calcular Frete</span>
                </Link>
                <Link href="/agendar-coleta" className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition text-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-2">
                    <Calendar size={20} />
                  </div>
                  <span className="text-sm font-medium">Agendar Coleta</span>
                </Link>
                <Link href="/rastreamento" className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition text-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-2">
                    <MapPin size={20} />
                  </div>
                  <span className="text-sm font-medium">Rastrear</span>
                </Link>
                <Link href="/dashboard/etiquetas" className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition text-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-2">
                    <FileText size={20} />
                  </div>
                  <span className="text-sm font-medium">Etiquetas</span>
                </Link>
              </div>
            </div>

            {/* Recent Shipments */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Envios Recentes</h2>
                <Link href="/dashboard/envios" className="text-sm text-indigo-600 hover:text-indigo-800">
                  Ver todos
                </Link>
              </div>
              
              <div className="space-y-4">
                {shipments.map((shipment) => (
                  <div key={shipment.id} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{shipment.trackingCode}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            shipment.status === 'Entregue' 
                              ? 'bg-green-100 text-green-800' 
                              : shipment.status === 'Em trânsito' 
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {shipment.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {shipment.service} • {formatDate(shipment.updatedAt)}
                        </div>
                        <div className="mt-2 text-sm">
                          <span className="text-gray-600">De:</span> {shipment.origin}
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-600">Para:</span> {shipment.destination}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">
                          Entrega prevista
                        </div>
                        <div className="font-medium text-gray-900">
                          {formatDate(shipment.estimatedDelivery)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Link href={`/rastreamento?codigo=${shipment.trackingCode}`} className="text-xs text-indigo-600 hover:text-indigo-800">
                        Ver detalhes
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scheduled Pickups */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Coletas Agendadas</h2>
                <Link href="/agendar-coleta" className="text-sm text-indigo-600 hover:text-indigo-800">
                  Agendar nova
                </Link>
              </div>
              
              {scheduledPickups.length > 0 ? (
                <div className="space-y-4">
                  {scheduledPickups.map((pickup) => (
                    <div key={pickup.id} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{pickup.id}</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              {pickup.status}
                            </span>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {formatDate(pickup.date)} • {pickup.time}
                          </div>
                          <div className="mt-2 text-sm">
                            <span className="text-gray-600">Endereço:</span> {pickup.address}
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-600">Volumes:</span> {pickup.packages}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Link href={`/dashboard/coletas/${pickup.id}`} className="text-xs text-indigo-600 hover:text-indigo-800">
                          Ver detalhes
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-400 mb-4">
                    <Calendar size={24} />
                  </div>
                  <p className="text-gray-500 mb-4">Você não tem coletas agendadas no momento.</p>
                  <Link href="/agendar-coleta" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Agendar Coleta
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            {/* User Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                  <UserCircle size={48} className="text-indigo-600" />
                </div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-gray-500 text-sm">{user.email}</p>
                <div className="mt-2 text-xs text-gray-400">
                  Cliente desde {formatDate(user.createdAt)}
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mt-4">
                <Link href="/dashboard/perfil" className="flex items-center justify-between py-2 text-sm hover:text-indigo-600 transition">
                  <span>Editar Perfil</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/dashboard/endereco" className="flex items-center justify-between py-2 text-sm hover:text-indigo-600 transition">
                  <span>Meus Endereços</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/dashboard/seguranca" className="flex items-center justify-between py-2 text-sm hover:text-indigo-600 transition">
                  <span>Segurança</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Notificações</h2>
                <Link href="/dashboard/notificacoes" className="text-sm text-indigo-600 hover:text-indigo-800">
                  Ver todas
                </Link>
              </div>
              
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`p-3 rounded-lg ${notification.read ? 'bg-white border border-gray-200' : 'bg-blue-50 border border-blue-200'}`}>
                    <div className="flex justify-between items-start">
                      <h4 className={`font-medium text-sm ${notification.read ? 'text-gray-900' : 'text-blue-800'}`}>
                        {notification.title}
                      </h4>
                      {!notification.read && (
                        <span className="bg-blue-600 rounded-full w-2 h-2"></span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{notification.message}</p>
                    <div className="text-xs text-gray-400 mt-2">
                      {formatDateTime(notification.date)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Resumo de Atividades</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Total de envios</span>
                  <span className="font-semibold">{shipments.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Em trânsito</span>
                  <span className="font-semibold">{shipments.filter(s => s.status === 'Em trânsito').length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Entregues</span>
                  <span className="font-semibold">{shipments.filter(s => s.status === 'Entregue').length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Coletas agendadas</span>
                  <span className="font-semibold">{scheduledPickups.length}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href="/dashboard/relatorios" className="flex items-center text-sm text-indigo-600 hover:text-indigo-800">
                  <BarChart2 size={16} className="mr-1" />
                  <span>Ver relatório detalhado</span>
                </Link>
              </div>
            </div>

            {/* Correios Partner Card */}
            <div className="bg-blue-50 rounded-xl shadow-sm p-6">
              <div className="flex justify-center mb-4">
                <img src="/correios-logo.png" alt="Correios" className="h-8" />
              </div>
              <p className="text-gray-700 text-sm text-center mb-4">
                Benefícios exclusivos da nossa parceria oficial com os Correios para você.
              </p>
              <div className="bg-white p-3 rounded-lg">
                <ul className="text-xs text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Preços oficiais dos Correios
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Coletas em domicílio
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rastreamento em tempo real
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Suporte prioritário
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

