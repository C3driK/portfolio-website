const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

const forBtn = () => {
  document.body.scrollTop = 200;
  document.documentElement.scrollTop = 0;
};
backToTopBtn.addEventListener("click", forBtn);
