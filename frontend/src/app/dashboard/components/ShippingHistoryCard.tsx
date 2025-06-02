import Link from 'next/link';

// Type for a shipping record
interface ShippingRecord {
  id: string;
  trackingCode: string;
  service: string;
  origin: string;
  destination: string;
  status: string;
  updatedAt: string;
  estimatedDelivery: string;
}

interface ShippingHistoryCardProps {
  shipments: ShippingRecord[];
  limit?: number;
}

export default function ShippingHistoryCard({ shipments, limit = 3 }: ShippingHistoryCardProps) {
  // Format date to locale string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  // Get the limited number of shipments to display
  const displayShipments = limit ? shipments.slice(0, limit) : shipments;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Histórico de Envios</h2>
        <Link href="/dashboard/envios" className="text-sm text-indigo-600 hover:text-indigo-800">
          Ver todos
        </Link>
      </div>
      
      {displayShipments.length > 0 ? (
        <div className="space-y-4">
          {displayShipments.map((shipment) => (
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
      ) : (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-400 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <p className="text-gray-500 mb-4">Você ainda não tem envios registrados.</p>
          <Link href="/calcular-frete" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Criar Envio
          </Link>
        </div>
      )}
    </div>
  );
}

