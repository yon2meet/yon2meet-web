"use client";

import { useCreateSchedule } from "@/lib/stores/create-schedule";
import { useRouter } from "next/navigation";

export default function CreateScheduleButton() {
  const { title, start, end, participants } = useCreateSchedule(
    (state) => state,
  );

  const router = useRouter();

  function handleCreateSchedule() {
    console.log({ title, start, end, participants });
    router.push("/meet/1");
  }

  return (
    <div className={"flex p-4 w-full"}>
      <button
        type={"button"}
        className={
          "p-2 px-4 rounded-lg w-full bg-sky-500 text-white font-semibold"
        }
        onClick={handleCreateSchedule}
      >
        약속 만들기
      </button>
    </div>
  );
}
