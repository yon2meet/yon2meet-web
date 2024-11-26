"use client";

import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";

export default function KakaoLoginButton() {
  return (
    <button
      type={"button"}
      className={
        "w-full p-2 bg-yellow-300 flex items-center justify-center gap-2 rounded-lg"
      }
    >
      <ChatBubbleOvalLeftIcon className={"text-black size-6"} />
      <p className={"text-lg"}>카카오로 로그인</p>
    </button>
  );
}
