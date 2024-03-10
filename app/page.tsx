'use client'

interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  role?: string | null | undefined;
  points?: string | null | undefined;
}

import { useSession } from 'next-auth/react'

import { Main } from '@/components/main';

export default function Page() {

  const { data: session } = useSession()

  const { name, email, role, points }: User = session?.user || {}


  return (
    session ? <Main /> : <div>Dashboard</div> 
  )
}