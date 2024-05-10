const title = document.querySelector("h1");
const yesButton = document.querySelector("button#yes");
const noButton = document.querySelector("button#no");
const textContainer = document.querySelector("#text-container");
const btnContainer = document.querySelector("#btn-container");

let newText = document.createElement("p");
newText.textContent = "You are now obligated to give me a kiss (pls)";

const gif = document.getElementById("gif");
const newGifUrl =
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXQycWJ4bWltN2RqZmdjYTdueHMwbmNwNzNwb2JjcndtNGUzNHk2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QtqjZtkLNuRPi/giphy.gif";

const noText = [
  "Are you sure?",
  "Please think about it",
  "Pretty please! 🥹",
  "Please choose again...",
  "Last chance",
];

let currentIndex = 0;

let yesButtonFontSize = 16;
yesButton.style.fontSize = yesButtonFontSize + "px";

let noButtonFontSize = 16;
noButton.style.fontSize = noButtonFontSize + "px";

yesButton.addEventListener("click", () => {
  title.textContent = "Yay!";
  textContainer.appendChild(newText);
  btnContainer.remove();

  gif.setAttribute("src", newGifUrl);
  gif.setAttribute("alt", "Hercules gif");
});

noButton.addEventListener("click", () => {
  noButton.textContent = noText[currentIndex];

  currentIndex = (currentIndex + 1) % noText.length;

  yesButtonFontSize += 8;
  if (yesButtonFontSize <= 120) {
    yesButton.style.fontSize = yesButtonFontSize + "px";
  }

  noButtonFontSize -= 2;
  if (noButtonFontSize >= 8) {
    noButton.style.fontSize = noButtonFontSize + "px";
  }
});
