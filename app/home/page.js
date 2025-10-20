import SidebarCard from "@/components/sidebar-card";
import SidebarProfile from "@/components/sidebar-profile";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SidebarProfile />

      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Main Content</h2>
        <p>This is your main content section.</p>
      </section>

      <SidebarCard mode="Currently Reading" title="The Brain Change Itself" />
    </div>
  );
}

export default page;
