"use client";

import { useRouter } from "next/navigation";
import { useCreateSchedule } from "@/lib/stores/create-schedule";

export default function CreateMeetButton() {
  const router = useRouter();
  const { title, start, end } = useCreateSchedule((state) => state);

  async function handleClick() {
    if (!start || !end) {
      alert("시작일과 종료일을 설정해주세요.");
      return;
    }

    const requestCreateMeet = await fetch(`${process.env.API_URL}/meet`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        start: start,
        end: end,
      }),
    });

    const result = (await requestCreateMeet.json()) as { id: string };

    router.push(`/meet/${result.id}`);
  }

  return (
    <button
      onClick={handleClick}
      type={"button"}
      className={
        "w-full p-2 rounded-lg bg-emerald-500 text-white font-semibold text-lg text-center"
      }
    >
      약속 만들기
    </button>
  );
}
