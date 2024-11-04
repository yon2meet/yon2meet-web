import Calendar from "@/components/calendar";

function ScheduleName() {
  return (
    <div
      className={
        "w-full h-1/3 flex flex-col items-center justify-center bg-neutral-800 text-white gap-4 p-4"
      }
    >
      <div className={"text-3xl font-bold"}>새 약속 만들기</div>
      <input
        type={"text"}
        className={
          "p-2 rounded-full bg-neutral-800 ring-2 px-4 ring-neutral-50 focus:ring-sky-500 w-full focus:outline-none"
        }
        placeholder={"약속 이름"}
      />
    </div>
  );
}

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
    <div className={"w-screen h-screen pt-12 flex flex-col"}>
      <ScheduleName />
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
    </div>
  );
}
