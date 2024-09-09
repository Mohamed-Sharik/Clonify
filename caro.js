// PG-CNT CAROUSEL
let sldPos = 0;
const sliders = document.querySelectorAll(".sld-itm");
const totSld = sliders.length;
const prevbtn = document.querySelector(".prev-btn");
const nxtbtn = document.querySelector(".nxt-btn");

prevbtn.addEventListener("click", () => {
  prevSld();
});

nxtbtn.addEventListener("click", () => {
  nxtSld();
});

function updPos() {
  sliders.forEach((slide) => {
    slide.classList.remove("active");
    slide.classList.add("hidden");
  });
  sliders[sldPos].classList.add("active");

  dots.forEach((dot) => {
    dot.classList.remove("dot-active");
  });

  dots[sldPos].classList.add("dot-active");
}

function prevSld() {
  if (sldPos == 0) {
    sldPos = totSld - 1;
  } else {
    sldPos--;
  }
  updPos();
}

function nxtSld() {
  if (sldPos == totSld - 1) {
    sldPos = 0;
  } else {
    sldPos++;
  }
  updPos();
}

const dotCon = document.querySelector(".dots");
// by this we can create n number of dots by given imgs
sliders.forEach((slide) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotCon.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");
dots[sldPos].classList.add("dot-active");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sldPos = index;
    updPos();
  });
});

setInterval(() => {
  if (sldPos == totSld - 1) {
    sldPos = 0;
  } else {
    sldPos++;
  }
  updPos();
}, 3000);

// side nav

const sidnav = document.querySelector(".sdmenu");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  showNav();
});

function showNav() {
  sidnav.style.right = "0";
}

const close = document.querySelector(".cls");

close.addEventListener("click", () => {
  hideNav();
});

function hideNav() {
  sidnav.style.right = "-62%";
}

// NAV SLIDER
const prodElements = document.querySelectorAll(".st-prod");

prodElements.forEach((element) => {
  element.addEventListener("click", toggleProd);
});

function toggleProd(event) {
  const hedProd = event.currentTarget.querySelector(".hed-prod");

  hedProd.classList.toggle("show");
}

// PLACEHOLDER

function cngPh() {
  const email = document.querySelector(".email");
  if (window.innerWidth >= 768) {
    email.placeholder = "Email address";
  } else {
    email.placeholder = "your email";
  }
}

cngPh();

window.addEventListener("resize", cngPh);
