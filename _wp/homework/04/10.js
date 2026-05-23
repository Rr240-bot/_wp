const librarySystem = {
    books: [], // 儲存所有書籍物件的陣列
    
    // 功能 1：新增書籍
    addBook: function(title, author) {
        // 每本書都是一個物件，包含書名、作者、以及目前是否可借（預設為 true）
        this.books.push({ title: title, author: author, isAvailable: true });
        console.log(`系統提示：成功上架《${title}》`);
    },
    
    // 功能 2：借書功能
    borrowBook: function(title) {
        // 用迴圈在圖書館的陣列裡一本書一本書找
        for (let i = 0; i < this.books.length; i++) {
            // 檢查書名有沒有對上
            if (this.books[i].title === title) {
                // 書名對上了！接著檢查這本書目前人在不在（是否可借）
                if (this.books[i].isAvailable === true) {
                    this.books[i].isAvailable = false; // 將狀態改為已借出（false）
                    return `【借書成功】您已借出《${title}》。`;
                } else {
                    return `【借書失敗】《${title}》目前已被其他人借走。`;
                }
            }
        }
        // 如果整圈迴圈跑完都沒進入上面的 if，代表圖書館沒進這本書
        return `【錯誤】圖書館沒有《${title}》這本書。`;
    },
    
    // 功能 3：匯出系統內部資料
    exportData: function() {
        // 將目前的書籍陣列轉換成 JSON 字串以便存檔
        return JSON.stringify(this.books);
    }
};

// === 系統運作測試 ===
// 1. 上架兩本書
librarySystem.addBook("JavaScript 邁向高手之路", "John");
librarySystem.addBook("設計模式的奧秘", "Sarah");

// 2. 嘗試借閱
console.log(librarySystem.borrowBook("設計模式的奧秘")); // 預期: 成功借出
console.log(librarySystem.borrowBook("設計模式的奧秘")); // 預期: 借書失敗（因為剛剛被借走了）
console.log(librarySystem.borrowBook("哈利波特"));     // 預期: 錯誤（圖書館沒有這本書）

// 3. 匯出目前圖書館的狀態快照
console.log("目前圖書館庫存 JSON：", librarySystem.exportData());