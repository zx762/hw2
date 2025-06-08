'use client';

import MobileFrame from "@/component/layout/MobileFrame";
import Image from "next/image";
import { usePsyStore, useQuestionStore } from "@/app/store/store";

export default function QuestionPage({ questionIndex, nextStep }) {
  const questionData = useQuestionStore((state) => state);
  const psyData = usePsyStore((state) => state);

  const clickAnswer = function (option) {
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
  };

  const colorMap = {
    0: { text: "text-[#f0532b]", border: "border-[#e99968]", bg: "bg-[#e99968]" },
    1: { text: "text-[#808bd0]", border: "border-[#8f9ece]", bg: "bg-[#4a3b84]" },
    2: { text: "text-[#4282aa]", border: "border-[#097b85]", bg: "bg-[#097b85]" },
    3: { text: "text-[#f88331]", border: "border-[#e99968]", bg: "bg-[#e99968]" },
    4: { text: "text-[#6e8d69]", border: "border-[#90B62A]", bg: "bg-[#90B62A]" },
  };

  const progressColorMap = {
    0: '#f0532b',
    1: '#4a3b84',
    2: '#097b85',
    3: '#f88331',
    4: '#90B62A',
  };

  const plantImages = {
    0: '/images/plant-1.png',
    1: '/images/plant-2.png',
    2: '/images/plant-3.png',
    3: '/images/plant-4.png',
    4: '/images/plant-5.png',
  };

  return (
    <MobileFrame questionIndex={questionIndex}>
      <div className={`${colorMap[questionIndex].bg} w-[90vw] h-[95vh] md:w-1/3 z-10 rounded-2xl p-4`}>
        <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col">

          {/* 🟡 時間軸（固定） */}
          <div className="shrink-0">
            <div className="relative flex items-end justify-between w-full max-w-md mx-auto h-[90px] px-4">
              <div className="absolute bottom-1 left-0 right-0 h-[3px] bg-gray-200 z-0" />
              {[0, 1, 2, 3, 4].map((i) => {
                const isCurrent = i === questionIndex;
                const activeColor = progressColorMap[questionIndex];
                return (
                  <div key={i} className="relative flex flex-col items-center z-10 w-[20%]">
                    {isCurrent && (
                      <div className="relative w-[50px] h-[50px] mb-1">
                        <Image
                          src={plantImages[i]}
                          alt={`Plant ${i + 1}`}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    )}
                    <div
                      className={`w-3 h-3 rounded-full border-[3px] transition-all duration-300 ${isCurrent ? '' : 'bg-white border-gray-300'}`}
                      style={
                        isCurrent
                          ? { backgroundColor: activeColor, borderColor: activeColor }
                          : {}
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* 🔵 內容捲動區（Q標題、題目、選項） */}
          <div className="flex-1 text-center gap-5 px-2 pb-4 w-full
            flex justify-start items-center flex-col p-[10px] overflow-y-auto overflow-x-hidden">

            {/* Q 標題 */}
            <div className={` ${colorMap[questionIndex].text} border-2 ${colorMap[questionIndex].border} 
              rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl mt-2`}>
              Q{questionIndex + 1}
            </div>

            {/* 題目文字 */}
            <div className={`text-center font-bold mb-7 text-3xl ${colorMap[questionIndex].text}`}>
              {questionData.questions[questionIndex + 1].title}
            </div>

            {/* 選項按鈕 */}
            {questionData.questions[questionIndex + 1].options.map((option, index) => {
              const baseStyle = `w-full rounded-full py-[16px] text-sm flex justify-center items-center font-medium z-20 cursor-pointer hover:translate-y-[2px] transition`;
              const optionStyleMap = {
                0: `bg-[#e6f4f4] text-[#097b85] shadow-[0px_4px_0px_1px_#097b85]`,
                1: `bg-[#fceac6] text-[#f0532b] shadow-[0px_4px_0px_1px_#edb758]`,
                2: `bg-[#f9e9dc] text-[#f0532b] shadow-[0px_4px_0px_1px_#e99968]`,
                3: `bg-[#e6f4f4] text-[#1098EC] shadow-[0px_4px_0px_1px_#89BCFF]`,
                4: `bg-[#f9e9dc] text-[#f0532b] shadow-[0px_4px_0px_1px_#e99968]`,
              };
              return (
                <div
                  className={`${baseStyle} ${optionStyleMap[questionIndex]}`}
                  onClick={() => clickAnswer(option)}
                  key={option.title}
                >
                  {option.title}
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </MobileFrame>
  );
}