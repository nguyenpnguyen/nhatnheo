const title = document.querySelector("h1");
const yesButton = document.querySelector("button#yes");
yesButton.addEventListener("click", () => {
  title.textContent = "Yes!";
});
