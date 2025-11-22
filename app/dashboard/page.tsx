import { auth0 } from '@/lib/auth0';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth0.getSession();

  if (!session?.user) {
    redirect('/api/auth/login');
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard (Protected)</h1>
      
      <div className="flex items-center gap-4 mb-6">
        {session.user.picture && (
          <img 
            src={session.user.picture} 
            alt={session.user.name || 'User avatar'} 
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
        )}
        <div>
          <p className="font-semibold">Welcome, {session.user.name}!</p>
          <p className="text-gray-600">Email: {session.user.email}</p>
        </div>
      </div>

      <div className="mt-4">
        <a href="/api/auth/logout" className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </a>
      </div>
    </div>
  );
}
