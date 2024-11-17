import Banner from "@/app/components/banner";

export default function MySchedulePage() {
  return (
    <div className={"layout"}>
      <Banner>
        <div>
          <div className={"text-sm"}>기존 시간표를 불러왔어요.</div>
          <div className={"text-2xl font-bold"}>내 시간표 수정하기</div>
        </div>
      </Banner>
    </div>
  );
}
