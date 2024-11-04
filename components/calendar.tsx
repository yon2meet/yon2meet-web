"use client";

import { startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

function getMonthDates(year: number, month: number) {
  const startDate = startOfMonth(new Date(year, month - 1, 1));
  const endDate = endOfMonth(new Date(year, month - 1, 1));

  return eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
}

export default function Calendar({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  const dates = getMonthDates(year, month);
  const emptyDates = [];
  for (let i = 0; i < dates[0].getDay(); i++) {
    emptyDates.push(1);
  }
  return (
    <div className={"flex flex-col items-center justify-center p-4 w-full"}>
      <div className={"font-semibold text-lg"}>
        {year}년 {month}월
      </div>
      <div className={"grid grid-cols-7 w-full place-items-stretch aspect-1"}>
        <div
          className={
            "bg-neutral-200 text-center flex items-center justify-center rounded-tl-lg"
          }
        >
          일
        </div>
        <div
          className={
            "bg-neutral-200 text-center flex items-center justify-center"
          }
        >
          월
        </div>
        <div
          className={
            "bg-neutral-200 text-center flex items-center justify-center"
          }
        >
          화
        </div>
        <div
          className={
            "bg-neutral-200 text-center flex items-center justify-center"
          }
        >
          수
        </div>
        <div
          className={
            "bg-neutral-200 text-center flex items-center justify-center"
          }
        >
          목
        </div>
        <div
          className={
            "bg-neutral-200 text-center flex items-center justify-center"
          }
        >
          금
        </div>
        <div
          className={
            "bg-neutral-200 text-center flex items-center justify-center rounded-tr-lg"
          }
        >
          토
        </div>
        {emptyDates.map((_, index) => (
          <div key={index} />
        ))}
        {dates.map((date, index) => (
          <button
            type={"button"}
            disabled={date.getMonth() !== month - 1}
            onClick={() => console.log(date.getDate())}
            key={index}
            className={`flex items-center justify-center ${date.getMonth() !== month - 1 ? "bg-neutral-300 cursor-not-allowed" : ""}`}
          >
            <div>{date.getDate()}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
