import { Middleware } from "next/dist/lib/load-custom-routes"
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server"

const publicRoutes = ['/auth/login', '/auth/register'];
const REDIRECT_NOT_AUTHENTICATED = '/auth/login';

export function middleware(request: NextRequest) {

  const isPublic = publicRoutes.includes(request.nextUrl.pathname);
  const token = request.cookies.get('token')?.value;

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL(REDIRECT_NOT_AUTHENTICATED, request.url));
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
    matcher: [
        '/dashboard',
        '/'
    ]
}