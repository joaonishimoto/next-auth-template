'use client'

interface User {
  id?: string | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
  role?: string | null | undefined;
  points?: string | null | undefined;
}

import { useSession } from 'next-auth/react'

export function Points() {
  const { data: session } = useSession()

  const { id, name, email, role, points }: User = session?.user || {}

  return (
    <span className="text-teal-400 text-sm font-medium">500 pts</span>
  )
}