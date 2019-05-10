

const image = document.querySelector(".image-box");
const container = document.querySelector(".container");
let number = 0;


function chooseRandomNumber() {
  return Math.floor((Math.random() * 100) + 1) + "%";
}

function createEllipse() {
  const ellipseWrapper = document.createElement("div");
  ellipseWrapper.classList.add("ellipse-wrapper");
  ellipseWrapper.innerHTML =
    "<div class='ellipse-wrapper__ellipse-number'></div>\n" +
    "<div class='ellipse-wrapper__ellipse'></div>";
  return ellipseWrapper;
}


let ellipse1 = createEllipse();
ellipse1.classList.add("ancestor");
ellipse1.style.visibility = "hidden";

let ellipse2 = createEllipse();
ellipse2.classList.add("descendant");
ellipse2.style.visibility = "hidden";

function addEllipseToDOM(ell) {
  container.insertBefore(ell, image);
}
addEllipseToDOM(ellipse1);
addEllipseToDOM(ellipse2);

const ellipse1Element=document.querySelector('.ellipse-wrapper.ancestor');


function toggleEllipseVisibility(elipsa) {
  if(window.getComputedStyle(ellipse1Element)
    .visibility === "hidden"){
    elipsa.style.visibility='visible';
  }else{
    elipsa.style.visibility='hidden';
  }
}

function changeEllipseCoordinates(elipsa) {
  let topRandom = chooseRandomNumber();
  let leftRandom = chooseRandomNumber();
  elipsa.style.top=topRandom;
  elipsa.style.left=leftRandom;
}

function ellipseInterval() {
  setTimeout(function()
  {
    changeEllipseCoordinates(ellipse1);
    toggleEllipseVisibility(ellipse1);
    changeEllipseCoordinates(ellipse2);
    toggleEllipseVisibility(ellipse2);
  },
    2000);
}

const ellipsesSwitch = setInterval(ellipseInterval, 2000);






//TIME:

  let distance = 150;
  let countDownInterval = setInterval(countDown, 1000);
  const clockLarge = document.querySelector('.clock__clock-large');
  const clockSmall = document.querySelector('.clock__clock-small');

    window.onload = function () {
      clockLarge.innerHTML = `0${Math.floor(distance / 60).toString()}:`;
      clockSmall.innerHTML =`${(distance % 60).toString()}`;
    }


  function countDown() {
    distance--;
    let min = Math.floor(distance / 60).toString();
    let formattedMin = `0${min}`.slice(-2);
    let sec = (distance % 60).toString();
    clockLarge.innerHTML = `${formattedMin}:`;
    clockSmall.innerHTML = `0${sec}`.slice(-2);

    if (distance < 1) {
      clearInterval(countDownInterval);
      clearInterval(ellipsesSwitch);
      gameOverMessage();
    }
    }

function gameOverMessage() {
  clockLarge.innerHTML='GAME ';
  clockSmall.innerHTML = 'OVER!!';
}

const ellipseWrapper = document.querySelector('.ellipse-wrapper');
ellipseWrapper.addEventListener("click", scorePoint, false);


function scorePoint() {
  const ellipseNumberWrapper = document.querySelector('.ellipse-wrapper__ellipse-number');
  number++;
  ellipseNumberWrapper.innerHTML = `${number}`;
}

