"use client";

import { useSidebar } from "@/lib/stores/sidebar";

export default function Sidebar() {
  const { isOpen } = useSidebar((state) => state);
  return (
    <div
      className={`fixed top-0 pt-16 p-4 left-0 w-screen bg-neutral-100 h-screen ${isOpen ? "translate-x-full" : "translate-x-0"} transition-all`}
    >
      <div>Sidebar</div>
    </div>
  );
}
