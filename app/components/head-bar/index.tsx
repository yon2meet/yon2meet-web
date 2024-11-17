import Link from "next/link";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import SidebarButton from "@/app/components/head-bar/sidebar-button";

export default function HeadBar() {
  return (
    <div
      className={
        "w-screen fixed top-0 left-0 p-2 bg-neutral-50 flex justify-between z-10"
      }
    >
      <Link href={"/"} className={"text-xl font-bold flex gap-2 items-center"}>
        <UserGroupIcon className={"size-8"} />
        <p>yon2meet</p>
      </Link>
      <SidebarButton />
    </div>
  );
}
