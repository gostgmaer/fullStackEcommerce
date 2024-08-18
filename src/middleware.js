import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

cookies
// This function can be marked `async` if using `await` inside
export function middleware(request) {

  const cookieStore = request.cookies;

  const authorised = cookieStore.get('accessToken')



  // const { id, role, email, name, username } = jwtDecode(authorised?.value)

  const { pathname } = request.nextUrl;

  // If the request is for /dashboard or any child page under /dashboard
  if (pathname.startsWith('/dashboard') || pathname === '/checkout') {
    // If the user is not authenticated, redirect to the login page
    if (!authorised) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  // If the user is authenticated and trying to access the login page, redirect them to the dashboard
  if (pathname.startsWith('/auth') && authorised) {
    return NextResponse.redirect(new URL('/', request.url));
  }

}

