"use client";

import { useCreateSchedule } from "@/lib/stores/create-schedule";
import { ChangeEvent } from "react";

export default function ScheduleNameInput() {
  const { setTitle } = useCreateSchedule((state) => state);

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  return (
    <div
      className={
        "w-full h-1/3 flex flex-col items-center justify-center bg-neutral-800 text-white gap-4 p-4"
      }
    >
      <div className={"text-3xl font-bold"}>새 약속 만들기</div>
      <input
        type={"text"}
        className={
          "p-2 rounded-full bg-neutral-800 ring-2 px-4 ring-neutral-50 focus:ring-sky-500 w-full focus:outline-none"
        }
        placeholder={"약속 이름"}
        onChange={handleTitleChange}
      />
    </div>
  );
}
