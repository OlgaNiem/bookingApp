import { getServerSession } from 'next-auth'
import React from 'react'
import { AuthOptions } from '../../../lib/authOptions'
import { redirect } from 'next/navigation';
import BookingForm from './Form';

const  page = async () => {
    const session = await getServerSession(AuthOptions)
    if (!session) {
        redirect('/login')
    }

    return (
    
<main className='max-w-7xl mx-auto my-12 space-y-6'>
    <BookingForm  />
</main>
  );
};

export default page