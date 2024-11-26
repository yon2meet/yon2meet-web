"use client";

import KakaoLoginButton from "@/app/components/auth/kakao-login-button";
import Link from "next/link";

export default function LogInOrAddScheduleButton({
  meetId,
}: {
  meetId: string;
}) {
  const auth = false;
  return (
    <>
      {auth ? (
        <Link
          href={`/meet/${meetId}/add-schedule`}
          className={
            "p-2 text-center bg-emerald-500 text-lg text-white rounded-lg"
          }
        >
          시간표 등록하기
        </Link>
      ) : (
        <KakaoLoginButton />
      )}
    </>
  );
}
