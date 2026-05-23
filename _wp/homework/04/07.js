const students = [
    { name: "小明", score: 85 },
    { name: "小華", score: 55 },
    { name: "小美", score: 92 }
];

function filterPassed(studentList) {
    let passed = []; // 準備存放及格學生的新陣列
    
    for (let i = 0; i < studentList.length; i++) {
        // 檢查目前這個學生的分數是否及格
        if (studentList[i].score >= 60) {
            passed.push(studentList[i]); // 及格的話，把整個學生物件加入新陣列
        }
    }
    
    return passed; // 回傳篩選後的陣列
}

// === 測試執行 ===
const passedStudents = filterPassed(students);
console.log(passedStudents);
// 預期輸出: [ { name: '小明', score: 85 }, { name: '小美', score: 92 } ]