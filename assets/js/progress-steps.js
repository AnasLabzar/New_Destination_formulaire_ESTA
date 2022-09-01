const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const prev1 = document.getElementById("prev1");
const prev2 = document.getElementById("prev2");

const next = document.getElementById("next");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const circles = document.querySelectorAll(".circle");


let currentActive = 1;



next.addEventListener("click", () => {
  if (document.getElementById("section-step2").style.display === "block") {
    currentActive++;
    if (currentActive > circles.length) {
      currentActive = circles.length;
    }
    update();
  }
});

next1.addEventListener("click", () => {
  if (document.getElementById("section-step3").style.display === "block") {
    currentActive++;
    if (currentActive > circles.length) {
      currentActive = circles.length;
    }
    update();
  }

})

next2.addEventListener("click", () => {
  if (document.getElementById("section-step4").style.display === "block") {
    currentActive++;
    if (currentActive > circles.length) {
      currentActive = circles.length;
    }
    update();
  }

})

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

prev1.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

prev2.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100
    }%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
    next1.disabled = true;
    next2.disabled = true;
  } else {
    prev.disabled = false;
    prev1.disabled = false;
    prev2.disabled = false;

    next.disabled = false;
    next1.disabled = false;
    next2.disabled = false;
  }
}
