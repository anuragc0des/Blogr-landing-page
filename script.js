const openBtn = document.querySelector(".open-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const arrowDown = document.querySelectorAll(".arrow-dark");
const listLight = document.querySelectorAll(".list-light");

openBtn.addEventListener("click", function () {
  if (openBtn.src.includes("icon-hamburger.svg")) {
    openBtn.src = `./images/icon-close.svg`;
    mobileMenu.classList.remove("hidden");
  } else {
    openBtn.src = `./images/icon-hamburger.svg`;
    mobileMenu.classList.add("hidden");
  }
});

for (let i = 0; i < arrowDown.length; i++) {
  arrowDown[i].addEventListener("click", function () {
    this.style.transform =
      this.style.transform === "rotate(180deg)"
        ? "rotate(0deg)"
        : "rotate(180deg)";
    listLight[i].classList.toggle("hidden");
  });
}
