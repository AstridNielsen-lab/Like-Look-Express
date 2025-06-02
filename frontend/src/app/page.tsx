export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-indigo-600">
                🚚 Like Look Express
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Início</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Serviços</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Rastreamento</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Contato</a>
            </nav>
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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Logística Inteligente
            <span className="block text-indigo-600">ao Seu Alcance</span>
          </h1>
          <p className="text-xl text-gray-600 mb-3 max-w-3xl mx-auto">
            Agende coletas, calcule fretes e acompanhe suas entregas com integração direta aos Correios. 
            Simples, seguro e rápido.
          </p>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full flex items-center">
              <img src="/correios-logo-small.png" alt="Correios" className="h-6 mr-2" />
              <span>Parceiro Oficial dos Correios</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
              Agendar Coleta
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition">
              Calcular Frete
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">Coleta Agendada</h3>
            <p className="text-gray-600">
              Agende coletas em sua casa ou empresa com facilidade. 
              Escolha data e horário que funcionam para você.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Cálculo Automático</h3>
            <p className="text-gray-600">
              Calcule fretes em tempo real com base na tabela oficial dos Correios. 
              Tarifas idênticas às oficiais graças à nossa parceria exclusiva.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Rastreamento</h3>
            <p className="text-gray-600">
              Acompanhe suas encomendas em tempo real com notificações 
              por email, SMS e push notifications.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="font-semibold mb-2">PAC</h4>
              <p className="text-gray-600 text-sm">Entrega econômica em todo o Brasil</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">SEDEX</h4>
              <p className="text-gray-600 text-sm">Entrega rápida e segura</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="font-semibold mb-2">Carta Registrada</h4>
              <p className="text-gray-600 text-sm">Documentos importantes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold mb-2">Valor Declarado</h4>
              <p className="text-gray-600 text-sm">Proteção adicional</p>
            </div>
          </div>
        </div>

        {/* Partnership Benefits Section */}
        <div className="mt-20 bg-indigo-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Benefícios da Nossa Parceria com os Correios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Homologação Oficial</h3>
              <p className="text-gray-600">
                Somos um parceiro oficialmente homologado pelos Correios, garantindo a conformidade e qualidade de todos os nossos serviços.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">💯</div>
              <h3 className="text-xl font-semibold mb-2">Mesmo Preço, Mais Benefícios</h3>
              <p className="text-gray-600">
                Oferecemos as mesmas tarifas oficiais dos Correios, mas com recursos adicionais exclusivos para nossos clientes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">Acesso Prioritário</h3>
              <p className="text-gray-600">
                Nossa parceria garante acesso prioritário à rede logística dos Correios, mesmo em períodos de alta demanda.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">1000+</div>
              <div className="text-gray-600">Coletas Realizadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">24/7</div>
              <div className="text-gray-600">Suporte</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">100%</div>
              <div className="text-gray-600">Seguro</div>
            </div>
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
                Parceiro oficial dos Correios com logística inteligente e coleta agendada.
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

