import { Book, BookOpen, ChevronRight } from "lucide-react";

function SidebarCard({ mode, title }) {
  return (
    <aside className="flex flex-col space-y-2 font-serif w-64 h-24 px-4 py-4 border-gray rounded-md truncate border">
      {/* Top */}
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-lg">{mode}</h2>
        <BookOpen strokeWidth={2} />
      </div>
      {/* Bottom */}
      <div className="flex items-center space-x-2">
        <Book />
        <p className="text-sm">{title}</p>
        <ChevronRight />
      </div>
    </aside>
  );
}

export default SidebarCard;
