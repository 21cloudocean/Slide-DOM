const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
//控制滑动效果
function carousel() {
  //实现slide循环
  //   if (counter === slides.length) {
  //     counter = 0;
  //   }
  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }
  //在第一页隐藏prev按钮，最后一页隐藏next按钮。
  //next
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  //prev
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
//页面开始时count=0，默认prev隐藏。
prevBtn.style.display = "none";
