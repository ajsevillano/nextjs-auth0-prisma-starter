import { auth0 } from '@/lib/auth0';

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Next.js Auth0 Starter</h1>
      <div className="flex gap-4">
        {!session ? (
          <a href="/api/auth/login" className="bg-blue-500 text-white px-6 py-3 rounded text-lg">
            Login
          </a>
        ) : (
          <a href="/api/auth/logout" className="bg-red-500 text-white px-6 py-3 rounded text-lg">
            Logout
          </a>
        )}
      {session && (
        <a href="/dashboard" className="bg-green-500 text-white px-6 py-3 rounded text-lg">
          Go to Dashboard
        </a>
      )}
      </div>
    </div>
  );
}
