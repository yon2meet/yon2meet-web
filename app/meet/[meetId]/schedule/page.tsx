"use client";

import DefaultLayout from "@/app/components/default-layout";
import WeekCalendar from "@/app/components/week-calendar";

export default function SchedulePage() {
  return (
    <DefaultLayout className={"p-4"}>
      <WeekCalendar
        startDate={new Date(2024, 11, 1)}
        endDate={new Date(2024, 11, 8)}
      />
    </DefaultLayout>
  );
}
