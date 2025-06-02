'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Form validation state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Form status state
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      valid = false;
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
      valid = false;
    }
    
    // Validate phone (optional but must be valid if provided)
    if (formData.phone && !/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Telefone inválido';
      valid = false;
    }
    
    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
      valid = false;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call with setTimeout
      setTimeout(() => {
        setIsSubmitting(false);
        setStatus({
          submitted: true,
          success: true,
          message: 'Sua mensagem foi enviada com sucesso! Nossa equipe entrará em contato em breve.',
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 1500);
    }
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
            Entre em <span className="text-indigo-600">Contato</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar. Envie sua mensagem e nossa equipe entrará em contato o mais breve possível.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envie uma Mensagem
            </h2>

            {status.submitted && (
              <div className={`mb-6 p-4 rounded-lg ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nome Completo*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(11) 99999-9999"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Assunto*
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Dúvida sobre serviços">Dúvida sobre serviços</option>
                  <option value="Suporte ao cliente">Suporte ao cliente</option>
                  <option value="Rastreamento de encomenda">Rastreamento de encomenda</option>
                  <option value="Solicitação de coleta">Solicitação de coleta</option>
                  <option value="Parceria comercial">Parceria comercial</option>
                  <option value="Outros">Outros</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensagem*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg text-white font-medium transition ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            {/* Company Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefone</h3>
                    <p className="text-gray-600">Central de Atendimento: (11) 3333-4444</p>
                    <p className="text-gray-600">Suporte: 0800 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">Atendimento: contato@likelookexpress.com</p>
                    <p className="text-gray-600">Suporte: suporte@likelookexpress.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat Online</h3>
                    <p className="text-gray-600">Disponível de segunda a sexta, das 8h às 18h</p>
                    <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                      Iniciar Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Office Locations */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nossos Escritórios
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">São Paulo (Matriz)</h3>
                    <p className="text-gray-600">Av. Paulista, 1000, 10º andar</p>
                    <p className="text-gray-600">Bela Vista, São Paulo - SP, 01310-100</p>
                    <p className="text-gray-600 mt-2">
                      <strong>Horário de Funcionamento:</strong><br />
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Rio de Janeiro</h3>
                    <p className="text-gray-600">Av. Rio Branco, 500, Sala 501</p>
                    <p className="text-gray-600">Centro, Rio de Janeiro - RJ, 20040-002</p>
                    <p className="text-gray-600 mt-2">
                      <strong>Horário de Funcionamento:</strong><br />
                      Segunda a Sexta: 8h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Redes Sociais
              </h2>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  <span className="mr-2">Facebook</span>
                </a>
                <a href="#" className="flex items-center bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                  <span className="mr-2">Twitter</span>
                </a>
                <a href="#" className="flex items-center bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                  <span className="mr-2">Instagram</span>
                </a>
                <a href="#" className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                  <span className="mr-2">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                  <span className="mr-2">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Encontre-nos
          </h2>
          
          {/* Map placeholder - in a real implementation, this would be a Google Maps or other map integration */}
          <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-gray-600">Mapa interativo será carregado aqui</p>
              <p className="text-sm text-gray-500 mt-2">(Em uma implementação real, este seria um mapa do Google Maps)</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2">Qual o horário de atendimento do suporte?</h3>
              <p className="text-gray-600">
                Nosso suporte ao cliente está disponível de segunda a sexta, das 8h às 20h, e aos sábados, das 9h às 15h. 
                Para emergências, oferecemos suporte 24/7 através do nosso canal prioritário.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Como posso rastrear minha encomenda?</h3>
              <p className="text-gray-600">
                Você pode rastrear sua encomenda diretamente em nossa plataforma, na seção "Rastreamento". 
                Basta inserir o código de rastreio fornecido no momento da postagem.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Como solicitar uma coleta em minha residência?</h3>
              <p className="text-gray-600">
                Para agendar uma coleta, acesse a seção "Agendar Coleta" em nosso site ou aplicativo, 
                informe o endereço, data e horário preferencial, e um de nossos parceiros realizará a coleta.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Quais são as formas de pagamento aceitas?</h3>
              <p className="text-gray-600">
                Aceitamos cartões de crédito e débito, transferência bancária, PIX e boleto bancário. 
                Para clientes empresariais, oferecemos também a opção de pagamento por faturamento mensal.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Como faço para me tornar um parceiro da Like Look Express?</h3>
              <p className="text-gray-600">
                Para se tornar um parceiro, entre em contato conosco através do formulário nesta página, 
                selecionando "Parceria comercial" como assunto. Nossa equipe de parcerias entrará em contato 
                para apresentar nossas opções de colaboração.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre para nossa lista de clientes satisfeitos e descubra como podemos transformar sua experiência logística.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Solicitar Demonstração
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
              Falar com Consultor
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

