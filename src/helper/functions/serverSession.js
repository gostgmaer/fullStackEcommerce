// lib/auth.js
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';



// Reusable function to check if the user is authenticated
export async function isAuthenticated() {
    // Get the token from cookies or headers
    const req = NextRequest
    const token = await getToken({ req, secret });

    // Return true if the token exists, indicating user is authenticated
    return !!token;
}
