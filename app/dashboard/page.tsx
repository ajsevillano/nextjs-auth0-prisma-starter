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
      <p>Welcome, {session.user.name}!</p>
      <p>Email: {session.user.email}</p>
      <div className="mt-4">
        <a href="/api/auth/logout" className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </a>
      </div>
    </div>
  );
}
