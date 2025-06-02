import Link from 'next/link';
import { BarChart2 } from 'lucide-react';

interface ActivitySummaryProps {
  shipments: {
    total: number;
    inTransit: number;
    delivered: number;
  };
  pickups: {
    scheduled: number;
    completed: number;
  };
}

export default function ActivitySummaryCard({ 
  shipments, 
  pickups 
}: ActivitySummaryProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Resumo de Atividades</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Total de envios</span>
          <span className="font-semibold">{shipments.total}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Em trânsito</span>
          <span className="font-semibold">{shipments.inTransit}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Entregues</span>
          <span className="font-semibold">{shipments.delivered}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Coletas agendadas</span>
          <span className="font-semibold">{pickups.scheduled}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Coletas realizadas</span>
          <span className="font-semibold">{pickups.completed}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link href="/dashboard/relatorios" className="flex items-center text-sm text-indigo-600 hover:text-indigo-800">
          <BarChart2 size={16} className="mr-1" />
          <span>Ver relatório detalhado</span>
        </Link>
      </div>
    </div>
  );
}

