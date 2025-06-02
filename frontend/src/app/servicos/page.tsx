import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function ServicesPage() {
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
            Nossos <span className="text-indigo-600">Serviços</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para envio de encomendas, com integração direta aos Correios e preços competitivos.
          </p>
        </div>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* PAC Service */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">PAC</h3>
              </div>
              <p className="text-gray-600 mb-6">
                O serviço PAC é a solução econômica para entrega de encomendas em todo o Brasil. 
                Ideal para quem não tem pressa e deseja economizar no frete.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Entrega em todo o território nacional</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Prazo de entrega de 3 a 10 dias úteis</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Rastreamento completo</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Até 30kg por volume</span>
                </li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-700 font-semibold">A partir de R$ 18,00</p>
                <p className="text-sm text-gray-600">Preço varia conforme peso e destino</p>
              </div>
            </div>
          </div>

          {/* SEDEX Service */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">SEDEX</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Para entregas urgentes, o SEDEX é a melhor opção. Agilidade e segurança para suas encomendas
                chegarem rapidamente ao destino.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Entrega expressa em todo o Brasil</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Prazo de entrega de 1 a 3 dias úteis</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Rastreamento em tempo real</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Até 30kg por volume</span>
                </li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-700 font-semibold">A partir de R$ 35,00</p>
                <p className="text-sm text-gray-600">Preço varia conforme peso e destino</p>
              </div>
            </div>
          </div>

          {/* Carta Registrada Service */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Carta Registrada</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Envie documentos e pequenas correspondências com segurança e comprovação de entrega.
                Ideal para documentos importantes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Comprovante de envio</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Prazo de entrega de 3 a 8 dias úteis</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Rastreamento básico</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Até 500g por envelope</span>
                </li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-700 font-semibold">A partir de R$ 8,50</p>
                <p className="text-sm text-gray-600">Preço varia conforme peso e destino</p>
              </div>
            </div>
          </div>

          {/* Valor Declarado Service */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Valor Declarado</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Serviço adicional que oferece mais segurança para suas encomendas de valor, com
                indenização em caso de extravio ou danos.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Compatível com PAC e SEDEX</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Indenização de até R$ 5.000,00</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Tratamento prioritário</span>
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Seguro contra roubo e extravio</span>
                </li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-700 font-semibold">3% do valor declarado</p>
                <p className="text-sm text-gray-600">Mínimo de R$ 7,00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Comparativo de Serviços
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Serviço</th>
                  <th className="py-4 px-6 text-center">Prazo de Entrega</th>
                  <th className="py-4 px-6 text-center">Rastreamento</th>
                  <th className="py-4 px-6 text-center">Peso Máximo</th>
                  <th className="py-4 px-6 text-center">Preço Base</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-semibold">PAC</td>
                  <td className="py-4 px-6 text-center">3 a 10 dias úteis</td>
                  <td className="py-4 px-6 text-center">Sim</td>
                  <td className="py-4 px-6 text-center">30kg</td>
                  <td className="py-4 px-6 text-center">R$ 18,00</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-semibold">SEDEX</td>
                  <td className="py-4 px-6 text-center">1 a 3 dias úteis</td>
                  <td className="py-4 px-6 text-center">Sim</td>
                  <td className="py-4 px-6 text-center">30kg</td>
                  <td className="py-4 px-6 text-center">R$ 35,00</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">SEDEX 10</td>
                  <td className="py-4 px-6 text-center">Entrega até 10h</td>
                  <td className="py-4 px-6 text-center">Sim</td>
                  <td className="py-4 px-6 text-center">10kg</td>
                  <td className="py-4 px-6 text-center">R$ 59,00</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-semibold">Carta Registrada</td>
                  <td className="py-4 px-6 text-center">3 a 8 dias úteis</td>
                  <td className="py-4 px-6 text-center">Básico</td>
                  <td className="py-4 px-6 text-center">500g</td>
                  <td className="py-4 px-6 text-center">R$ 8,50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            * Os preços podem variar conforme o peso, dimensões e destino da encomenda.
          </p>
        </div>

        {/* Integration Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Integração com Correios
          </h2>
          <p className="text-gray-600 mb-6">
            A Like Look Express oferece integração total com os serviços dos Correios, facilitando o envio, 
            rastreamento e gerenciamento de suas encomendas. Nossa plataforma se comunica diretamente com 
            os sistemas dos Correios para fornecer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="text-2xl mb-3">🔄</div>
              <h4 className="font-semibold mb-2">API Integrada</h4>
              <p className="text-gray-600 text-sm">
                Conexão direta com o webservice dos Correios para cálculo de fretes, geração de etiquetas e rastreio.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="text-2xl mb-3">🏷️</div>
              <h4 className="font-semibold mb-2">Etiquetas Oficiais</h4>
              <p className="text-gray-600 text-sm">
                Geração automática de etiquetas oficiais dos Correios para seus envios.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="text-2xl mb-3">📊</div>
              <h4 className="font-semibold mb-2">Relatórios Detalhados</h4>
              <p className="text-gray-600 text-sm">
                Acompanhe todos os seus envios com relatórios completos e estatísticas.
              </p>
            </div>
          </div>
        </div>

        {/* Business Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Soluções para Empresas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                E-commerce
              </h3>
              <p className="text-gray-600 mb-6">
                Soluções completas para lojas virtuais de todos os tamanhos. Automatize suas operações de logística e 
                ofereça uma experiência superior aos seus clientes.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span>Integração com plataformas como Shopify, WooCommerce, Magento e outros</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span>Cálculo automático de frete na página de checkout</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span>Etiquetas em lote para grandes volumes de pedidos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span>Notificações automáticas de status para seus clientes</span>
                </li>
              </ul>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition w-full">
                Saiba Mais
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contratos Corporativos
              </h3>
              <p className="text-gray-600 mb-6">
                Para empresas com alto volume de envios, oferecemos contratos personalizados com condições especiais 
                e atendimento prioritário.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span>Tarifas diferenciadas baseadas no volume mensal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span>Gerente de conta dedicado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span>Coletas programadas diárias ou semanais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">•</span>
                  <span>Dashboard administrativo avançado com relatórios personalizados</span>
                </li>
              </ul>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition w-full">
                Solicitar Proposta
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para simplificar sua logística?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comece a usar a Like Look Express hoje mesmo e transforme a maneira como você gerencia seus envios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Cadastre-se Grátis
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
              Fale com um Consultor
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

