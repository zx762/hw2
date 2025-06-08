'use client';
import StartPage from "@/component/page/StartPage";
import QuestionPage from "@/component/page/QuestionPage";
import DisplayResultPage from "@/component/page/DisplayResultPage";
import ResultPage from "@/component/page/ResultPage";
import { usePsyStore } from "@/app/store/store";
import MusicPlayer from "@/component/layout/MusicPlayer"; // 🎵 加這行！

export default function Home() {
  const psyState = usePsyStore((state) => state);

  const nextStep = function () {
    if (psyState.state >= 3) return;

    if (psyState.state == 1) {
      if (psyState.questionState < psyState.totalQuestions - 1) {
        psyState.updateQuestionState(psyState.questionState + 1);
      } else {
        psyState.updateState(psyState.state + 1);
      }
    } else {
      console.log("next");
      psyState.updateState(psyState.state + 1);
    }
  };

  const prevStep = function () {
    if (psyState.state <= 0) return;
    console.log("prev");
    psyState.updateState(psyState.state - 1);
  };

  return (
    <>
      <MusicPlayer /> {/* 🎵 放這邊就會整個測驗都播放背景音樂 */}

      <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
        {psyState.state == 0 && <StartPage nextStep={nextStep} />}
        {psyState.state == 1 && (
          <QuestionPage nextStep={nextStep} questionIndex={psyState.questionState} />
        )}
        {psyState.state == 2 && <DisplayResultPage nextStep={nextStep} />}
        {psyState.state == 3 && <ResultPage />}
      </div>
    </>
  );
}