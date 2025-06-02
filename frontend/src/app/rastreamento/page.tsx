'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingNumbers, setTrackingNumbers] = useState<string[]>([]);
  const [isTracking, setIsTracking] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [notifications, setNotifications] = useState({
    email: false,
    sms: false,
    push: false,
  });
  
  // Demo data for tracking status
  const trackingData = {
    status: 'Em trânsito',
    origin: 'São Paulo, SP',
    destination: 'Rio de Janeiro, RJ',
    estimatedDelivery: '03/06/2025',
    service: 'SEDEX',
    events: [
      {
        date: '01/06/2025 18:23',
        location: 'Centro de Distribuição São Paulo, SP',
        status: 'Objeto em trânsito',
        details: 'Objeto encaminhado para Rio de Janeiro, RJ'
      },
      {
        date: '01/06/2025 14:15',
        location: 'Agência dos Correios - São Paulo, SP',
        status: 'Objeto postado',
        details: 'Objeto recebido pelos Correios do Brasil'
      }
    ],
    details: {
      weight: '1.5kg',
      dimensions: '30cm x 20cm x 10cm',
      posted: '01/06/2025',
      sender: 'Loja Virtual XYZ'
    }
  };

  const handleAddTracking = () => {
    if (trackingNumber && !trackingNumbers.includes(trackingNumber)) {
      setTrackingNumbers([...trackingNumbers, trackingNumber]);
      setTrackingNumber('');
    }
  };

  const handleRemoveTracking = (number: string) => {
    setTrackingNumbers(trackingNumbers.filter(n => n !== number));
  };

  const handleTrack = () => {
    setIsTracking(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsTracking(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                🚚 Like Look Express
              </Link>
            </div>
            <Navigation />
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Entrar
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rastreamento de <span className="text-indigo-600">Encomendas</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe suas entregas em tempo real com atualizações detalhadas do status de cada encomenda.
          </p>
        </div>

        {/* Tracking Input Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Rastrear Encomenda</h2>
            
            <div className="mb-6">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Digite o código de rastreio"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button 
                  onClick={handleAddTracking}
                  className="px-4 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                >
                  Adicionar
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Você pode rastrear até 5 encomendas simultaneamente
              </p>
            </div>

            {trackingNumbers.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Códigos adicionados:</h3>
                <div className="space-y-2">
                  {trackingNumbers.map((number, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">{number}</span>
                      <button 
                        onClick={() => handleRemoveTracking(number)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remover
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Notificações:</h3>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={notifications.email}
                    onChange={() => setNotifications({...notifications, email: !notifications.email})}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span>Email</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={notifications.sms}
                    onChange={() => setNotifications({...notifications, sms: !notifications.sms})}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span>SMS</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={notifications.push}
                    onChange={() => setNotifications({...notifications, push: !notifications.push})}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span>Notificações Push</span>
                </label>
              </div>
            </div>

            <button
              onClick={handleTrack}
              disabled={trackingNumbers.length === 0 || isTracking}
              className={`w-full py-3 rounded-lg text-white font-medium transition ${
                trackingNumbers.length === 0 || isTracking 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isTracking ? 'Rastreando...' : 'Rastrear Agora'}
            </button>
          </div>
        </div>

        {/* Tracking Results */}
        {showResults && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Resultado do Rastreamento
            </h2>

            {/* Package Status Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-500">Código de Rastreio</div>
                    <div className="text-lg font-bold">{trackingNumbers[0]}</div>
                  </div>
                  <div className={`px-4 py-2 rounded-full ${
                    trackingData.status === 'Entregue' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {trackingData.status}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-sm text-gray-500">Origem</div>
                    <div className="font-medium">{trackingData.origin}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Destino</div>
                    <div className="font-medium">{trackingData.destination}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Serviço</div>
                    <div className="font-medium">{trackingData.service}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Previsão de Entrega</div>
                    <div className="font-medium">{trackingData.estimatedDelivery}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Visualization */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-6">Histórico de Rastreamento</h3>
              
              <div className="space-y-8">
                {trackingData.events.map((event, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Timeline connector */}
                    {index !== trackingData.events.length - 1 && (
                      <div className="absolute top-6 left-[9px] w-0.5 h-full -mt-6 bg-gray-200"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-indigo-600"></div>
                    
                    {/* Event content */}
                    <div>
                      <div className="text-sm text-gray-500">{event.date}</div>
                      <div className="font-bold text-lg">{event.status}</div>
                      <div className="text-gray-700">{event.location}</div>
                      <div className="text-gray-600 text-sm mt-1">{event.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Details */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-6">Detalhes da Encomenda</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-500">Peso</div>
                  <div className="font-medium">{trackingData.details.weight}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Dimensões</div>
                  <div className="font-medium">{trackingData.details.dimensions}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Data de Postagem</div>
                  <div className="font-medium">{trackingData.details.posted}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Remetente</div>
                  <div className="font-medium">{trackingData.details.sender}</div>
                </div>
              </div>
            </div>

            {/* Additional Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                Compartilhar
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
                Baixar Comprovante
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
                Reportar Problema
              </button>
            </div>
          </div>
        )}

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-4">🔔</div>
            <h3 className="text-xl font-semibold mb-2">Notificações Automáticas</h3>
            <p className="text-gray-600 mb-4">
              Receba atualizações automáticas sobre o status da sua encomenda por email, 
              SMS ou notificações push. Nunca perca uma atualização importante.
            </p>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Ativar Notificações
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Aplicativo Móvel</h3>
            <p className="text-gray-600 mb-4">
              Baixe nosso aplicativo para rastrear suas encomendas em qualquer lugar. 
              Disponível para iOS e Android com interface intuitiva.
            </p>
            <div className="flex space-x-2">
              <button className="flex-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                App Store
              </button>
              <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Google Play
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Perguntas Frequentes sobre Rastreamento
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2">Como funciona o código de rastreamento?</h3>
              <p className="text-gray-600">
                O código de rastreamento é um identificador único gerado no momento da postagem da encomenda. 
                Este código permite acompanhar o status e localização da sua encomenda durante todo o trajeto 
                de entrega.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Quanto tempo leva para o rastreamento ser atualizado?</h3>
              <p className="text-gray-600">
                As atualizações de rastreamento geralmente ocorrem em até 24 horas após cada movimentação da 
                encomenda. Em períodos de grande volume, esse prazo pode ser estendido.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">O que significa "Objeto em trânsito"?</h3>
              <p className="text-gray-600">
                Este status indica que sua encomenda está a caminho entre duas unidades de distribuição ou entre 
                uma unidade e o endereço final de entrega.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Posso rastrear encomendas internacionais?</h3>
              <p className="text-gray-600">
                Sim, nossa plataforma suporta rastreamento de encomendas internacionais. Para isso, utilize o 
                código fornecido no momento da postagem, que geralmente começa com duas letras seguidas por 
                9 dígitos.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Por quanto tempo o rastreamento fica disponível?</h3>
              <p className="text-gray-600">
                As informações de rastreamento ficam disponíveis em nosso sistema por até 6 meses após a 
                entrega ou tentativa de entrega da encomenda.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Quer mais facilidade no rastreamento?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Crie uma conta gratuita e tenha acesso ao histórico completo de suas encomendas, 
            notificações personalizadas e muito mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Criar Conta Grátis
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
              Saiba Mais
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">🚚 Like Look Express</div>
              <p className="text-gray-400">
                Logística inteligente e coleta agendada com integração aos Correios.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Coleta Agendada</li>
                <li>Cálculo de Frete</li>
                <li>Rastreamento</li>
                <li>Suporte 24/7</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nós</li>
                <li>Contato</li>
                <li>Termos de Uso</li>
                <li>Privacidade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div>📧 contato@likelookexpress.com</div>
                <div>📞 (11) 99999-9999</div>
                <div>📍 São Paulo, SP</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Like Look Express. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

