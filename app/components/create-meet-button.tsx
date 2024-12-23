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
    console.log(process.env.API_URL);
    const requestCreateMeet = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/schedules`,
      {
        method: "POST",
        body: JSON.stringify({
          name: title,
          startDate: `${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`,
          endDate: `${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`,
          startTime: "14:31:15",
          endTimeExclusive: "14:31:15",
          numMaxMembers: 0,
        }),
      },
    );

    const result = await requestCreateMeet.json();
    console.log(result);
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
