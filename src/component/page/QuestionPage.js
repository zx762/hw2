'use client';

import MobileFrame from "@/component/layout/MobileFrame";
import Image from "next/image";
import {usePsyStore, useQuestionStore} from "@/app/store/store";


export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore( (state)=>state );
  const psyData = usePsyStore( (state)=>state );

  const clickAnswer = function(option){
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
  }


  const colorMap = {
    0: {
      text: "text-[#f0532b]",
      border: "border-[#e99968]",
      bg: "bg-[#e99968]",
    },
    1: {
      text: "text-[#808bd0]",
      border: "border-[#8f9ece]",
      bg: "bg-[#4a3b84]",
    },
    2: {
      text: "text-[#4282aa]",
      border: "border-[#097b85]",
      bg: "bg-[#097b85]",
    },
    3: {
        text: "text-[#f88331]",
        border: "border-[#e99968]",
        bg: "bg-[#e99968]",
    },
    4: {
        text: "text-[#6e8d69]",
        border: "border-[#90B62A]",
        bg: "bg-[#90B62A]",
    }

  };

  const progressColorMap = {
    0: '#f0532b',  // Q1 - 橘紅色
    1: '#4a3b84',  // Q2 - 深紫色
    2: '#097b85',  // Q3 - 藍綠色
    3: '#f88331',  // Q4 - 橘色
    4: '#90B62A',  // Q5 - 綠色
  };

  const plantImages = {
    0: '/images/plant-1.png',
    1: '/images/plant-2.png',
    2: '/images/plant-3.png',
    3: '/images/plant-4.png',
    4: '/images/plant-5.png',
  };

  return (
    <>
      <MobileFrame questionIndex={questionIndex}>
        <div
          className={`${colorMap[questionIndex].bg} w-[90vw] h-[95vh] md:w-1/3 md:h-[95vh] z-10 rounded-2xl p-4 flex flex-col`}
        >


          <div className="w-full h-full bg-white rounded-2xl p-4 justify-center text-center flex flex-col items-center overflow-y-auto gap-[26px]">

            <div className="relative flex items-center justify-between w-full max-w-md mx-auto mt-6 mb-4 px-4">
              {/* 背景線條 */}
              <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gray-200 -translate-y-1/2 z-0" />

              {[0, 1, 2, 3, 4].map((i) => {
                const isCurrent = i === questionIndex;
                const activeColor = progressColorMap[questionIndex];

                return (
                  <div key={i} className="relative flex flex-col items-center z-10 w-[20%]">
                    {/* 植物圖片（浮在上方） */}
                    {isCurrent && (
                      <div className="absolute -top-[60px]">
                        <Image
                          src={plantImages[i]}
                          alt={`Plant ${i + 1}`}
                          width={50}
                          height={50}
                        />
                      </div>
                    )}

                    {/* 點點 */}
                    <div
                      className={`
                        w-3 h-3 rounded-full border-[3px] transition-all duration-300
                        ${isCurrent ? '' : 'bg-white border-gray-300'}
                      `}
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


                <div className={` ${colorMap[questionIndex].text} border-2 ${colorMap[questionIndex].border} 
                    rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl`}>
                    Q{questionIndex + 1}
                </div>

                <div className={`text-center font-bold text-3xl ${colorMap[questionIndex].text} mb-[40px]`}>
                    {questionData.questions[questionIndex + 1].title}
                </div>

                {
                    
                    questionData.questions[questionIndex + 1].options.map((option, index) =>{
                    return (
                        <>
                        {
                        questionIndex == 0 && 
                        <div 
                            className={`bg-[#e6f4f4] font-medium w-full rounded-full text-[#097b85] py-[16px] text-sm flex justify-center z-20
                            items-center shadow-[0px_4px_0px_1px_#097b85] cursor-pointer hover:translate-y-[2px] transition`}
                            
                            onClick={() => clickAnswer(option)}
                            key={option.title + "green"}
                        >{option.title}</div>
                        }

                        {
                        questionIndex == 1 && 
                        <div 
                            className={`bg-[#fceac6] w-full rounded-full text-[#f0532b] py-[16px] text-sm flex justify-center z-20
                            items-center font-medium shadow-[0px_4px_0px_1px_#edb758] cursor-pointer hover:translate-y-[2px] transition`}
                            
                            onClick={() => clickAnswer(option)}
                            key={option.title +"red"}
                        >{option.title}</div>
                        }

                        {
                        questionIndex == 2 && 
                        <div 
                            className={`bg-[#f9e9dc] w-full rounded-full text-[#f0532b] py-[16px] text-sm flex justify-center z-20
                            items-center font-medium shadow-[0px_4px_0px_1px_#e99968] cursor-pointer hover:translate-y-[2px] transition`}
                            
                            onClick={() => clickAnswer(option)}
                            key={option.title +"blue"}
                        >{option.title}</div>
                        }

                        {
                        questionIndex == 3 && 
                        <div 
                            className={` bg-[#e6f4f4] w-full rounded-full text-[#1098EC]
                                py-[16px] text-sm flex justify-center items-center font-medium z-20
                                shadow-[0px_4px_0px_1px_#89BCFF] cursor-pointer hover:translate-y-0.5 transition`}
                            
                            onClick={() => clickAnswer(option)}
                            key={option.title +"blue"}
                        >{option.title}</div>
                        }

                        {
                        questionIndex == 4 && 
                        <div 
                            className={`bg-[#f9e9dc] w-full rounded-full text-[#f0532b] py-[16px] text-sm flex justify-center z-20
                            items-center font-medium shadow-[0px_4px_0px_1px_#e99968] cursor-pointer hover:translate-y-[2px] transition`}
                        
                            
                            onClick={() => clickAnswer(option)}
                            key={option.title +"blue"}
                        >{option.title}</div>
                        }



                        </>
                    )
                    })

                }
            </div>
        </div>


      </MobileFrame>
     
    </>

  );
}