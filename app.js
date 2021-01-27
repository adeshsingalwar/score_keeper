const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winScoreSelect = document.querySelector('#winScoreSelect');

const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");
const resetbtn = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 1;

winScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winScoreSelect.value);
    reset();
});

p1btn.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("has-text-success");
            p2Display.classList.add("has-text-danger");
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
});

p2btn.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("has-text-success");
            p1Display.classList.add("has-text-danger");
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
});

resetbtn.addEventListener('click', reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove("has-text-success", "has-text-danger");
    p1Display.classList.remove("has-text-danger", "has-text-success");
    p1btn.disabled = false;
    p2btn.disabled = false;
}