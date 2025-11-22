import { auth0 } from '@/lib/auth0';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  console.log('GET /api/auth/[auth0] hit');
  console.log('URL:', req.url);
  console.log('Pathname:', req.nextUrl.pathname);
  try {
    const res = await (auth0 as any).authClient.handler(req);
    console.log('Handler response status:', res.status);
    return res;
  } catch (e) {
    console.error('Handler error:', e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};


