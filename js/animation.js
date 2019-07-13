var win = window;
const header = document.querySelector(".header-container");
const mainBanner = document.querySelector(".main-banner");
let LastScroll = win.scrollY;
var bannerHieght = mainBanner.clientHeight;

win.addEventListener("scroll", function() {
  bannerHieght = mainBanner.clientHeight;
  var timing = setInterval(animateheader, 300);
  function animateheader() {
    var scrolldis = Math.abs(win.scrollY - LastScroll);
    console.log(scrolldis);
    if (win.scrollY > LastScroll) {
      console.log("A");
      header.classList.remove("header-scroll-in");
      header.classList.add("header-scroll-out");
    } else if (win.scrollY < LastScroll && scrolldis >= 210) {
      console.log("B");
      header.classList.add("header-scroll-in");
      header.classList.remove("header-scroll-out");
    }
    LastScroll = win.scrollY;
    clearInterval(timing);
  }
});

const burgerIcon = document.querySelector(".header-icon");
const SubMenu = document.querySelector(".another-menu");
const closeButton = document.querySelector(".icon-close");

burgerIcon.addEventListener("click", function() {
  SubMenu.classList.remove("menu-not-active");
  SubMenu.classList.add("menu-active");
});
closeButton.addEventListener("click", function() {
  SubMenu.classList.remove("menu-active");
  SubMenu.classList.add("menu-not-active");
});

const asia = document.querySelector(".asia-pacific");
const world = document.querySelector(".world-wide");
const asiaDescription = document.querySelector(".asia");
const worldDescription = document.querySelector(".world");

asia.addEventListener("click", function() {
  asiaDescription.classList.add("description-active");
  asiaDescription.classList.remove("description-not-active");
  worldDescription.classList.add("description-not-active");
  worldDescription.classList.remove("description-active");
  asia.style.color = "red";
  world.style.color = "rgb(71, 71, 71)";
});
world.addEventListener("click", function() {
  worldDescription.classList.add("description-active");
  worldDescription.classList.remove("description-not-active");
  asiaDescription.classList.add("description-not-active");
  asiaDescription.classList.remove("description-active");
  world.style.color = "red";
  asia.style.color = "rgb(71, 71, 71)";
});

const companyIconClose = document.querySelector(".company-icon-close");
const companyList = document.querySelector(".company-container");
const indoCompany = document.querySelector(".companies__indonesia");
const singaCompany = document.querySelector(".companies__singapore");
const thaiCompany = document.querySelector(".companies__thailand");
const malayCompany = document.querySelector(".companies__malaysia");
const newzeaCompany = document.querySelector(".companies__newzealand");
const indoContent = document.querySelector(".content-indonesia");
const singaContent = document.querySelector(".content-singapore");
const thaiContent = document.querySelector(".content-thailand");
const malayContent = document.querySelector(".content-malaysia");
const newzeaContent = document.querySelector(".content-newzealand");
let LastOpened;

indoCompany.addEventListener("click", function() {
  companyList.style.display = "flex";
  indoContent.classList.remove("not-active");
  indoContent.classList.add("active");
  LastOpened = indoContent;
});
singaCompany.addEventListener("click", function() {
  companyList.style.display = "flex";
  singaContent.classList.remove("not-active");
  singaContent.classList.add("active");
  LastOpened = singaContent;
});
thaiCompany.addEventListener("click", function() {
  companyList.style.display = "flex";
  thaiContent.classList.remove("not-active");
  thaiContent.classList.add("active");
  LastOpened = thaiContent;
});
malayCompany.addEventListener("click", function() {
  companyList.style.display = "flex";
  malayContent.classList.remove("not-active");
  malayContent.classList.add("active");
  LastOpened = malayContent;
});
newzeaCompany.addEventListener("click", function() {
  companyList.style.display = "flex";
  newzeaContent.classList.remove("not-active");
  newzeaContent.classList.add("active");
  LastOpened = newzeaContent;
});

companyIconClose.addEventListener("click", function() {
  companyList.style.display = "none";
  LastOpened.classList.remove("active");
  LastOpened.classList.add("not-active");
});
// companyList.addEventListener("click", function() {
//   companyList.style.display = "none";
//   LastOpened.classList.remove("active");
//   LastOpened.classList.add("not-active");
// });
