var timer = 60;
var score = 0;

function increaseScore() {
  score += 5;
  document.querySelector(".scoreval").textContent = score;
}

function getNewHit() {
  var ran = Math.floor(Math.random() * 10);
  document.querySelector(".hitval").textContent = ran;
}

function makeBubble() {
  var clutter = "";
  var hitValue = Number(document.querySelector(".hitval").textContent);

  while (!clutter.includes(`>${hitValue}<`)) {
    clutter = "";
    for (var i = 1; i <= 119; i++) {
      var ran = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${ran}</div>`;
    }
  }

  document.querySelector("#pbtm").innerHTML = clutter;

  var visibleBubble = Array.from(document.querySelectorAll(".bubble"));
  var somevis = visibleBubble.splice(0, 17);
  var visibleArray = [];
  somevis.forEach(function (ele) {
    visibleArray.push(ele.textContent);
  });
  const hitvaluepresent = document.querySelector(".hitval").textContent;
  if (visibleArray.includes(hitvaluepresent)) {
    return;
  } else {
    const firstval = document.querySelector("#pbtm");
    const newChild = document.createElement("div");
    newChild.className = "bubble";
    newChild.textContent = hitvaluepresent;

    firstval.replaceChild(newChild, firstval.firstChild);
  }
}

function runTime() {
  var timerFunction = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".Timer").textContent = timer;
    } else {
      clearInterval(timerFunction);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (event) {
  var clickedNumber = Number(event.target.textContent);
  if (clickedNumber === Number(document.querySelector(".hitval").textContent)) {
    increaseScore();
    getNewHit();
    makeBubble();
  }
});

document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("panel").classList.add("active");
  document.getElementById("gmenu").classList.add("active");
  runTime();
});

getNewHit();
makeBubble();
