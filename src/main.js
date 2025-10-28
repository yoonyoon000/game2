const container = document.querySelector("#buttonContainer");
const resetBtn = document.querySelector("#resetBtn");
const resetPopup = document.querySelector("#resetPopup");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const escIcon = document.querySelector("#escIcon");

for (let i = 0; i < 28; i++) {
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
        if (!btn.classList.contains("clicked")) {
            btn.classList.add("clicked");
            alert("작동하지 않습니다.");
        }
    });
    container.appendChild(btn);
}

resetBtn.addEventListener("click", () => {
    resetPopup.classList.add("active");
});

yesBtn.addEventListener("click", () => {

    const allButtons = document.querySelectorAll("#buttonContainer button");
    allButtons.forEach(btn => btn.classList.remove("clicked"));

    resetPopup.classList.remove("active");
});


noBtn.addEventListener("click", () => {
    resetPopup.classList.remove("active");
});

escIcon.addEventListener("click", () => {
    document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:40vh;'>You Found ESC 🎉</h1>";
    setTimeout(() => {
        window.close();
    }, 1500);
});
