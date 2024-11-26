import DefaultLayout from "@/app/components/default-layout";
import LogInOrAddScheduleButton from "@/app/meet/[meetId]/log-in-or-add-schedule-button";
import { use } from "react";
import CopyLinkButton from "@/app/meet/[meetId]/copy-link-button";

export default function MeetPage({
  params,
}: {
  params: Promise<{ meetId: string }>;
}) {
  return (
    <DefaultLayout className={"flex flex-col p-4"}>
      <div className={"w-full py-4 flex items-center justify-between"}>
        <div>
          <div className={"text-sm"}>0명 입력</div>
          <div className={"text-3xl font-bold"}>1차 킥오프 미팅</div>
        </div>
        <CopyLinkButton />
      </div>
      <div
        className={
          "w-full h-full bg-emerald-50 rounded-lg flex items-center justify-center"
        }
      >
        <div>Calendar Area</div>
      </div>
      <LogInOrAddScheduleButton meetId={use(params).meetId} />
    </DefaultLayout>
  );
}
