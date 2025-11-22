import { auth0 } from '@/lib/auth0';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  console.log('GET /api/auth/[auth0] hit');
  console.log('URL:', req.url);
  console.log('Pathname:', req.nextUrl.pathname);
  
  try {
    // Process the Auth0 handler first
    const res = await (auth0 as any).authClient.handler(req);
    console.log('Handler response status:', res.status);
    
    // If this is a successful callback, sync the user to the database
    if (req.nextUrl.pathname === '/api/auth/callback' && res.status === 307) {
      try {
        // Get the session after the callback has been processed
        const session = await auth0.getSession();
        
        if (session?.user) {
          const { prisma } = await import('@/lib/prisma');
          const { email, name } = session.user;
          
          if (email) {
            await prisma.user.upsert({
              where: { email },
              update: { 
                name: name || null,
                lastLogin: new Date(),
              },
              create: {
                email,
                name: name || null,
                lastLogin: new Date(),
              },
            });
            
            console.log(`✅ User synced to database: ${email}`);
          }
        }
      } catch (dbError) {
        // Log the error but don't fail the authentication
        console.error('❌ Error syncing user to database:', dbError);
      }
    }
    
    return res;
  } catch (e) {
    console.error('Handler error:', e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};


