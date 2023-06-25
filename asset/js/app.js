// let players = 2;
// let names = [];
// const headername = document.querySelector(".header");
// let board = ["", "", "", "", "", "", "", "", ""];
// let player = "X";
// let winner = null;
//
// for (let i = 0; i < players; i++) {
//     let name = prompt(`لطفا نام خود را وارد کنید`);
//     while (name == "") {
//         name = prompt("لطفا نام خود را وارد کنید");
//     }
//     names.push(name);
// }
//
// function updateBoard() {
//     for (let i = 0; i < board.length; i++) {
//         document.getElementById(String(i)).innerText = board[i];
//         if (board[i] === "X") {
//             document.getElementById(String(i)).style.color = "blue";
//         } else if (board[i] === "O") {
//             document.getElementById(String(i)).style.color = "red";
//         }
//     }
// }
//
// function checkWinner() {
//     const winningConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
//     for (let i = 0; i < winningConditions.length; i++) {
//         const [a, b, c] = winningConditions[i];
//         if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//             return board[a];
//         }
//     }
//     if (board.includes("")) {
//         return null;
//     } else {
//         return "T";
//     }
// }
//
// let scores = [0, 0];
// function showWinner(winner) {
//     if (winner === "T") {
//         document.body.classList.add("tie");
//         document.getElementById("message").innerText = "بازی مساوی شد!";
//     } else {
//         if (winner === "X") {
//             scores[0]++;
//         } else if (winner === "O") {
//             scores[1]++;
//         }
//         const winningConditions = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6]
//         ];
//         for (let i = 0; i < winningConditions.length; i++) {
//             const [a, b, c] = winningConditions[i];
//             if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//                 document.getElementById(String(a)).classList.add("winner");
//                 document.getElementById(String(b)).classList.add("winner");
//                 document.getElementById(String(c)).classList.add("winner");
//             }
//         }
//     }
//     headername.innerHTML = `${names[0]}: ${scores[0]} ${names[1]}: ${scores[1]}`;
// }
//
// function playTurn(clickedCellEvent) {
//     const clickedCell = clickedCellEvent.target;
//     const clickedCellIndex = Number(clickedCell.id);
//     if (board[clickedCellIndex] !== "" || winner !== null) {
//         return;
//     }
//     board[clickedCellIndex] = player;
//     updateBoard();
//     winner = checkWinner();
//     if (winner !== null) {
//         showWinner(winner);
//         return;
//     }
//     player = player === "X" ? "O" : "X";
// }
//
// function resetGame() {
//     board = ["", "", "", "", "", "", "", "", ""];
//     player = "X";
//     winner = null;
//     document.body.classList.remove("tie");
//     document.querySelectorAll(".box").forEach((cell) => {
//         cell.innerText = "";
//         cell.classList.remove("winner");
//     });
//     document.getElementById("message").innerText = "";
// }
//
// document.querySelectorAll(".box").forEach((cell) => {cell.addEventListener("click", playTurn)});
// document.querySelector(".reset").addEventListener("click", resetGame);










let players = 2; // تعداد بازیکنان
let names = []; // آرایه‌ای برای نگه‌داری نام بازیکنان
const headername = document.querySelector(".header"); // عنصر HTML برای نمایش نام بازیکنان و امتیازات
let board = ["", "", "", "", "", "", "", "", ""]; // آرایه‌ای برای نگه‌داری حالت فعلی بازی
let player = "X"; // بازیکن فعلی
let winner = null; // برنده (در ابتدا هیچ برنده‌ای وجود ندارد)

// دریافت نام بازیکنان از طریق پنجره‌های prompt
for (let i = 0; i < players; i++) {
    let name = prompt(`لطفا نام خود را وارد کنید`);
    while (name == "") {
        name = prompt("لطفا نام خود را وارد کنید");
    }
    names.push(name);
}

// تابع برای به روز رسانی حالت بازی و نمایش آن در صفحه
function updateBoard() {
    for (let i = 0; i < board.length; i++) {
        document.getElementById(String(i)).innerText = board[i];
        if (board[i] === "X") {
            document.getElementById(String(i)).style.color = "blue";
        } else if (board[i] === "O") {
            document.getElementById(String(i)).style.color = "red";
        }
    }
}

// تابع برای بررسی وضعیت بازی و تصمیم‌گیری درباره برنده
function checkWinner() {
    const winningConditions = [ // شرایط پیروزی
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    if (board.includes("")) {
        return null;
    } else {
        return "T";
    }
}

let scores = [0, 0]; // آرایه‌ای برای نگه‌داری امتیازات بازیکنان
// تابع برای نمایش پیغام برنده و تغییر رنگ خانه‌های مربوط به پیروزی
function showWinner(winner) {
    if (winner === "T") { // اگر بازی مساوی شده است
        document.body.classList.add("tie");
        document.getElementById("message").innerText = "بازی مساوی شد!";
    } else { // اگر برنده وجود دارد
        if (winner === "X") { // افزایش امتیاز بازیکن X
            scores[0]++;
        } else if (winner === "O") { // افزایش امتیاز بازیکن O
            scores[1]++;
        }
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                document.getElementById(String(a)).classList.add("winner");
                document.getElementById(String(b)).classList.add("winner");
                document.getElementById(String(c)).classList.add("winner");
            }
        }
    }
    headername.innerHTML = `${names[0]}: ${scores[0]} ${names[1]}: ${scores[1]}`; // نمایش امتیازات در صفحه
}

// تابع برای اجرای دستورات بازی به ترتیب
function playTurn(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = Number(clickedCell.id);
    if (board[clickedCellIndex] !== "" || winner !== null) { // اگر خانه قبلاً انتخاب شده است یا برنده وجود دارد، بازگشت
        return;
    }
    board[clickedCellIndex] = player; // به روز رسانی حالت بازی
    updateBoard(); // نمایش حالت جدید در صفحه
    winner = checkWinner(); // بررسی وضعیت بازی و تصمیم‌گیری درباره برنده
    if (winner !== null) { // اگر برنده تعیین شده است، نمایش پیغام مناسب
        showWinner(winner);
        return;
    }
    player = player === "X" ? "O" : "X"; // تغییر نوبت بازیکن
}

// تابع برای ریست کردن حالت بازی و صفحه
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""]; // ریست کردن حالت بازی
    player = "X"; // تعیین بازیکن فعلی به X
    winner = null; // حذف برنده
    document.body.classList.remove("tie"); // حذف پیغام تساوی
    document.querySelectorAll(".box").forEach((cell) => { // پاک کردن متن و کلاس winner از همه خانه‌ها
        cell.innerText = "";
        cell.classList.remove("winner");
    });
    document.getElementById("message").innerText = ""; // پاک کردن پیغام برنده
}

// اضافه کردن رویداد کلیک به همه خانه‌های صفحه بازی
document.querySelectorAll(".box").forEach((cell) => {cell.addEventListener("click", playTurn)});
// اضافه کردن رویداد کلیک به دکمه ریست
document.querySelector(".reset").addEventListener("click", resetGame);