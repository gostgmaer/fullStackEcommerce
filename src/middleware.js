
// import { getServerSession } from 'next-auth';
// import { cookies } from 'next/headers'
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
import { secret } from './config/setting';
// import { authOptions } from './app/api/auth/[...nextauth]/route';

// This function can be marked `async` if using `await` inside
export async function middleware(req, res) {
  // const session = await getSession({ req });
  // const token = await getToken({ req, secret })
  const authorised = await getToken({ req, secret:secret });

  //  console.log(token);
 
// @ts-ignore
// const session = await getServerSession(authOptions);


  //  const cookieStore = req.cookies;

  // const authorised = cookieStore.get('next-auth.session-token')
  // const authorised = true;
  // console.log(authorised);
  


  // const { id, role, email, name, username } = jwtDecode(authorised?.value)

  const { pathname } = req.nextUrl;

  // If the request is for /dashboard or any child page under /dashboard
  if (pathname.startsWith('/user') || pathname === '/checkout' || pathname.startsWith('/order')) {
    // If the user is not authenticated, redirect to the login page
    if (!authorised) {
      return NextResponse.redirect(new URL(`/auth/login`, req.url));
    }
  }

  // If the user is authenticated and trying to access the login page, redirect them to the dashboard
  if (pathname.startsWith('/auth') && authorised) {
    return NextResponse.redirect(new URL('/', req.url));
  }

}

