import SidebarLeft from "@/components/SidebarProfile";
import SidebarRight from "@/components/SidebarCard";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SidebarLeft />

      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Main Content</h2>
        <p>This is your main content section.</p>
      </section>

      <SidebarRight />
    </div>
  );
}

export default page;
