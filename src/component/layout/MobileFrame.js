'use client';

import { useQuestionStore } from "@/app/store/store";

export default function MobileFrame({ children, questionIndex }) {
  const questionData = useQuestionStore((state) => state);

  const colorMap = {
    0: { bg: "bg-[#f9e9dc]" },
    1: { bg: "bg-[#cbbbcd]" },
    2: { bg: "bg-[#dde6ed]" },
    3: { bg: "bg-[#FFdaa4]" },
    4: { bg: "bg-[#e7f1a8]" },
  };

  const currentQuestion = questionData.questions[questionIndex + 1];

  return (
    <div
      className={`w-screen h-screen ${colorMap[questionIndex].bg} 
        flex items-center justify-center relative overflow-hidden`}
    >
      {children}
    </div>
  );
}