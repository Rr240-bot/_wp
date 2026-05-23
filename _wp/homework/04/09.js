// 網頁運作中的 JavaScript 物件
const todoList = {
    title: "今日工作清單",
    date: "2026-05-16",
    tasks: ["寫程式", "開會", "運動"]
};

// 使用 JSON.stringify() 將物件轉換成 JSON 字串
const todoJson = JSON.stringify(todoList);

// 印出轉換後的結果
console.log("轉換後的類型：", typeof todoJson); // 預期輸出: string (代表變成純文字了)
console.log("JSON 字串內容：", todoJson); 
// 預期輸出: {"title":"今日工作清單","date":"2026-05-16","tasks":["寫程式","開會","運動"]}