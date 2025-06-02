import Link from 'next/link';
import { 
  Truck, 
  Calendar, 
  MapPin, 
  FileText,
  BarChart2,
  User,
  Package,
  Settings
} from 'lucide-react';

// Action item type
interface ActionItem {
  name: string;
  href: string;
  icon: any;
  color?: string;
}

interface QuickActionsCardProps {
  title?: string;
  actions?: ActionItem[];
}

export default function QuickActionsCard({ 
  title = 'Ações Rápidas',
  actions 
}: QuickActionsCardProps) {
  // Default actions if none provided
  const defaultActions: ActionItem[] = [
    {
      name: 'Calcular Frete',
      href: '/calcular-frete',
      icon: Truck,
    },
    {
      name: 'Agendar Coleta',
      href: '/agendar-coleta',
      icon: Calendar,
    },
    {
      name: 'Rastrear',
      href: '/rastreamento',
      icon: MapPin,
    },
    {
      name: 'Etiquetas',
      href: '/dashboard/etiquetas',
      icon: FileText,
    },
  ];

  // Use provided actions or default ones
  const displayActions = actions || defaultActions;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayActions.map((action) => (
          <Link 
            key={action.name}
            href={action.href} 
            className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition text-center"
          >
            <div className={`w-10 h-10 rounded-full bg-${action.color || 'indigo'}-100 text-${action.color || 'indigo'}-600 flex items-center justify-center mb-2`}>
              <action.icon size={20} />
            </div>
            <span className="text-sm font-medium">{action.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

