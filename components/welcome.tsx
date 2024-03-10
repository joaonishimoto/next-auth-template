'use client'

interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  role?: string | null | undefined;
  points?: string | null | undefined;
}

import { useSession } from 'next-auth/react'

export function Welcome() {
  const { data: session } = useSession()

  const { name, email, role, points }: User = session?.user || {}

  return (
    <div className=''>
      <h2 className="inline text-teal-400 text-xl">Welcome, </h2>
      <h1 className='inline text-teal-500 text-xl font-bold'>{name}!</h1>
    </div>
  )
}