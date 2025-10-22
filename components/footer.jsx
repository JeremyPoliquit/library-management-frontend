import { discovery, help, openLibrary } from "@/data/footer-list";
import { Book } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 mx-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 font-serif text-center md:text-left">
      {/* Logo Section */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex items-center gap-2">
          <Book size={40} />
          <h1 className="text-3xl">Bookey</h1>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <img src="/assets/icons/twitter.png" className="w-5 h-5" />
          <img src="/assets/icons/instagram.png" className="w-5 h-5" />
          <img src="/assets/icons/youtube.png" className="w-5 h-5" />
          <img src="/assets/icons/linkedin.png" className="w-5 h-5" />
        </div>
      </div>

      {/* Open Library */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">Open Library</h3>
        {openLibrary.map(({ id, name, href }) => (
          <ul key={id} className="flex flex-col gap-2 list-inside">
            <Link href={href}>{name}</Link>
          </ul>
        ))}
      </div>

      {/* Discover */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">Discover</h3>
        {discovery.map(({ id, name, href }) => (
          <ul key={id} className="flex flex-col gap-2 list-inside">
            <Link href={href}>{name}</Link>
          </ul>
        ))}
      </div>

      {/* Help */}
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">Help</h3>
        {help.map(({ id, name, href }) => (
          <ul key={id} className="flex flex-col gap-2 list-inside">
            <Link href={href}>{name}</Link>
          </ul>
        ))}
      </div>
    </footer>
  );
}
