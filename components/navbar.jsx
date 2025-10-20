"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Book,
  Briefcase,
  Calendar,
  Github,
  Inbox,
  LogOut,
  Menu,
  SignalMedium,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white top-0 z-50 font-serif">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-12">
          <div className="flex items-center">
            <Book strokeWidth={2} size={30} />
            <h1 className="text-2xl">Bookey</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
            <Link href="">Community</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
            <Link href="">
              <Github size={30} />
            </Link>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link href="">
              <SignalMedium strokeWidth={3} />
            </Link>
            <Link href="">
              <Inbox size={30} strokeWidth={2} />
            </Link>
            <Link href="">
              <Briefcase size={30} strokeWidth={2} />
            </Link>
            <Link href="">
              <Calendar size={30} strokeWidth={2} />
            </Link>
          </div>
          {/* logout */}
          <div className="flex items-center gap-2">
            <LogOut size={30} strokeWidth={2} />
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Menu size={25} className="md:hidden cursor-pointer" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-64 p-4 flex flex-col justify-between h-full font-serif"
          >
            {/* --- Top Nav Links --- */}
            <nav className="flex flex-col space-y-4 mt-8 text-gray-700 font-medium">
              <Link href="" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </nav>

            {/* --- Bottom User Section --- */}
            <div className="flex items-center justify-between border-t pt-4">
              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <span className="text-sm">Justin</span>
              </div>

              {/* Logout Button */}
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
              >
                <LogOut size={18} />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
