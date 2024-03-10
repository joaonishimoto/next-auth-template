'use client'

interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  role?: string | null | undefined;
  points?: string | null | undefined;
}

import { useSession } from 'next-auth/react'

export default function PublicPage () {
  const { data: session } = useSession()

  const { name, email, role, points }: User = session?.user || {}



  return (
    <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
      Public
      {session && 
        <pre className="bg-slate-900 text-slate-50 p-10 rounded-lg mt-10">
          {email}
        </pre>
      }
    </div>
  )
}