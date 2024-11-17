import Calendar from "@/app/components/calendar";
import ScheduleNameInput from "@/app/components/schedule-name-input";
import ParticipantsInput from "@/app/components/participants-input";
import CreateScheduleButton from "@/app/components/create-schedule-button";

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const monthArray: { year: number; month: number }[] = [];
  for (let i = 0; i < 12; i += 1) {
    if (currentMonth + i <= 12) {
      monthArray.push({ year: currentYear, month: currentMonth + i });
    } else {
      monthArray.push({ year: currentYear + 1, month: currentMonth + i - 12 });
    }
  }

  return (
    <div className={"layout flex flex-col items-center justify-center"}>
      <ScheduleNameInput />
      <div
        className={"w-full h-1/2 flex flex-col p-2 items-center justify-center"}
      >
        <div
          className={
            "overflow-y-scroll rounded-xl ring-2 ring-neutral-500 w-full max-w-sm"
          }
        >
          {monthArray.map((data, index) => (
            <Calendar key={index} year={data.year} month={data.month} />
          ))}
        </div>
      </div>
      <div className={"w-full flex-col flex bg-white p-4"}>
        <div className={"mr-auto text-sm p-2"}>참석 인원수</div>
        <ParticipantsInput />
      </div>
      <CreateScheduleButton />
    </div>
  );
}
