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


var number = "1";
function chooseRandomNumber() { return Math.floor((Math.random() * 100) + 1) + "%";}
const image = document.querySelector(".image-box");
const container = document.querySelector(".container");

const ellipseWrapper = document.createElement("div");
ellipseWrapper.classList.add("ellipse-wrapper");
ellipseWrapper.classList.add("ellipse-outern--" + number);
ellipseWrapper.innerHTML =
  "<div class='ellipse-wrapper__ellipse-number'></div>\n" +
  "<div class='ellipse-wrapper__ellipse'></div>";

function displayEllipse() {
  let topRandom = chooseRandomNumber();
  let leftRandom = chooseRandomNumber();
  let ellipse = ellipseWrapper;

  ellipse.style.top = topRandom;
  ellipse.style.left = leftRandom;
  container.insertBefore(ellipse, image);
  const numberWrapper = document.querySelector(".ellipse-wrapper__ellipse-number");
  numberWrapper.insertAdjacentText("beforeend", number);
}
function removeEllipse() {
  const el = document.querySelector(".ellipse-wrapper.ellipse-outern--1");
  if(el){
    setTimeout(function() {el.remove()}, 2000);
  }
}

// function displayClone() {
//   let topRandom = chooseRandomNumber();
//   let leftRandom = chooseRandomNumber();
//   let clone = ellipseWrapper.cloneNode(true);
// clone.style.top = topRandom;
//   clone.style.left = leftRandom;
//   container.insertBefore(clone, image);
//   const numberWrapper = document.querySelector(".ellipse-wrapper__ellipse-number");
//   numberWrapper.insertAdjacentText("beforeend", number);
// }


setInterval(
 function() {
   for(let i=0; i<15; i++){
   displayEllipse();
   removeEllipse()}
 },4000);














//TIME:

function currentTime() {
  setInterval(timer, 1000)
};

function timer() {
  let date = new Date();
  let currentHours = date.getHours().toLocaleString();
  currentHours = (`0${currentHours}`).slice(-2)
  let currentMin = date.getMinutes().toLocaleString();
  currentMin = (`0${currentMin}`).slice(-2);
  document.querySelector("span.clock__clock-large").innerHTML = `${currentHours}:`;
  document.querySelector("span.clock__clock-small").innerHTML = `${currentMin}`;
}
currentTime();

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
