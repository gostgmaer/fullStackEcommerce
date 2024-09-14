import { signOut } from 'next-auth/react';
import Cookies from 'js-cookie'; // For manually clearing cookies

export const handleSignOut = async () => {
  // Remove any custom cookies if needed
  const allCookies = Cookies.get();

  ////console.log(allCookies);
  Cookies.remove('accessToken')
  
  // Remove all cookies
  for (const cookieName in allCookies) {
    Cookies.remove(cookieName);
  }
  for (const cookieName in allCookies) {
    // Optionally, specify the path if needed (e.g., for NextAuth cookies)
    Cookies.remove(cookieName, { path: '/' });
  }
  // Sign out using NextAuth's built-in function
  await signOut({ redirect: false }); // You can prevent redirect with `redirect: false`

  // Optionally, redirect manually after sign-out
  window.location.href = '/'; // Redirect to home or any other page
};
