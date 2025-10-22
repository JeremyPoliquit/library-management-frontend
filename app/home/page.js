"use client";

import React, { useState, useEffect } from "react";
import BookCards from "@/components/BookCards";
import SearchFilter from "@/components/SearchFilter";
import SidebarCard from "@/components/SidebarCard";
import SidebarProfile from "@/components/SidebarProfile";
import { bookList } from "@/data/book-list";
import Link from "next/link";

// Shadcn UI Pagination
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Home } from "lucide-react";

// ✅ Responsive media query hook
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

function Page() {
  // detect if screen is medium or larger (>=768px)
  const isMedium = useMediaQuery("(min-width: 768px)");

  // dynamically adjust items per page
  const itemsPerPage = isMedium ? 9 : 10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(bookList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedBooks = bookList.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-[1fr_1.5fr_1fr] gap-6 my-6 px-4 items-start">
      {/* === Left Sidebar === */}
      <SidebarProfile />

      {/* === Middle Section === */}
      <section className="bg-white p-4 rounded-lg shadow space-y-4">
        <SearchFilter statusIcon={<Home size={30} />} statusName="Home" />

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {displayedBooks.map(({ id, image, title, href }) => (
            <Link key={id} href={href}>
              <BookCards image={image} title={title} />
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {bookList.length > itemsPerPage && (
          <Pagination className="mt-6">
            <PaginationContent className="justify-center">
              <PaginationItem>
                <PaginationPrevious
                  onClick={handlePrevious}
                  className={`cursor-pointer ${
                    currentPage === 1 ? "opacity-50 pointer-events-none" : ""
                  }`}
                />
              </PaginationItem>

              <PaginationItem>
                <span className="text-sm text-gray-600 px-2">
                  Page {currentPage} of {totalPages}
                </span>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  onClick={handleNext}
                  className={`cursor-pointer ${
                    currentPage === totalPages
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </section>

      {/* === Right Sidebar === */}
      <aside className="hidden lg:block">
        <SidebarCard mode="Currently Reading" title="The Brain Change Itself" />
      </aside>
    </div>
  );
}

export default Page;
