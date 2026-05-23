const answer = 42; // 正確答案
const playerGuesses = [20, 50, 42, 10]; // 模擬玩家第一次猜 20，第二次猜 50，第三次猜 42
let index = 0; // 用來記錄現在輪到陣列中的第幾個數字

// 當 index 還小於陣列長度時，迴圈就會持續執行
while (index < playerGuesses.length) {
    let guess = playerGuesses[index]; // 取得目前的猜測數字
    
    if (guess > answer) {
        console.log(`猜 ${guess}：太大了！`);
    } else if (guess < answer) {
        console.log(`猜 ${guess}：太小了！`);
    } else {
        console.log(`猜 ${guess}：恭喜答對！`);
        break; // 猜對了，立刻跳出迴圈，後面的 10 就不會被執行
    }
    
    index++; // 關鍵！每次檢查完要把 index 加 1，否則會變成無限迴圈
}