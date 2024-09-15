"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'


const Index = (props) => {

    const router = useRouter();

    useEffect(() => {
        router.push('/user/my-account/profile'); // Redirects to the home page
    }, [router]);

    return null; // Since it's being redirected, no need to return any UI
}

export default Index