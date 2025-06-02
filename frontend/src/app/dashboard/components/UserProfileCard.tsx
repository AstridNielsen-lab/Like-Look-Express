import Link from 'next/link';
import { UserCircle } from 'lucide-react';

// Type for user data
interface User {
  name: string;
  email: string;
  createdAt: string;
  avatarUrl?: string;
  plan?: string;
}

interface UserProfileCardProps {
  user: User;
}

export default function UserProfileCard({ user }: UserProfileCardProps) {
  // Format date to locale string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col items-center text-center mb-4">
        <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
          {user.avatarUrl ? (
            <img 
              src={user.avatarUrl} 
              alt={user.name} 
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <UserCircle size={48} className="text-indigo-600" />
          )}
        </div>
        <h3 className="font-semibold text-lg">{user.name}</h3>
        <p className="text-gray-500 text-sm">{user.email}</p>
        <div className="mt-2 text-xs text-gray-400">
          Cliente desde {formatDate(user.createdAt)}
        </div>
        {user.plan && (
          <div className="mt-2 text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
            Plano {user.plan}
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-100 pt-4 mt-4">
        <Link href="/dashboard/perfil" className="flex items-center justify-between py-2 text-sm hover:text-indigo-600 transition">
          <span>Editar Perfil</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link href="/dashboard/endereco" className="flex items-center justify-between py-2 text-sm hover:text-indigo-600 transition">
          <span>Meus Endereços</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link href="/dashboard/seguranca" className="flex items-center justify-between py-2 text-sm hover:text-indigo-600 transition">
          <span>Segurança</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link href="/dashboard/pagamentos" className="flex items-center justify-between py-2 text-sm hover:text-indigo-600 transition">
          <span>Métodos de Pagamento</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

