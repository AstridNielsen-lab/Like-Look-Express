'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserCircle, MapPin, Shield, Bell, CreditCard } from 'lucide-react';

export default function ProfilePage() {
  // Mock user data
  const [user, setUser] = useState({
    name: 'João Silva',
    email: 'joao.silva@example.com',
    phone: '(11) 99999-9999',
    cpfCnpj: '123.456.789-00',
    avatarUrl: '/avatar-placeholder.png',
    createdAt: '2025-01-15',
    address: {
      street: 'Av. Paulista',
      number: '1000',
      complement: 'Apto 123',
      district: 'Bela Vista',
      city: 'São Paulo',
      state: 'SP',
      postalCode: '01310-100',
    },
    plan: 'Premium',
  });

  // State for form inputs
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    cpfCnpj: user.cpfCnpj,
  });

  // Loading state
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update user data
    setUser({
      ...user,
      ...formData,
    });
    
    setIsLoading(false);
    setSuccessMessage('Perfil atualizado com sucesso!');
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Meu Perfil</h1>
        <p className="text-gray-600">Gerencie suas informações pessoais e configurações</p>
      </div>

      {/* Profile Navigation Tabs */}
      <div className="mb-8 border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          <Link href="/dashboard/profile" className="border-indigo-600 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
            <div className="flex items-center">
              <UserCircle className="w-5 h-5 mr-2" />
              <span>Dados Pessoais</span>
            </div>
          </Link>
          <Link href="/dashboard/address" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Endereços</span>
            </div>
          </Link>
          <Link href="/dashboard/security" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>Segurança</span>
            </div>
          </Link>
          <Link href="/dashboard/notifications" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
            <div className="flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              <span>Notificações</span>
            </div>
          </Link>
          <Link href="/dashboard/payment" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
            <div className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              <span>Pagamento</span>
            </div>
          </Link>
        </nav>
      </div>

      {/* Profile Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Picture Section */}
        <div className="col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <UserCircle size={64} className="text-indigo-600" />
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-medium">
                Alterar Foto
              </button>
              <p className="text-xs text-gray-500 mt-2">
                JPG, GIF ou PNG. Tamanho máximo 2MB.
              </p>
            </div>
          </div>

          {/* Account Status */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="font-medium text-gray-900 mb-3">Informações da Conta</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-500">Plano:</span>
                <div className="font-medium">{user.plan}</div>
              </div>
              <div>
                <span className="text-sm text-gray-500">Cliente desde:</span>
                <div className="font-medium">{new Date(user.createdAt).toLocaleDateString('pt-BR')}</div>
              </div>
              <div>
                <span className="text-sm text-gray-500">Status:</span>
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="font-medium">Ativo</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link href="/dashboard/plan" className="text-sm text-indigo-600 hover:text-indigo-800">
                Gerenciar Plano
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Details Form */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-medium text-gray-900 mb-6">Informações Pessoais</h3>
            
            {successMessage && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                {successMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cpfCnpj" className="block text-sm font-medium text-gray-700 mb-1">
                    CPF/CNPJ
                  </label>
                  <input
                    type="text"
                    name="cpfCnpj"
                    id="cpfCnpj"
                    value={formData.cpfCnpj}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                    isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Salvando...' : 'Salvar Alterações'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Current Address Summary */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-900">Endereço Principal</h3>
              <Link href="/dashboard/address" className="text-sm text-indigo-600 hover:text-indigo-800">
                Editar Endereços
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium">{user.name}</p>
              <p>{user.address.street}, {user.address.number} {user.address.complement}</p>
              <p>{user.address.district} - {user.address.city}, {user.address.state}</p>
              <p>CEP: {user.address.postalCode}</p>
              <p className="mt-2">
                <span className="font-medium">Telefone:</span> {user.phone}
              </p>
            </div>
          </div>
          
          {/* Data Export and Account Deletion */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="font-medium text-gray-900 mb-4">Dados da Conta</h3>
            
            <div className="space-y-4">
              <div>
                <button className="text-sm text-indigo-600 hover:text-indigo-800">
                  Exportar meus dados
                </button>
                <p className="text-xs text-gray-500 mt-1">
                  Receba um arquivo com todos os seus dados pessoais que armazenamos.
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <button className="text-sm text-red-600 hover:text-red-800">
                  Excluir minha conta
                </button>
                <p className="text-xs text-gray-500 mt-1">
                  Ao excluir sua conta, todos os seus dados serão permanentemente removidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

