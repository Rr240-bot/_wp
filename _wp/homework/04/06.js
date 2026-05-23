const phoneBook = {
    contacts: [], // 用來儲存資料的空間
    
    // 方法 1：新增聯絡人
    addContact: function(name, phone) {
        // 將姓名與電話包成物件，塞進 this.contacts 陣列中
        this.contacts.push({ name: name, phone: phone });
        console.log(`已成功建立 ${name} 的資料`);
    },
    
    // 方法 2：搜尋聯絡人
    findContact: function(name) {
        // 用迴圈一個個比對名字
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].name === name) {
                return this.contacts[i].phone; // 找到了，回傳電話號碼並結束函式
            }
        }
        return "找不到此聯絡人"; // 迴圈整圈跑完都沒找到，才會執行這行
    }
};

// === 測試執行 ===
phoneBook.addContact("大雄", "0912-345678");
phoneBook.addContact("靜香", "0987-654321");

console.log(phoneBook.findContact("靜香")); // 預期輸出: 0987-654321
console.log(phoneBook.findContact("胖虎")); // 預期輸出: 找不到此聯絡人