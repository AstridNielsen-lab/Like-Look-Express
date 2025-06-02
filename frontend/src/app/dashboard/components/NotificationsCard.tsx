import Link from 'next/link';

// Type for a notification
interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

interface NotificationsCardProps {
  notifications: Notification[];
  limit?: number;
}

export default function NotificationsCard({ notifications, limit = 3 }: NotificationsCardProps) {
  // Format datetime to locale string
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Get the limited number of notifications to display
  const displayNotifications = limit ? notifications.slice(0, limit) : notifications;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Notificações</h2>
        <Link href="/dashboard/notificacoes" className="text-sm text-indigo-600 hover:text-indigo-800">
          Ver todas
        </Link>
      </div>
      
      {displayNotifications.length > 0 ? (
        <div className="space-y-4">
          {displayNotifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-3 rounded-lg ${notification.read ? 'bg-white border border-gray-200' : 'bg-blue-50 border border-blue-200'}`}
            >
              <div className="flex justify-between items-start">
                <h4 className={`font-medium text-sm ${notification.read ? 'text-gray-900' : 'text-blue-800'}`}>
                  {notification.title}
                </h4>
                {!notification.read && (
                  <span className="bg-blue-600 rounded-full w-2 h-2"></span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">{notification.message}</p>
              <div className="text-xs text-gray-400 mt-2">
                {formatDateTime(notification.date)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-400 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <p className="text-gray-500">Você não tem novas notificações.</p>
        </div>
      )}
    </div>
  );
}

