const cart = [
    { name: "蘋果", price: 30, quantity: 5 },
    { name: "香蕉", price: 20, quantity: 3 },
    { name: "鮮奶", price: 90, quantity: 1 }
];

function calculateTotal(cartArray) {
    let total = 0; // 初始總金額為 0
    
    // 遍歷購物車陣列
    for (let i = 0; i < cartArray.length; i++) {
        let item = cartArray[i]; // 取得當前的商品物件
        let itemTotal = item.price * item.quantity; // 計算單項商品總價
        total += itemTotal; // 累加到總金額
    }
    
    return total; // 回傳最終總金額
}

// === 測試執行 ===
console.log("購物車總金額為：" + calculateTotal(cart) + " 元");
// 計算過程：(30*5) + (20*3) + (90*1) = 150 + 60 + 90 = 300