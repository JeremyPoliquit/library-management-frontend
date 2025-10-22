"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import SidebarProfile from "@/components/SidebarProfile";
import SidebarCard from "@/components/SidebarCard";
import InfoCard from "@/components/InfoCard";
import BookCards from "@/components/BookCards";
import { bookList } from "@/data/book-list";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Briefcase, Calendar, Star } from "lucide-react";
import SearchFilter from "@/components/SearchFilter";

// ✅ Responsive hook
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);
    updateMatch();
    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

export default function Page() {
  const isMedium = useMediaQuery("(min-width: 768px)");

  // ✅ dynamic items per page
  const [itemsPerPage, setItemsPerPage] = useState(isMedium ? 9 : 10);
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ recompute items per page on resize
  useEffect(() => {
    setItemsPerPage(isMedium ? 9 : 10);
    setCurrentPage(1); // reset pagination when layout changes
  }, [isMedium]);

  // ✅ slice books properly
  const totalPages = Math.ceil(bookList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedBooks = bookList.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  return (
    <div
      className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-[1fr_1.5fr_1fr] gap-6 my-6 px-4 items-start"
    >
      {/* === LEFT SIDEBAR === */}
      <aside>
        <SidebarProfile />
      </aside>

      {/* === MAIN SECTION === */}
      <main className="bg-white p-4 rounded-xl shadow-sm space-y-4">
        <SearchFilter statusIcon={<Star size={30} />} statusName="Favorite" />

        {/* Grid */}
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
            <PaginationContent className="justify-center gap-2">
              <PaginationItem>
                <PaginationPrevious
                  onClick={handlePrevious}
                  className={`cursor-pointer ${
                    currentPage === 1 ? "opacity-50 pointer-events-none" : ""
                  }`}
                />
              </PaginationItem>

              <PaginationItem>
                <span className="text-sm text-gray-600 px-2 select-none">
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
      </main>

      {/* === RIGHT SIDEBAR === */}
      <aside className="hidden lg:flex lg:flex-col lg:space-y-4">
        <SidebarCard mode="Currently Reading" title="The Brain Change Itself" />

        <InfoCard
          title="Loans"
          icon={Briefcase}
          count={50}
          over="/ Books"
          items={[
            "The Brain That Changes",
            "A Room With a View",
            "The Prince",
            "Whose Body?",
          ]}
          buttonText="Go"
        />

        <InfoCard
          title="Return"
          icon={Calendar}
          items={[
            "Art of Statistics",
            "Treasure Island",
            "Antigone",
            "The Camp of the Saints",
          ]}
          buttonText="Go"
        />
      </aside>
    </div>
  );
}
