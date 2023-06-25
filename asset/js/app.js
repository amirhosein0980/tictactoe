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