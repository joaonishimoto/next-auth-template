import { HomeIcon, LockIcon, LogOut, UnlockIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

import { SignOutButton } from './sign-out-button'
import { getServerSession } from 'next-auth'
import { Separator } from "./ui/separator";

const Sidebar = async () => {
  const session = await getServerSession()
  
  return (
    <aside className="hidden border-r bg-teal-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <HomeIcon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/public"
              >
                <UnlockIcon className="h-4 w-4" />
                Public
                <Badge className="bg-teal-300 text-white ml-auto flex h-6 w-6 shrink-0 items-center justify-center text-center rounded-full">
                  02
                </Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/private"
              >
                <LockIcon className="h-4 w-4" />
                Private
              </Link>
              {session &&
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <LogOut className="h-4 w-4" />
                <SignOutButton>Sair</SignOutButton>
              </Link>
              }
            </nav>
          </div>
        </div>
      </aside>
  )
}

export { Sidebar }


  <li><SignOutButton>sair</SignOutButton></li>
