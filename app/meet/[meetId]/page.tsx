import { ExclamationCircleIcon, ShareIcon } from "@heroicons/react/24/outline";

export default function MeetPage() {
  return (
    <div className={"layout flex flex-col"}>
      <div
        className={
          "p-4 py-8 bg-sky-800 text-white flex items-center justify-between"
        }
      >
        <div>
          <div className={"text-sm"}>현재 입력한 인원: 0/5</div>
          <div className={"text-2xl font-bold"}>1차 킥오프 미팅</div>
        </div>
        <button type={"button"} className={"p-2 rounded-full bg-sky-600"}>
          <ShareIcon className={"size-6"} />
        </button>
      </div>
      <div
        className={"w-full h-full flex flex-col items-center justify-center"}
      >
        <ExclamationCircleIcon className={"size-6"} />
        <div>아무도 시간표를 입력하지 않았어요.</div>
      </div>
      <div className={"p-4 w-full flex gap-2 items-center border-t-2"}>
        <button
          type={"button"}
          className={"p-2 py-3 rounded-lg ring-2 ring-sky-500 w-full"}
        >
          비로그인으로 계속하기
        </button>
        <button
          type={"button"}
          className={
            "p-2 py-3 rounded-lg ring-2 ring-sky-500 bg-sky-500 text-white w-full"
          }
        >
          로그인해서 계속하기
        </button>
      </div>
    </div>
  );
}
