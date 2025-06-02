'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function PickupSchedulingPage() {
  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  // Address and contact information
  const [address, setAddress] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
  });
  
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    cpfCnpj: '',
    instructions: '',
  });
  
  // Package details
  const [packageDetails, setPackageDetails] = useState({
    quantity: 1,
    totalWeight: '',
    description: '',
    service: 'PAC',
    needsBox: false,
    needsEnvelope: false,
  });
  
  // Pickup schedule
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  
  // Calendar view
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  
  // Loading and success states
  const [isLoading, setIsLoading] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [pickupCode, setPickupCode] = useState('');
  
  // Mock pickup history
  const [pickupHistory] = useState([
    {
      id: 'PC123456789',
      date: '30/05/2025',
      time: '14:00 - 18:00',
      status: 'Realizada',
      address: 'Av. Paulista, 1000 - São Paulo, SP',
      packages: 2,
    },
    {
      id: 'PC987654321',
      date: '15/05/2025',
      time: '09:00 - 12:00',
      status: 'Realizada',
      address: 'Av. Paulista, 1000 - São Paulo, SP',
      packages: 1,
    },
  ]);
  
  // Mock available time slots
  const availableTimeSlots = [
    { id: 1, time: '09:00 - 12:00', available: true },
    { id: 2, time: '14:00 - 18:00', available: true },
    { id: 3, time: '18:00 - 21:00', available: false },
  ];
  
  // Simulated calendar data - days with available slots
  const availableDays = [3, 4, 5, 10, 11, 12, 17, 18, 19, 24, 25, 26];
  
  // Calculate calendar days
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(calendarMonth, calendarYear);
    const firstDay = getFirstDayOfMonth(calendarMonth, calendarYear);
    const days = [];
    
    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  // Month names for calendar
  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  // Handle CEP lookup (simulated)
  const handleCepLookup = (cep) => {
    if (cep.length === 8) {
      setIsLoading(true);
      
      // Simulate API call to Correios CEP database
      setTimeout(() => {
        setAddress({
          ...address,
          cep,
          street: 'Av. Paulista',
          district: 'Bela Vista',
          city: 'São Paulo',
          state: 'SP',
        });
        setIsLoading(false);
      }, 1000);
    }
  };
  
  // Handle date selection in calendar
  const handleDateSelection = (day) => {
    if (day && availableDays.includes(day)) {
      const selectedDate = new Date(calendarYear, calendarMonth, day);
      const formattedDate = selectedDate.toLocaleDateString('pt-BR');
      setPickupDate(formattedDate);
    }
  };
  
  // Handle time slot selection
  const handleTimeSelection = (timeSlot) => {
    if (timeSlot.available) {
      setPickupTime(timeSlot.time);
    }
  };
  
  // Navigate between form steps
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call to schedule pickup
    setTimeout(() => {
      setIsLoading(false);
      setIsScheduled(true);
      setPickupCode('PC' + Math.floor(Math.random() * 1000000000));
    }, 2000);
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
            Agendar <span className="text-indigo-600">Coleta</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agende a coleta de suas encomendas diretamente com os Correios, escolhendo data e horário que melhor atendem às suas necessidades.
          </p>
          
          {/* Correios Partnership Badge */}
          <div className="flex items-center justify-center mt-6">
            <div className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full flex items-center">
              <img src="/correios-logo-small.png" alt="Correios" className="h-6 mr-2" />
              <span>Serviço Oficial de Coleta Domiciliar dos Correios</span>
            </div>
          </div>
        </div>

        {/* Pickup Scheduling Form and History */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {!isScheduled ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Progress Steps */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex justify-between">
                    {Array.from({ length: totalSteps }).map((_, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            currentStep > index + 1 
                              ? 'bg-green-500 text-white' 
                              : currentStep === index + 1 
                                ? 'bg-indigo-600 text-white' 
                                : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {currentStep > index + 1 ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            index + 1
                          )}
                        </div>
                        <div className="text-xs mt-1 text-gray-600">
                          {index === 0 ? 'Endereço' : index === 1 ? 'Encomendas' : index === 2 ? 'Agendamento' : 'Confirmação'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Form Content */}
                <div className="p-6">
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Address and Contact */}
                    {currentStep === 1 && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                          Endereço e Contato para Coleta
                        </h2>
                        
                        <div className="mb-6">
                          <h3 className="font-semibold text-lg mb-4">Endereço</h3>
                          
                          <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                              CEP*
                            </label>
                            <div className="flex">
                              <input
                                type="text"
                                value={address.cep}
                                onChange={(e) => setAddress({ ...address, cep: e.target.value })}
                                onBlur={(e) => handleCepLookup(e.target.value)}
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="00000-000"
                                required
                              />
                              <button
                                type="button"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition"
                              >
                                Buscar
                              </button>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                              Rua*
                            </label>
                            <input
                              type="text"
                              value={address.street}
                              onChange={(e) => setAddress({ ...address, street: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              required
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Número*
                              </label>
                              <input
                                type="text"
                                value={address.number}
                                onChange={(e) => setAddress({ ...address, number: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Complemento
                              </label>
                              <input
                                type="text"
                                value={address.complement}
                                onChange={(e) => setAddress({ ...address, complement: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                              Bairro*
                            </label>
                            <input
                              type="text"
                              value={address.district}
                              onChange={(e) => setAddress({ ...address, district: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              required
                            />
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2">
                              <label className="block text-gray-700 font-medium mb-2">
                                Cidade*
                              </label>
                              <input
                                type="text"
                                value={address.city}
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Estado*
                              </label>
                              <input
                                type="text"
                                value={address.state}
                                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-lg mb-4">Informações de Contato</h3>
                          
                          <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                              Nome Completo*
                            </label>
                            <input
                              type="text"
                              value={contact.name}
                              onChange={(e) => setContact({ ...contact, name: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              required
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Email*
                              </label>
                              <input
                                type="email"
                                value={contact.email}
                                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Telefone*
                              </label>
                              <input
                                type="tel"
                                value={contact.phone}
                                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="(11) 99999-9999"
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                              CPF/CNPJ*
                            </label>
                            <input
                              type="text"
                              value={contact.cpfCnpj}
                              onChange={(e) => setContact({ ...contact, cpfCnpj: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Instruções para coleta
                            </label>
                            <textarea
                              value={contact.instructions}
                              onChange={(e) => setContact({ ...contact, instructions: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              rows={3}
                              placeholder="Ex: Tocar o interfone e aguardar no portão"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Step 2: Package Details */}
                    {currentStep === 2 && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                          Detalhes da Encomenda
                        </h2>
                        
                        <div className="mb-6">
                          <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                  Quantidade de volumes*
                                </label>
                                <input
                                  type="number"
                                  min="1"
                                  max="10"
                                  value={packageDetails.quantity}
                                  onChange={(e) => setPackageDetails({ ...packageDetails, quantity: parseInt(e.target.value) })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                  Peso total aproximado (kg)*
                                </label>
                                <input
                                  type="text"
                                  value={packageDetails.totalWeight}
                                  onChange={(e) => setPackageDetails({ ...packageDetails, totalWeight: e.target.value })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  placeholder="Ex: 5.5"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">
                              Descrição das encomendas
                            </label>
                            <textarea
                              value={packageDetails.description}
                              onChange={(e) => setPackageDetails({ ...packageDetails, description: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              rows={3}
                              placeholder="Ex: 2 caixas com produtos eletrônicos e 1 envelope com documentos"
                            ></textarea>
                          </div>
                          
                          <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">
                              Tipo de serviço*
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div 
                                className={`border rounded-lg p-4 cursor-pointer transition ${
                                  packageDetails.service === 'PAC' 
                                    ? 'border-indigo-600 bg-indigo-50' 
                                    : 'border-gray-300 hover:border-indigo-300'
                                }`}
                                onClick={() => setPackageDetails({ ...packageDetails, service: 'PAC' })}
                              >
                                <div className="flex items-center">
                                  <div className="bg-gray-100 p-2 rounded mr-3">
                                    <img src="/correios-pac.png" alt="PAC" className="h-8" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold">PAC</h4>
                                    <p className="text-sm text-gray-600">Econômico (3-10 dias úteis)</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div 
                                className={`border rounded-lg p-4 cursor-pointer transition ${
                                  packageDetails.service === 'SEDEX' 
                                    ? 'border-indigo-600 bg-indigo-50' 
                                    : 'border-gray-300 hover:border-indigo-300'
                                }`}
                                onClick={() => setPackageDetails({ ...packageDetails, service: 'SEDEX' })}
                              >
                                <div className="flex items-center">
                                  <div className="bg-gray-100 p-2 rounded mr-3">
                                    <img src="/correios-sedex.png" alt="SEDEX" className="h-8" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold">SEDEX</h4>
                                    <p className="text-sm text-gray-600">Expresso (1-3 dias úteis)</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold text-lg mb-4">Embalagens necessárias?</h3>
                            <div className="space-y-2">
                              <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={packageDetails.needsBox}
                                  onChange={() => setPackageDetails({ ...packageDetails, needsBox: !packageDetails.needsBox })}
                                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <span>Preciso de caixas (será cobrado à parte)</span>
                              </label>
                              
                              <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={packageDetails.needsEnvelope}
                                  onChange={() => setPackageDetails({ ...packageDetails, needsEnvelope: !packageDetails.needsEnvelope })}
                                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <span>Preciso de envelopes (será cobrado à parte)</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Step 3: Date and Time Selection */}
                    {currentStep === 3 && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                          Agendar Data e Horário
                        </h2>
                        
                        <div className="mb-8">
                          <h3 className="font-semibold text-lg mb-4">Selecione uma data disponível</h3>
                          
                          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                            <div className="flex justify-between items-center bg-gray-50 px-4 py-3 border-b border-gray-200">
                              <button 
                                className="text-gray-600 hover:text-indigo-600"
                                onClick={() => {
                                  if (calendarMonth === 0) {
                                    setCalendarMonth(11);
                                    setCalendarYear(calendarYear - 1);
                                  } else {
                                    setCalendarMonth(calendarMonth - 1);
                                  }
                                }}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                              
                              <div className="font-semibold">
                                {monthNames[calendarMonth]} {calendarYear}
                              </div>
                              
                              <button 
                                className="text-gray-600 hover:text-indigo-600"
                                onClick={() => {
                                  if (calendarMonth === 11) {
                                    setCalendarMonth(0);
                                    setCalendarYear(calendarYear + 1);
                                  } else {
                                    setCalendarMonth(calendarMonth + 1);
                                  }
                                }}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            </div>
                            
                            <div className="p-4">
                              <div className="grid grid-cols-7 gap-2 mb-2">
                                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
                                  <div key={index} className="text-center text-sm font-medium text-gray-700">
                                    {day}
                                  </div>
                                ))}
                              </div>
                              
                              <div className="grid grid-cols-7 gap-2">
                                {calendarDays.map((day, index) => (
                                  <div key={index}>
                                    {day ? (
                                      <button
                                        type="button"
                                        className={`w-full aspect-square flex items-center justify-center rounded-full text-sm transition ${
                                          day === new Date().getDate() && calendarMonth === new Date().getMonth() && calendarYear === new Date().getFullYear()
                                            ? 'ring-2 ring-indigo-600 font-semibold' 
                                            : ''
                                        } ${
                                          availableDays.includes(day)
                                            ? pickupDate === new Date(calendarYear, calendarMonth, day).toLocaleDateString('pt-BR')
                                              ? 'bg-indigo-600 text-white'
                                              : 'bg-green-100 text-green-800 hover:bg-green-200'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                        onClick={() => handleDateSelection(day)}
                                        disabled={!availableDays.includes(day)}
                                      >
                                        {day}
                                      </button>
                                    ) : (
                                      <div className="w-full aspect-square"></div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-4 flex justify-between items-center">
                            <h3 className="font-semibold text-lg">Selecione um horário</h3>
                            {pickupDate && (
                              <div className="text-sm font-medium bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                                Data: {pickupDate}
                              </div>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {availableTimeSlots.map((slot) => (
                              <button
                                key={slot.id}
                                type="button"
                                className={`border rounded-lg p-4 text-center transition ${
                                  !slot.available
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : pickupTime === slot.time
                                      ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                                      : 'border-gray-300 hover:border-indigo-300'
                                }`}
                                onClick={() => handleTimeSelection(slot)}
                                disabled={!slot.available}
                              >
                                <div className="font-semibold">{slot.time}</div>
                                <div className="text-sm">
                                  {slot.available ? 'Disponível' : 'Indisponível'}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                          <div className="flex items-start">
                            <div className="mr-2">ℹ️</div>
                            <div>
                              <p className="font-semibold mb-1">Importante:</p>
                              <p>A coleta é realizada pelos Correios no endereço e período escolhidos. É necessário que alguém esteja presente para entregar as encomendas ao carteiro.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Step 4: Confirmation */}
                    {currentStep === 4 && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                          Confirmar Agendamento
                        </h2>
                        
                        <div className="space-y-6">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-semibold text-lg mb-2">Endereço de Coleta</h3>
                            <p>{contact.name}</p>
                            <p>{address.street}, {address.number} {address.complement}</p>
                            <p>{address.district} - {address.city}, {address.state}</p>
                            <p>CEP: {address.cep}</p>
                            <p className="mt-2">
                              <span className="font-medium">Contato:</span> {contact.phone}
                            </p>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-semibold text-lg mb-2">Detalhes da Encomenda</h3>
                            <p><span className="font-medium">Quantidade:</span> {packageDetails.quantity} volume(s)</p>
                            <p><span className="font-medium">Peso total:</span> {packageDetails.totalWeight} kg</p>
                            <p><span className="font-medium">Serviço:</span> {packageDetails.service}</p>
                            {packageDetails.description && (
                              <p><span className="font-medium">Descrição:</span> {packageDetails.description}</p>
                            )}
                            {(packageDetails.needsBox || packageDetails.needsEnvelope) && (
                              <div className="mt-2">
                                <p className="font-medium">Embalagens necessárias:</p>
                                <ul className="list-disc list-inside text-sm">
                                  {packageDetails.needsBox && <li>Caixas</li>}
                                  {packageDetails.needsEnvelope && <li>Envelopes</li>}
                                </ul>
                              </div>
                            )}
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-semibold text-lg mb-2">Data e Horário</h3>
                            <p><span className="font-medium">Data:</span> {pickupDate}</p>
                            <p><span className="font-medium">Horário:</span> {pickupTime}</p>
                          </div>
                          
                          <div className="bg-yellow-50 rounded-lg p-4 text-sm text-yellow-800">
                            <div className="flex items-start">
                              <div className="mr-2">⚠️</div>
                              <div>
                                <p className="font-semibold mb-1">Termos de coleta:</p>
                                <p>Ao confirmar o agendamento, você concorda com os termos de serviço dos Correios para coleta domiciliar. É necessário que alguém esteja presente no endereço informado durante o período selecionado para entregar as encomendas ao carteiro.</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="terms"
                              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                              required
                            />
                            <label htmlFor="terms" className="text-sm text-gray-700">
                              Concordo com os termos de serviço e confirmo que as informações fornecidas estão corretas.
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Form Navigation Buttons */}
                    <div className="mt-8 flex justify-between">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                        >
                          Voltar
                        </button>
                      ) : (
                        <div></div>
                      )}
                      
                      {currentStep < totalSteps ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                        >
                          Continuar
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className={`px-6 py-2 rounded-lg text-white transition ${
                            isLoading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
                          }`}
                          disabled={isLoading}
                        >
                          {isLoading ? 'Processando...' : 'Confirmar Agendamento'}
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Coleta Agendada com Sucesso!
                  </h2>
                  <p className="text-gray-600">
                    Sua solicitação de coleta foi registrada e confirmada. O carteiro dos Correios irá até o seu endereço na data e horário escolhidos.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Código de agendamento</span>
                    <div className="text-xl font-bold text-indigo-600">{pickupCode}</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div>
                      <div className="text-sm text-gray-500">Data de coleta</div>
                      <div className="font-medium">{pickupDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Horário</div>
                      <div className="font-medium">{pickupTime}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Serviço</div>
                      <div className="font-medium">{packageDetails.service}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Volumes</div>
                      <div className="font-medium">{packageDetails.quantity}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/rastreamento" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                    Rastrear Encomendas
                  </Link>
                  <Link href="/agendar-coleta" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
                    Agendar Nova Coleta
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Side Information */}
          <div className="space-y-8">
            {/* Pickup History */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Histórico de Coletas
              </h2>
              
              {pickupHistory.length > 0 ? (
                <div className="space-y-4">
                  {pickupHistory.map((pickup) => (
                    <div key={pickup.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium">{pickup.id}</div>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          pickup.status === 'Realizada' 
                            ? 'bg-green-100 text-green-800' 
                            : pickup.status === 'Agendada' 
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                        }`}>
                          {pickup.status}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {pickup.date}, {pickup.time}
                      </div>
                      <div className="text-sm text-gray-500">
                        {pickup.address}
                      </div>
                      <div className="text-xs text-indigo-600 mt-1">
                        {pickup.packages} volumes
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  Seu histórico de coletas aparecerá aqui.
                </p>
              )}
            </div>
            
            {/* Pickup Tips */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Dicas para Coleta
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-indigo-600 shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Embale corretamente</h3>
                    <p className="text-sm text-gray-600">
                      Certifique-se de que suas encomendas estão bem embaladas e protegidas. Use material adequado para cada tipo de conteúdo.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-indigo-600 shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Prepare a documentação</h3>
                    <p className="text-sm text-gray-600">
                      Tenha em mãos a nota fiscal ou declaração de conteúdo dos itens que serão enviados.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-indigo-600 shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Esteja presente</h3>
                    <p className="text-sm text-gray-600">
                      Garanta que alguém estará no local durante todo o período selecionado para receber o carteiro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Correios Partnership */}
            <div className="bg-blue-50 rounded-xl shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <img src="/correios-logo.png" alt="Correios" className="h-10" />
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Como parceiro oficial dos Correios, oferecemos o serviço de agendamento de coleta domiciliar, trazendo comodidade e praticidade para o seu dia a dia.
              </p>
              <div className="bg-white p-3 rounded-lg">
                <h3 className="text-sm font-semibold mb-2">Vantagens da Coleta Agendada:</h3>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Economia de tempo sem precisar ir à agência</li>
                  <li>• Coleta realizada por funcionários oficiais dos Correios</li>
                  <li>• Mesmos preços das agências físicas</li>
                  <li>• Segurança e rastreabilidade desde a coleta</li>
                  <li>• Flexibilidade de horários</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Como Funciona a Coleta Domiciliar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 text-2xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Agende</h3>
              <p className="text-gray-600 text-sm">
                Escolha a data e o horário que melhor se encaixam na sua rotina.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 text-2xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Prepare</h3>
              <p className="text-gray-600 text-sm">
                Deixe suas encomendas prontas para envio, devidamente embaladas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 text-2xl">
                3
              </div>
              <h3 className="font-semibold mb-2">Receba</h3>
              <p className="text-gray-600 text-sm">
                O carteiro dos Correios irá até o endereço indicado no período escolhido.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 text-2xl">
                4
              </div>
              <h3 className="font-semibold mb-2">Acompanhe</h3>
              <p className="text-gray-600 text-sm">
                Rastreie suas encomendas em tempo real através da nossa plataforma.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-indigo-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato com nossa equipe de suporte ou consulte nossa central de ajuda para mais informações sobre o serviço de coleta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Falar com um Atendente
            </Link>
            <button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
              Ver Central de Ajuda
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

