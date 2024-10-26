function init() {
  document
    .getElementById("dropdown-for-my-apps")
    .addEventListener("click", (e) => {
      showDropDown(e);
    });
  document
    .getElementById("dropdown-for-user-profile")
    .addEventListener("click", (e) => {
      showDropDown(e);
    });
  document.querySelector(".options").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    document.getElementById("options-ul").classList.toggle("show");
  });
  const scrollsDown = document.querySelectorAll(".scroll-down");
  scrollsDown.forEach((i) => {
    i.addEventListener("click", (e) => {
      let target = e.target;
      if (target.tagName === "I") {
        console.log("its I");
        target = target.parentElement;
      }
      target = target.parentElement;
      target
        .querySelector(".scrollable-lists")
        .scrollBy({ top: 100, behaviour: "smooth" });
    });
  });

  const scrollsRight = document.querySelectorAll(".scroll-right");
  scrollsRight.forEach((i) => {
    i.addEventListener("click", (e) => {
      console.log("right ran");
      let target = e.target;
      if (target.tagName === "I") {
        console.log("its I");
        target = target.parentElement;
      }
      target = target.parentElement;
      target
        .querySelector(".x-scrollable-lists")
        .scrollBy({ left: 100, behaviour: "smooth" });
    });
  });
}

function showDropDown(e) {
  let target = e.target;
  if (target.tagName === "BUTTON") {
    target = e.target.parentElement;
  }
  if (target.tagName === "I") {
    target = e.target.parentElement.parentElement;
  }

  target.querySelector("ul").classList.toggle("show");
}

window.addEventListener("DOMContentLoaded", init);
