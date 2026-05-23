function findMaxAndMin(numbers) {
    // 預設第一個數字為最大值與最小值
    let max = numbers[0];
    let min = numbers[0];
    
    // 從第二個數字（索引 1）開始跑迴圈比對
    for (let i = 1; i < numbers.length; i++) {
        // 如果現在這個數字大於目前的 max，就更新 max
        if (numbers[i] > max) {
            max = numbers[i];
        }
        // 如果現在這個數字小於目前的 min，就更新 min
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    
    // 迴圈結束後，回傳包含極值的物件
    return { max: max, min: min };
}

// === 測試執行 ===
const scoreList = [85, 92, 45, 60, 99, 71];
const result = findMaxAndMin(scoreList);
console.log(`最大值是：${result.max}，最小值是：${result.min}`); 
// 預期輸出: 最大值是：99，最小值是：45