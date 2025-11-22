import { auth0 } from '@/lib/auth0';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth0.getSession();

  return NextResponse.json({
    message: 'Hello from the API',
    user: session?.user || null,
  });
}
