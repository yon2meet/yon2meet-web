"use client";

import { addDays, differenceInDays } from "date-fns";
import { useState } from "react";
import toKoDay from "@/lib/to-ko-day";

function timeGenerator(startHour: number, endHour: number) {
  const gap = endHour - startHour;
  const timeList: { hour: string; minutes: string }[] = [];
  for (let i = 0; i < gap * 2; i += 1) {
    if (i % 2 === 0) {
      timeList.push({
        hour: `${startHour + Math.floor(i / 2)}`,
        minutes: "00",
      });
    } else {
      timeList.push({
        hour: `${startHour + Math.floor(i / 2)}`,
        minutes: "30",
      });
    }
  }

  return timeList;
}

export default function WeekCalendar({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) {
  const dateArray: Date[] = [];
  const gapBetweenDay = differenceInDays(endDate, startDate);

  for (let i = 0; i < gapBetweenDay; i += 1) {
    dateArray.push(addDays(startDate, i));
  }

  const [selected, setSelected] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  function handleDragging(data: string) {
    if (selected.includes(data)) {
      setSelected([...selected.filter((d) => d !== data)]);
    } else {
      setSelected([...selected, data]);
    }
  }

  return (
    <div className={"w-full grid grid-cols-7 h-full overflow-y-hidden"}>
      {dateArray.map((data, i) => (
        <div key={i} className={"h-full  flex flex-col"}>
          <div className={"text-sm flex items-center flex-col"}>
            <div>{toKoDay(data.getDay())}</div>
            <div>{data.getDate()}</div>
          </div>
          {timeGenerator(9, 24).map((time, i) => {
            const timeData = JSON.stringify({
              year: data.getFullYear(),
              month: data.getMonth(),
              day: data.getDay(),
              date: data.getDate(),
              hour: time.hour,
              minutes: time.minutes,
            });
            return (
              <div
                key={i}
                className={`noselect h-full text-xs flex items-start justify-end border-[1px] ${selected.includes(timeData) ? "bg-emerald-700 text-white border-emerald-800" : "border-neutral-300"}`}
                onMouseDown={() => {
                  setIsDragging(true);
                  handleDragging(timeData);
                }}
                onMouseUp={() => setIsDragging(false)}
                onMouseEnter={() => {
                  if (isDragging) {
                    handleDragging(timeData);
                  }
                }}
                onTouchStart={() => {
                  setIsDragging(true);
                  handleDragging(timeData);
                }}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={() => {
                  if (isDragging) {
                    handleDragging(timeData);
                  }
                }}
              >
                <p>
                  {time.hour}:{time.minutes}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
