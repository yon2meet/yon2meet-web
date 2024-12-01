import { addDays, differenceInDays } from "date-fns";
import toKoDay from "@/lib/to-ko-day";
import TimeTable from "@/app/components/time-table";

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

  return (
    <div className={"grid grid-cols-7 w-full bg-white"}>
      {dateArray.map((day, index) => (
        <div key={index} className={"w-full"}>
          <div>{toKoDay(day.getDay())}</div>
          <div>{day.getDate()}</div>
          <TimeTable startHour={9} endHour={24} />
        </div>
      ))}
    </div>
  );
}
