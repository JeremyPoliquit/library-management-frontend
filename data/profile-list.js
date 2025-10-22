import { Home, Bookmark, Star, Trash2, Archive} from "lucide-react";

export const sidebarItems = [
  {
    id: 1,
    name: "Home",
    icon: Home,
    href: "/home",
  },
  {
    id: 2,
    name: "Bookmark",
    icon: Bookmark,
    href: "/favorite",
  },
  {
    id: 3,
    name: "Favorite",
    icon: Star,
    href: "",
  },
  {
    id: 4,
    name: "Delete",
    icon: Trash2,
    href: "",
  },
  {
    id: 5,
    name: "Archive",
    icon: Archive,
    href: "",
  },
];


export const mobileItems = [
  {
    id: 1,
    icon: Bookmark,
    name: "Save",
    href: "",
  },
  {
    id: 2,
    icon: Archive,
    name: "Archive",
    href: "",
  },
  {
    id: 3,
    icon: Trash2,
    name: "Delete",
    href: "",
  }
]