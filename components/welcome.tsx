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
    <div>
      <h1 className="text-teal-400 text-3xl font-bold ">Welcome,</h1>
      <p className='text-teal-600 mt-1'>{name}</p>
    </div>
  )
}