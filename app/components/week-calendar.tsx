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

interface TimeType {
  time: Date;
  isAvailable: boolean;
}

export default function WeekCalendar({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) {
  const dateArray: TimeType[] = [];
  const gapBetweenDay = differenceInDays(endDate, startDate);

  if (startDate.getDay() !== 0) {
    for (let i = 0; i < startDate.getDay(); i += 1) {
      dateArray.push({
        time: addDays(startDate, -1 * (i + 1)),
        isAvailable: false,
      });
    }
    dateArray.reverse();
  }

  for (let i = 0; i < gapBetweenDay; i += 1) {
    dateArray.push({ time: addDays(startDate, i), isAvailable: true });
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
    <div
      className={
        "p-2 border-2 rounded-lg snap-center border-neutral-200 w-[90vw] h-full flex flex-col"
      }
    >
      <div className={"grid grid-cols-2 px-2"}>
        <div>
          <div className={"text-sm"}>From</div>
          <div className={"text-xl font-semibold"}>
            {startDate.getMonth() + 1}월 {startDate.getDate()}
          </div>
        </div>
        <div>
          <div className={"text-sm"}>To</div>
          <div className={"text-xl font-semibold"}>
            {endDate.getMonth() + 1}월 {endDate.getDate()}
          </div>
        </div>
      </div>
      <div className={"w-full grid grid-cols-7 h-full"}>
        {dateArray.map((data, i) => (
          <div key={i} className={"h-full flex flex-col"}>
            <div className={"flex items-center flex-col"}>
              <div className={"text-sm"}>{toKoDay(data.time.getDay())}</div>
              <div className={"font-semibold"}>{data.time.getDate()}</div>
            </div>
            {timeGenerator(9, 24).map((time, j) => {
              const timeData = JSON.stringify({
                year: data.time.getFullYear(),
                month: data.time.getMonth(),
                day: data.time.getDay(),
                date: data.time.getDate(),
                hour: time.hour,
                minutes: time.minutes,
              });
              if (!data.isAvailable) {
                return (
                  <div
                    key={j}
                    className={`noselect h-full text-[10px] flex items-start justify-end border-[1px] bg-neutral-400 border-neutral-400`}
                  >
                    <p>
                      {time.hour}:{time.minutes}
                    </p>
                  </div>
                );
              }

              return (
                <div
                  key={j}
                  className={`noselect h-full text-[10px] flex items-start justify-end border-[1px] ${selected.includes(timeData) ? "bg-emerald-700 text-white border-emerald-800" : "border-neutral-300"}`}
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
    </div>
  );
}
