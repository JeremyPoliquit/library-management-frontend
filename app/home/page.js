import SearchFIlter from "@/components/SearchFIlter";
import SidebarCard from "@/components/SidebarCard";
import SidebarProfile from "@/components/SidebarProfile";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SidebarProfile />

      <section className="bg-white p-4 rounded-lg shadow">
        <SearchFIlter />
      </section>

      <SidebarCard mode="Currently Reading" title="The Brain Change Itself" />
    </div>
  );
}

export default page;
