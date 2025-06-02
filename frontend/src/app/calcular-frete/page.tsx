'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function FreightCalculationPage() {
  // Form states
  const [origin, setOrigin] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
  });

  const [destination, setDestination] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
  });

  const [package, setPackage] = useState({
    weight: '',
    length: '',
    width: '',
    height: '',
    value: '',
  });

  const [selectedServices, setSelectedServices] = useState({
    pac: true,
    sedex: true,
    sedex10: false,
    sedex12: false,
  });

  const [additionalServices, setAdditionalServices] = useState({
    valorDeclarado: false,
    avisoRecebimento: false,
    maosPropria: false,
    registrado: false,
  });

  // Loading and result states
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [errors, setErrors] = useState({});
  const [recentCalculations, setRecentCalculations] = useState([]);

  // Mock calculated results for demo
  const calculatedResults = [
    {
      service: 'PAC',
      price: 'R$ 25,40',
      deliveryTime: '5 a 8 dias úteis',
      deliveryDate: '06/06/2025 a 11/06/2025',
      serviceCode: '04510',
      logo: '/correios-pac.png',
    },
    {
      service: 'SEDEX',
      price: 'R$ 45,60',
      deliveryTime: '1 a 3 dias úteis',
      deliveryDate: '02/06/2025 a 04/06/2025',
      serviceCode: '04014',
      logo: '/correios-sedex.png',
    },
    {
      service: 'SEDEX 10',
      price: 'R$ 67,80',
      deliveryTime: 'Entrega até às 10h do dia útil seguinte',
      deliveryDate: '02/06/2025',
      serviceCode: '04790',
      logo: '/correios-sedex10.png',
    },
  ];

  // Frequently used routes for demo
  const frequentRoutes = [
    {
      originCity: 'São Paulo, SP',
      destinationCity: 'Rio de Janeiro, RJ',
      count: 28,
    },
    {
      originCity: 'São Paulo, SP',
      destinationCity: 'Belo Horizonte, MG',
      count: 19,
    },
    {
      originCity: 'Curitiba, PR',
      destinationCity: 'São Paulo, SP',
      count: 15,
    },
  ];

  // Handle ZIP code lookup (simulated)
  const handleCepLookup = (type, cep) => {
    if (cep.length === 8) {
      setIsCalculating(true);
      
      // Simulate API call to Correios CEP database
      setTimeout(() => {
        if (type === 'origin') {
          setOrigin({
            ...origin,
            cep,
            street: 'Av. Paulista',
            district: 'Bela Vista',
            city: 'São Paulo',
            state: 'SP',
          });
        } else {
          setDestination({
            ...destination,
            cep,
            street: 'Av. Rio Branco',
            district: 'Centro',
            city: 'Rio de Janeiro',
            state: 'RJ',
          });
        }
        setIsCalculating(false);
      }, 1000);
    }
  };

  // Handle form submission
  const handleCalculate = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Simulate API call to Correios Freight Calculation API
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
      
      // Add to recent calculations (in a real app, this would be stored in a database or localStorage)
      const newCalculation = {
        id: Date.now(),
        origin: `${origin.city}, ${origin.state}`,
        destination: `${destination.city}, ${destination.state}`,
        date: new Date().toLocaleDateString(),
        packageInfo: `${package.weight}kg - ${package.length}x${package.width}x${package.height}cm`,
        services: calculatedResults.map(r => r.service).join(', '),
      };
      
      setRecentCalculations([newCalculation, ...recentCalculations.slice(0, 4)]);
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cálculo de <span className="text-indigo-600">Frete</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calcule o valor do frete com base nos serviços oficiais dos Correios.
            Preços e prazos em tempo real.
          </p>
          
          {/* Correios Partnership Badge */}
          <div className="flex items-center justify-center mt-6">
            <div className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full flex items-center">
              <img src="/correios-logo-small.png" alt="Correios" className="h-6 mr-2" />
              <span>Integração Oficial com API dos Correios</span>
            </div>
          </div>
        </div>

        {/* Calculator Form and Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleCalculate} className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-indigo-600">1</span>
                  Endereços
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Origin Address */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Origem</h3>
                    
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                      <div className="flex">
                        <input
                          type="text"
                          value={origin.cep}
                          onChange={(e) => setOrigin({...origin, cep: e.target.value})}
                          onBlur={(e) => handleCepLookup('origin', e.target.value)}
                          placeholder="00000-000"
                          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                          type="button"
                          className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-r-lg border border-l-0 border-gray-300 hover:bg-indigo-200"
                        >
                          Buscar
                        </button>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
                      <input
                        type="text"
                        value={origin.street}
                        onChange={(e) => setOrigin({...origin, street: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                        <input
                          type="text"
                          value={origin.number}
                          onChange={(e) => setOrigin({...origin, number: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
                        <input
                          type="text"
                          value={origin.complement}
                          onChange={(e) => setOrigin({...origin, complement: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                      <input
                        type="text"
                        value={origin.district}
                        onChange={(e) => setOrigin({...origin, district: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                        <input
                          type="text"
                          value={origin.city}
                          onChange={(e) => setOrigin({...origin, city: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                        <input
                          type="text"
                          value={origin.state}
                          onChange={(e) => setOrigin({...origin, state: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Destination Address */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Destino</h3>
                    
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                      <div className="flex">
                        <input
                          type="text"
                          value={destination.cep}
                          onChange={(e) => setDestination({...destination, cep: e.target.value})}
                          onBlur={(e) => handleCepLookup('destination', e.target.value)}
                          placeholder="00000-000"
                          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                          type="button"
                          className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-r-lg border border-l-0 border-gray-300 hover:bg-indigo-200"
                        >
                          Buscar
                        </button>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
                      <input
                        type="text"
                        value={destination.street}
                        onChange={(e) => setDestination({...destination, street: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                        <input
                          type="text"
                          value={destination.number}
                          onChange={(e) => setDestination({...destination, number: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
                        <input
                          type="text"
                          value={destination.complement}
                          onChange={(e) => setDestination({...destination, complement: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                      <input
                        type="text"
                        value={destination.district}
                        onChange={(e) => setDestination({...destination, district: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                        <input
                          type="text"
                          value={destination.city}
                          onChange={(e) => setDestination({...destination, city: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                        <input
                          type="text"
                          value={destination.state}
                          onChange={(e) => setDestination({...destination, state: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-indigo-600">2</span>
                  Detalhes da Encomenda
                </h2>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
                      <input
                        type="text"
                        value={package.weight}
                        onChange={(e) => setPackage({...package, weight: e.target.value})}
                        placeholder="0.5"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Comprimento (cm)</label>
                      <input
                        type="text"
                        value={package.length}
                        onChange={(e) => setPackage({...package, length: e.target.value})}
                        placeholder="20"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Largura (cm)</label>
                      <input
                        type="text"
                        value={package.width}
                        onChange={(e) => setPackage({...package, width: e.target.value})}
                        placeholder="15"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Altura (cm)</label>
                      <input
                        type="text"
                        value={package.height}
                        onChange={(e) => setPackage({...package, height: e.target.value})}
                        placeholder="10"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Valor (R$)</label>
                      <input
                        type="text"
                        value={package.value}
                        onChange={(e) => setPackage({...package, value: e.target.value})}
                        placeholder="100.00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-indigo-600">3</span>
                  Serviços e Opções
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service Selection */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Serviços Correios</h3>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedServices.pac}
                          onChange={() => setSelectedServices({...selectedServices, pac: !selectedServices.pac})}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span>PAC</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedServices.sedex}
                          onChange={() => setSelectedServices({...selectedServices, sedex: !selectedServices.sedex})}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span>SEDEX</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedServices.sedex10}
                          onChange={() => setSelectedServices({...selectedServices, sedex10: !selectedServices.sedex10})}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span>SEDEX 10</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedServices.sedex12}
                          onChange={() => setSelectedServices({...selectedServices, sedex12: !selectedServices.sedex12})}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span>SEDEX 12</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Additional Services */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Serviços Adicionais</h3>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={additionalServices.valorDeclarado}
                          onChange={() => setAdditionalServices({...additionalServices, valorDeclarado: !additionalServices.valorDeclarado})}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span>Valor Declarado</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={additionalServices.avisoRecebimento}
                          onChange={() => setAdditionalServices({...additionalServices, avisoRecebimento: !additionalServices.avisoRecebimento})}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span>Aviso de Recebimento (AR)</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={additionalServices.maosPropria}
                          onChange={() => setAdditionalServices({...additionalServices, maosPropria: !additionalServices.maosPropria})}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span>Mãos Próprias</span>
                      </label>
                      
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={additionalServices.registrado}
                          onChange={() => setAdditionalServices({...additionalServices, registrado: !additionalServices.registrado})}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span>Envio Registrado</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isCalculating}
                  className={`px-8 py-3 rounded-lg text-white font-medium text-lg transition ${
                    isCalculating ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  {isCalculating ? 'Calculando...' : 'Calcular Frete'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Side Information */}
          <div className="space-y-8">
            {/* Recent Calculations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Cálculos Recentes
              </h2>
              
              {recentCalculations.length > 0 ? (
                <div className="space-y-4">
                  {recentCalculations.map((calc) => (
                    <div key={calc.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{calc.origin}</span>
                        <span className="text-gray-500">→</span>
                        <span className="font-medium">{calc.destination}</span>
                      </div>
                      <div className="text-xs text-gray-500">{calc.packageInfo}</div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-indigo-600">{calc.services}</span>
                        <span className="text-xs text-gray-500">{calc.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  Os cálculos realizados aparecerão aqui para referência rápida.
                </p>
              )}
            </div>
            
            {/* Frequently Used Routes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Rotas Frequentes
              </h2>
              
              <div className="space-y-3">
                {frequentRoutes.map((route, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-b-0">
                    <div>
                      <div className="font-medium">{route.originCity}</div>
                      <div className="text-sm text-gray-500">para {route.destinationCity}</div>
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {route.count}x
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Correios Information */}
            <div className="bg-blue-50 rounded-xl shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <img src="/correios-logo.png" alt="Correios" className="h-10" />
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Como parceiro oficial dos Correios, oferecemos acesso direto às APIs oficiais para cálculo de frete, garantindo que você tenha sempre as informações mais precisas e atualizadas.
              </p>
              <div className="bg-white p-3 rounded-lg">
                <h3 className="text-sm font-semibold mb-2">Benefícios da Parceria:</h3>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Preços idênticos aos oficiais dos Correios</li>
                  <li>• Tempo de entrega garantido</li>
                  <li>• Cálculos em tempo real</li>
                  <li>• Rastreamento integrado</li>
                  <li>• Suporte prioritário</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        {showResults && (
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Resultados do Cálculo de Frete
            </h2>
            
            <div className="mb-6 text-center text-sm text-gray-600">
              <div className="font-medium">
                {origin.city}, {origin.state} → {destination.city}, {destination.state}
              </div>
              <div>
                Pacote: {package.weight}kg - {package.length}cm x {package.width}cm x {package.height}cm
                {package.value && ` - Valor declarado: R$ ${package.value}`}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {calculatedResults.map((result, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-gray-100 p-2 rounded">
                      <img src={result.logo} alt={result.service} className="h-8" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-indigo-600">{result.price}</div>
                      <div className="text-xs text-gray-500">Código: {result.serviceCode}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-semibold">{result.service}</div>
                    <div className="text-sm text-gray-600">{result.deliveryTime}</div>
                    <div className="text-xs text-gray-500">Previsão: {result.deliveryDate}</div>
                  </div>
                  
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                    Escolher este serviço
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
              <p className="font-medium mb-2">Observações importantes:</p>
              <ul className="space-y-1">
                <li>• Os valores e prazos são estimativas com base nas informações fornecidas.</li>
                <li>• O prazo de entrega é contado em dias úteis a partir da data de postagem.</li>
                <li>• Valores podem sofrer alterações conforme tabela vigente dos Correios.</li>
                <li>• Serviços SEDEX 10 e SEDEX 12 estão disponíveis apenas para capitais e cidades selecionadas.</li>
              </ul>
            </div>
          </div>
        )}
        
        {/* Information Blocks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Preços Oficiais</h3>
            <p className="text-gray-600">
              Nossa integração com a API dos Correios garante que você tenha sempre os preços mais atualizados, 
              idênticos aos praticados nas agências.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">⏱️</div>
            <h3 className="text-xl font-semibold mb-2">Prazos Garantidos</h3>
            <p className="text-gray-600">
              Consulte os prazos de entrega em tempo real para todos os CEPs do Brasil, 
              com garantia de cumprimento pelos Correios.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Compare Serviços</h3>
            <p className="text-gray-600">
              Compare todos os serviços disponíveis para sua encomenda e escolha a 
              melhor opção de custo-benefício para suas necessidades.
            </p>
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

