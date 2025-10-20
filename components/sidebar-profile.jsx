import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Archive, Bookmark, ChevronRight, Trash2 } from "lucide-react";
import { mobileItems, sidebarItems } from "@/data/profile-list";
import SidebarCard from "./sidebar-card";

function SidebarProfile() {
  return (
    <aside className="flex justify-around lg:flex-col items-center mx-4 gap-6 font-serif space-y-4">
      {/* profile */}
      <div className="flex flex-col items-center-safe">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <h1 className="text-xl">Justin</h1>
        <h3 className="text-sm">@Tadaiki</h3>
      </div>

      {/* mobile */}
      <div className="flex flex-col space-y-2 lg:hidden">
        <SidebarCard mode="Currently Reading" title="The Brain Change Itself" />
        <div className="flex items-center space-x-4">
          {mobileItems.map(({ id, icon: Icon, name, href }) => (
            <Link href={href} className="flex space-x-0.5" key={id}>
              <Icon />
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* menu list desktop */}
      <ul className="hidden lg:block">
        {sidebarItems.map(({ id, name, icon: Icon, href }) => (
          <li
            key={id}
            className="flex items-center justify-between hover:bg-gray-100 rounded-md px-3 py-2 transition"
          >
            <Link href={href} className="flex items-center gap-3">
              <Icon size={20} />
              <span>{name}</span>
            </Link>
            <ChevronRight size={18} />
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SidebarProfile;
