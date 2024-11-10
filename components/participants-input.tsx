"use client";

import { useCreateSchedule } from "@/lib/stores/create-schedule";

const participantOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ParticipantsInput() {
  const { setParticipants, participants } = useCreateSchedule((state) => state);

  return (
    <div className={"w-full flex gap-1 items-center justify-around"}>
      {participantOptions.map((participantOption) => (
        <button
          type={"button"}
          onClick={() => setParticipants(participantOption)}
          key={participantOption}
          className={`p-1 px-3 rounded-lg ${participants === participantOption ? "bg-sky-500 text-white" : "bg-neutral-100"}`}
        >
          {participantOption}
        </button>
      ))}
    </div>
  );
}
