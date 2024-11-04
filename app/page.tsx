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
  return (
    <div className={"w-screen h-screen pt-12 flex flex-col"}>
      <ScheduleName />
      <div className={"w-full h-2/3 flex flex-col"}>
        <div></div>
      </div>
    </div>
  );
}
