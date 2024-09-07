
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(req, res) {
  // const session = await getSession({ req });
  // const token = await getToken({ req, secret })
  // const token = await getToken({ req, secret:secret });

  //  console.log(token);
  

   const cookieStore = req.cookies;

  const authorised = cookieStore.get('next-auth.session-token')
  // const authorised = true;
  // console.log(authorised);
  


  // const { id, role, email, name, username } = jwtDecode(authorised?.value)

  const { pathname } = req.nextUrl;

  // If the request is for /dashboard or any child page under /dashboard
  if (pathname.startsWith('/user') || pathname === '/checkout' || pathname.startsWith('/order')) {
    // If the user is not authenticated, redirect to the login page
    if (!authorised) {
      return NextResponse.redirect(new URL(`/auth/login?callbacks=${pathname}`, req.url));
    }
  }

  // If the user is authenticated and trying to access the login page, redirect them to the dashboard
  if (pathname.startsWith('/auth') && authorised) {
    return NextResponse.redirect(new URL('/', req.url));
  }

}

