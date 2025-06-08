'use client';

import MobileFrame from "@/component/layout/MobileFrame";
import Image from "next/image";

export default function StartPage({ nextStep }) {
  const text = `有些人像仙人掌，獨立堅強；
有些人像吊蘭，默默療癒每個角落。
在生活的泥土裡，我們都有自己的樣子。

現在就來測驗看看，找出你心中的植栽能量吧！`;

  return (
    <div className="pattern-background flex flex-col justify-center items-center">

        <div className="bg-[#097b85] w-[90vw] h-[95vh] md:w-1/3 md:h-[95vh] z-10 rounded-2xl p-2 overflow-hidden">
            <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center items-center text-center gap-10">
                <div className="text-[#fc6f2f] font-black text-[30px] leading-loose tracking-wide whitespace-pre-line">
                    你是哪一種療癒系小植物？
                </div>

                <div className="text-[#097b85] font-medium text-[14px] leading-loose tracking-wide whitespace-pre-line ">
                    {text}
                </div>

                <div 
                    className={`bg-[#e99968] w-[138px] rounded-full text-white py-[16px] text-[18px] flex justify-center z-20
                    items-center font-semibold shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-[2px] transition`}
                    onClick ={nextStep}
                >START</div>
            </div>

        </div>
    </div>
  );
}