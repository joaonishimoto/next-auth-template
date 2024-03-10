import { HomeIcon, LockIcon, LogOut, MoonIcon, UnlockIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

import { getServerSession } from 'next-auth';
import { SignOutButton } from './sign-out-button';
import { Separator } from "./ui/separator";

const Sidebar = async () => {
  const session = await getServerSession()
  
  return (
    <aside className="hidden border-r bg-teal-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          
          <div className="flex h-[60px] items-center p-6 mb-10 mt-4">
            <Link className="flex items-center gap-2 font-semibold text-xl text-zinc-950" href="/">
              <MoonIcon className="h-6 w-6 text-teal-500" />
              <span className="ml-3">Brand</span>
            </Link>
          </div>

          <div className="flex-1">
            <nav className="grid items-start ml-8 text-sm font-medium gap-4">
              <Link
                className="group flex items-center gap-6 py-2 text-gray-400 transition-all"
                href="/"
              >
                <HomeIcon className="h-4 w-4 text-teal-400" />
                <p className="text-teal-800 font-semibold">Dashboard</p>
                <span className="bg-teal-400 w-0.5 h-4 ml-auto rounded"></span>
              </Link>
              <Link
                className="group flex items-center gap-6 rounded-lg py-2 text-gray-400 transition-all hover:text-teal-400"
                href="/public"
              >
                <UnlockIcon className="h-4 w-4 group-hover:text-teal-500" />
                <p className="group-hover:text-zinc-950 font-semibold">Public</p>
                {/* <Badge className="bg-teal-300 text-white ml-auto flex h-6 w-6 shrink-0 items-center justify-center text-center rounded-full">
                  02
                </Badge> */}
              </Link>
              <Link
                className="group flex items-center gap-6 rounded-lg py-2 text-gray-400 transition-all hover:text-teal-400"
                href="/private"
              >
                <LockIcon className="h-4 w-4 group-hover:text-teal-500" />
                <p className="group-hover:text-zinc-950 font-semibold">Private</p>
              </Link>
              {session &&
              <Link
                className="group flex items-center gap-6 rounded-lg py-2 text-gray-400 transition-all hover:text-teal-400"
                href="#"
              >
                <LogOut className="h-4 w-4 group-hover:text-teal-500" />
                <p className="group-hover:text-zinc-950 font-semibold"><SignOutButton>Sair</SignOutButton></p>
              </Link>
              }
            </nav>
          </div>

        </div>
      </aside>
  )
}

export { Sidebar };

