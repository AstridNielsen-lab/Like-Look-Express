import Link from 'next/link';
import { Calendar } from 'lucide-react';

// Type for a pickup record
interface PickupRecord {
  id: string;
  date: string;
  time: string;
  address: string;
  status: string;
  packages: number;
}

interface ScheduledPickupsCardProps {
  pickups: PickupRecord[];
  limit?: number;
}

export default function ScheduledPickupsCard({ pickups, limit = 3 }: ScheduledPickupsCardProps) {
  // Format date to locale string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  // Get the limited number of pickups to display
  const displayPickups = limit ? pickups.slice(0, limit) : pickups;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Coletas Agendadas</h2>
        <Link href="/agendar-coleta" className="text-sm text-indigo-600 hover:text-indigo-800">
          Agendar nova
        </Link>
      </div>
      
      {displayPickups.length > 0 ? (
        <div className="space-y-4">
          {displayPickups.map((pickup) => (
            <div key={pickup.id} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{pickup.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      pickup.status === 'Realizada' 
                        ? 'bg-green-100 text-green-800' 
                        : pickup.status === 'Agendada' 
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
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
  );
}

