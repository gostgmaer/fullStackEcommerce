"use client"
import { getSession } from 'next-auth/react';

export async function getClientSession() {
  try {
    const session = await getSession();
    return session;
  } catch (error) {
    console.error('Error fetching session:', error);
    return null;
  }
}
