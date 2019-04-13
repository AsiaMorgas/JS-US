// let elipse =  document.querySelector(".elipsis-outern.elipsis-outern--1");
// // elipse.className = elipse.className + " selected";
// elipse.classList.toggle("selected");
// let clone = elipse.cloneNode(true);
// clone.style.background = "red";
// // 1st way
// const container = document.querySelector(".container");
// container.appendChild(clone);
// clone.style.top="50%";
// 2nd

const image = document.querySelector(".image-box");
const container = document.querySelector(".container");


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
ellipse1Element.addEventListener('visibilitychange', function()
{
  setTimeout(function()
  {
    toggleEllipseVisibility(ellipse2)
  }, 1000)
}, false);

//const ellipse2Element=document.querySelector('ellipse-wrapper.descendant');

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

function ellipse1Interval() {
  setTimeout(function() {
    changeEllipseCoordinates(ellipse1);
    toggleEllipseVisibility(ellipse1);
  }, 2000);
}

setInterval(ellipse1Interval, 4000);






//TIME:

  let distance = 150;
  let countDownInterval = setInterval(countDown, 1000);
  const clockLarge = document.querySelector('.clock__clock-large');
  const clockSmall = document.querySelector('.clock__clock-small');

  function countDown() {
    distance = distance - 1;
    let min = Math.floor(distance / 60).toString();
    let sec = (distance % 60).toString();
    clockLarge.innerHTML = `0${min}:`;
    clockSmall.innerHTML = `0${sec}`.slice(-2);

    if (distance < 1) {
      clearInterval(countDownInterval);
      gameOverMessage();
    }
    }

function gameOverMessage() {
  clockLarge.innerHTML='GAME ';
  clockSmall.innerHTML = 'OVER!!';
}


// ellipseWrapper.addEventListener("click",moveEllipse)
//
//
// function moveEllipse() {
//   let topRandom = Math.floor((Math.random() * 100) + 1) + "%";
//   let leftRandom = Math.floor((Math.random() * 100) + 1) + "%";
//
//   ellipseWrapper.style.top = topRandom;
//   ellipseWrapper.style.left = leftRandom;
//   number++;
// }


// ellipseWrapper.insertAdjacentText("afterbegin",number);
//ellipse insertion into container


// const clone2 = document.createElement("div");
// clone2.innerHTML= "<div class=`elipsis1 elipsis-outern__elipsis`></div>\n" +
//   " <div class=\"elipsis-outern__elipsis--number\">7</div>";
// const clock = document.querySelector(".clock");
// container.insertBefore(clone2, clock);


//   let ellipse = document.querySelector(".ellipse-wrapper__ellipse-number");
// console.log(ellipse);
//ellipseWrapper.style.background = "red";
