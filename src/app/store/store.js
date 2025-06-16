import { create } from 'zustand'

// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
  state: 0, //0:start, 1:question, 2:displayresult, 3:result
  questionState: 0,
  totalQuestions: 5,
  score: 0,
  updateState: (newState) => set( (state)=>({state:newState}) ),
  updateQuestionState: (newState) => set( (state)=>({questionState:newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({totalQuestions:newState}) ),
  updateScore: (newState) => set( (state)=>({score:newState}) ),
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title:"一個悠閒的下午，你最想做些什麼？",
      options:[
        {title:"散步、看展充電一下", value:2},
        {title:"和朋友喝咖啡閒聊", value:3},
        {title:"一個人在家看書", value:1},
        {title:"安排行程，出門玩個過癮", value:4}
      ]
    },

    "2":{
      title:"你會做什麼來緩解壓力？",
      options:[
        {title:"寫日記或做點手作", value:2},
        {title:"找信任的人傾訴", value:3},
        {title:"獨自消化情緒，不想說話", value:1},
        {title:"追劇、看影片分散注意力", value:4}
      ]
    },

    "3":{
      title:"朋友們都是怎麼評價你的？",
      options:[
        {title:"有藝術感、充滿靈感", value:2},
        {title:"好相處，總是陪在大家身邊", value:3},
        {title:"安靜溫柔的小太陽", value:1},
        {title:"活力滿滿的行動派", value:4}
      ]
    },

    "4":{
        title:"你更喜歡哪個顏色？",
        options:[
          {title:"神秘的深藍色", value:2},
          {title:"穩重的橄欖綠", value:3},
          {title:"清新的米白色", value:1},
          {title:"熱情的橘紅色", value:4}
        ]
    },

    "5":{
        title:"如果你是一株植物，你希望？",
        options:[
          {title:"有漂亮花盆與人賞玩", value:2},
          {title:"長在窗台，每天都能見到陽光 ", value:3},
          {title:"放在書桌角落，靜靜陪伴", value:1},
          {title:"成為人群焦點，經常被拍照打卡", value:4}
        ]
    }


  },
  }))


export { usePsyStore, useQuestionStore}