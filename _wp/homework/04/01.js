function calculatePrice(originalPrice) {
    // 判斷 1：如果金額大於或等於 2000
    if (originalPrice >= 2000) {
        return originalPrice * 0.8; // 回傳打 8 折後的金額，並結束函式
    } 
    // 判斷 2：如果沒滿 2000，但大於或等於 1000
    else if (originalPrice >= 1000) {
        return originalPrice * 0.9; // 回傳打 9 折後的金額，並結束函式
    } 
    // 判斷 3：以上條件都不符合（低於 1000 元）
    else {
        return originalPrice; // 回傳原始金額
    }
}

// === 測試執行 ===
console.log(calculatePrice(2500)); // 預期輸出: 2000 (2500 * 0.8)
console.log(calculatePrice(1500)); // 預期輸出: 1350 (1500 * 0.9)
console.log(calculatePrice(500));  // 預期輸出: 500