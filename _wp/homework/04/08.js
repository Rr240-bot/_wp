// 後端傳來的 JSON 格式字串（注意：它是一整條純文字）
const jsonString = '[{"name":"Alex","email":"alex@test.com"},{"name":"Bob","email":"bob@test.com"}]';

// 步驟 1：將 JSON 字串解析（Parse）成 JavaScript 的物件陣列
const userArray = JSON.parse(jsonString);

// 步驟 2：現在 userArray 是真正的陣列了，可以用迴圈操作它
for (let i = 0; i < userArray.length; i++) {
    // 依序取出每個使用者物件，並印出 email 屬性
    console.log(`使用者 ${userArray[i].name} 的 Email 是: ${userArray[i].email}`);
}