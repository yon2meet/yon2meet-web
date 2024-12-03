"use client";

import DefaultLayout from "@/app/components/default-layout";
import WeekCalendar from "@/app/components/week-calendar";

export default function SchedulePage() {
  return (
    <DefaultLayout
      className={"p-2 flex snap-x overflow-x-auto overflow-y-hidden"}
    >
      <div className={"whitespace-nowrap flex gap-4 px-4 h-full"}>
        <WeekCalendar
          startDate={new Date(2024, 11, 1)}
          endDate={new Date(2024, 11, 8)}
        />
        <WeekCalendar
          startDate={new Date(2024, 11, 1)}
          endDate={new Date(2024, 11, 8)}
        />
        <WeekCalendar
          startDate={new Date(2024, 11, 1)}
          endDate={new Date(2024, 11, 8)}
        />
      </div>
    </DefaultLayout>
  );
}
