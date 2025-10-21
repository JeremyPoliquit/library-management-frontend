import React from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Home, Search } from "lucide-react";
import { genre } from "@/data/genre";
import Link from "next/link";
import { Badge } from "./ui/badge";

function SearchFIlter() {
  return (
    <div className="flex flex-col space-y-4 font-serif">
      {/* Search */}
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      {/* Filter */}
      <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap custom-scrollbar-hide">
        {/* Home */}
        <div className="flex items-center">
          <Home size={30} />
          <h2 className="text-xl">Home</h2>
        </div>
        {/* Badge List */}
        {genre.map(({ id, name, href }) => (
          <div key={id}>
            <Link href={href}>
              <Badge variant="secondary" className="text-xs">{name}</Badge>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchFIlter;
