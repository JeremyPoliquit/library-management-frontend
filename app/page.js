import { Book } from "lucide-react";
import React from "react";

function page() {
  return (
    <main
      className="relative flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/assets/bg.gif')" }}
    >
      <div className="flex items-center relative z-10 ">
        <Book strokeWidth={2} size={40} />
        <h1 className="text-5xl text-gray-800 font-serif">Bookey</h1>
      </div>
    </main>
  );
}

export default page;
