'use client';

import MobileFrame from "@/component/layout/MobileFrame";
import Image from "next/image";

export default function DisplayResultPage({nextStep}) {

  return (
    <>
        <div className="pattern-background flex flex-col justify-center items-center">
            <div className="bg-[#097b85] w-[90vw] h-[95vh] md:w-1/3 md:h-[95vh] z-10 rounded-2xl p-2 overflow-hidden">
                <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col justify-center items-center text-center gap-10">

                <div className="text-[#fc6f2f] font-extrabold text-[30px] mb-[40px]">
                    顯示我的療癒植物
                </div>

                <div 
                    className={`bg-[#e99968] w-[138px] rounded-full text-white py-[16px] text-[18px] flex justify-center z-20
                    items-center font-semibold shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-[2px] transition`}
                    onClick ={nextStep}
                >查看結果</div>
            </div>

        </div>

      </div>
    
    </>

  );
}