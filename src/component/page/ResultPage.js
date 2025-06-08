'use client';

import { usePsyStore } from "@/app/store/store";
import Image from "next/image";

export default function ResultPage() {
  const score = usePsyStore((state) => state.score);

  const resultMap = [
    {
      min: 5,
      max: 8,
      bg: "bg-[#6e8d69]",
      text: "text-[#2e4c18]",
      title: "你是「仙人掌」",
      hashtag: ["#高冷防衛心", "#刀子嘴豆腐心", "#自己扛一切型"],
      description: `你是長在沙漠裡的仙人掌，
堅硬、獨立，習慣在第一時間保護自己。
你不輕易表露情緒，但內心其實藏著滿滿溫柔～
別人常說你很難親近，
其實只是你不想隨便讓人靠近心底那塊柔軟的心。

人生建議：
你不一定要當最強的，
放下刺、允許自己被照顧，是一種成熟的勇敢。`,
      image: "/3.result/cactus.png",
      cornerImg: [
        "/3.result/cactus-1.png",
        "/3.result/cactus-2.png",
        "/3.result/cactus-3.png",
        "/3.result/cactus-4.png",
      ],
    },
    {
      min: 9,
      max: 12,
      bg: "bg-[#2e4c18]",
      text: "text-[#6e8d69]",
      title: "你是「吊蘭」",
      hashtag: ["#神隱系", "#超級理性", "#獨立派代表"],
      description: `你像總在角落默默閃光的吊蘭～安靜中帶點倔強。
你不喜歡被打擾，很多事情自己默默搞定，
崩潰時只想一個人躲起來。
不是冷淡，只是你有你自己的頻道，
別人不一定懂，但你也不強求。

人生建議：
偶爾脆弱也不丟臉，
試著練習讓別人靠近，會發現世界沒那麼危險。`,
      image: "/3.result/chlorophytum.png",
      cornerImg: [
        "/3.result/b-1.png",
        "/3.result/b-2.png",
        "/3.result/b-3.png",
        "/3.result/b-4.png",
      ],
    },
    {
      min: 13,
      max: 16,
      bg: "bg-[#097b85]",
      text: "text-[#4a3b84]",
      title: "你是「小雛菊」",
      hashtag: ["#浪漫氣質", "#內向觀察家", "#不說也懂我最好"],
      description: `你像充滿好奇心與童心的小雛菊，
習慣觀察，懂得自己節奏。
你不急不躁，喜歡在心裡默默分析一切，
有時候也讓人猜不透你的內心世界。
看似安靜，其實內在藏著百轉千迴的想法～

人生建議：
試著相信別人，也相信自己值得被了解。
不是只有表現出來才算重要。`,
      image: "/3.result/daisy-flower.png",
      cornerImg: "/3.result/daisy.png",
    },
    {
      min: 17,
      max: 20,
      bg: "bg-[#f7b441]",
      text: "text-[#a75f37]",
      title: "你是「向日葵」",
      hashtag: ["#正能量滿滿", "#超會安慰人", "#派對開心果"],
      description: `你是永遠不會塌陷的向日葵可頌，
像太陽一樣照亮別人～
你總是用正面的態度面對生活，
就算內心偶爾小崩潰，也能用微笑化解。
不過偶爾太樂觀，也會讓你忽略自己的情緒哦！

人生建議：
別人習慣你正面的一面，
但你也要學會讓自己有低潮的空間，才能走得更遠。`,
      image: "/3.result/sunflower.png",
      cornerImg: "/3.result/sunflower-1.png",
    },
  ];

  const result = resultMap.find((r) => score >= r.min && score <= r.max) || resultMap[0];

  // 將描述分為兩段：前面描述與人生建議部分
  const [mainDesc, advice] = result.description.split("人生建議：");

  // 解析 color code
  let bgColor = "#ffffff"; // 預設白色
  if (result.bg) {
    const match = result.bg.match(/\[#([0-9a-fA-F]{6})\]/);
    if (match && match[1]) {
      bgColor = `#${match[1]}`;
    }
  }

  // 四角位置與物件定位，給單張圖用
  // 這邊先放通用設定
  const corners = [
    { pos: "top-0 right-0", objPos: "right top" },   // 右上
    { pos: "bottom-0 left-0", objPos: "left bottom" }, // 左下
    { pos: "top-0 left-0", objPos: "left top" },    // 左上
    { pos: "bottom-0 right-0", objPos: "right bottom" }, // 右下
  ];

  // 依 result 不同植物，回傳不同的 style (包含偏移、尺寸)
  function getCornerStyles() {
    switch (result.title) {
      case "你是「吊蘭」":
        return [
          { pos: "top-[0px] right-[-5px]", size: 60, objPos: "right top" },
          { pos: "bottom-[0px] left-[-5px]", size: 60, objPos: "left bottom" },
          { pos: "top-[-10px] left-[0px]", size: 60, objPos: "left top" },
          { pos: "bottom-[-10px] right-[0px]", size: 60, objPos: "right bottom" },
        ];
      case "你是「向日葵」":
        return [
          { pos: "top-[-25px] right-[-25px]", size: 80, objPos: "right top" },
          { pos: "bottom-[-25px] left-[-25px]", size: 80, objPos: "left bottom" },
          { pos: "top-[-25px] left-[-25px]", size: 80, objPos: "left top" },
          { pos: "bottom-[-25px] right-[-25px]", size: 80, objPos: "right bottom" },
        ];
      case "你是「仙人掌」":
        return [
          { pos: "top-[-20px] right-[-5px]", size: 80, objPos: "right top" },
          { pos: "bottom-[-20px] left-[-5px]", size: 80, objPos: "left bottom" },
          { pos: "top-[-20px] left-[-5px]", size: 80, objPos: "left top" },
          { pos: "bottom-[-20px] right-[-5px]", size: 80, objPos: "right bottom" },
        ];
      case "你是「小雛菊」": // 新增小雛菊，和向日葵相同設定
        return [
          { pos: "top-[-25px] right-[-25px]", size: 85, objPos: "right top" },
          { pos: "bottom-[-25px] left-[-25px]", size: 85, objPos: "left bottom" },
          { pos: "top-[-25px] left-[-25px]", size: 85, objPos: "left top" },
          { pos: "bottom-[-25px] right-[-25px]", size: 85, objPos: "right bottom" },
        ];
      default:
        return corners.map(({ pos, objPos }) => ({ pos, size: 80, objPos }));
    }
  }

  const cornerStyles = getCornerStyles();

  return (
    <div className="pattern-background flex flex-col justify-center items-center min-h-screen">
      <div
        className={`${result.bg} w-[90vw] h-[95vh] md:w-1/3 md:h-[95vh] z-10 rounded-2xl p-2 relative`}
      >
        <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col items-center justify-center relative text-center overflow-hidden">

          {/* 裝飾圓塊背景色 */}
          <div
            className="absolute top-0 left-0 w-[80px] h-[80px] rounded-br-full z-0"
            style={{ backgroundColor: bgColor }}
          ></div>
          <div
            className="absolute top-0 right-0 w-[80px] h-[80px] rounded-bl-full z-0"
            style={{ backgroundColor: bgColor }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-[80px] h-[80px] rounded-tr-full z-0"
            style={{ backgroundColor: bgColor }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-[80px] h-[80px] rounded-tl-full z-0"
            style={{ backgroundColor: bgColor }}
          ></div>

          {/* 四角的裝飾圖片 */}
          {
            Array.isArray(result.cornerImg)
              ? result.cornerImg.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={`corner-${i}`}
                    width={cornerStyles[i].size}
                    height={cornerStyles[i].size}
                    className={`absolute ${cornerStyles[i].pos} z-10 object-cover`}
                    style={{
                      objectPosition: cornerStyles[i].objPos,
                      objectFit: "cover",
                    }}
                  />
                ))
              : cornerStyles.map(({ pos, size, objPos }, i) => (
                  <Image
                    key={i}
                    src={result.cornerImg}
                    alt={`corner-${i}`}
                    width={size}
                    height={size}
                    className={`absolute ${pos} z-10 object-cover`}
                    style={{
                      objectPosition: objPos,
                      objectFit: "cover",
                    }}
                  />
                ))
          }

          <div className="flex flex-col items-center justify-center overflow-y-auto p-1">
            {/* 主體圖片 */}
            <Image src={result.image} alt={result.title} width={160} height={160} className="mx-auto" />

            {/* 標題 */}
            <h3 className={`text-2xl font-bold ${result.text} mt-3`}>{result.title}</h3>

            {/* hashtag */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {result.hashtag.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-xl text-sm font-medium shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 描述 */}
            <div className="mt-4 text-[#444] text-center font-medium text-[14px] leading-loose tracking-wide whitespace-pre-line">
              <p >{mainDesc.trim()}</p>
              <p className={`text-lg mt-5 font-semibold ${result.text}`}>人生建議：</p>
              <p className={`mt-1 `}>{advice.trim()}</p>
            </div>

            {/* 再玩一次按鈕 */}
            <button
              onClick={() => window.location.reload()}
              className="bg-[#e99968] w-[138px] rounded-full text-white py-[16px] text-[18px] flex justify-center items-center font-semibold shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-[2px] transition mt-6"
            >
              再玩一次
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}