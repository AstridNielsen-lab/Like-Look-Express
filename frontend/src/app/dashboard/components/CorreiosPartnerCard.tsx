export default function CorreiosPartnerCard() {
  return (
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
  );
}

