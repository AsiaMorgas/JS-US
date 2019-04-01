var number = "1";
const container = document.querySelector(".container");
const imageBoxSelector = document.querySelector(".image-box");

const ellipseWrapper = document
  .createElement("div");

ellipseWrapper.classList.add("ellipse-wrapper__ellipse-outern--"+number);

container.insertBefore(ellipseWrapper, imageBoxSelector);

const numberElement = document
  .createElement("div");

numberElement.classList.add("ellipse-wrapper__ellipse-number");

const ellipse = document
  .createElement("div");
  ellipse.addEventListener("click", function() {number+=1});
  ellipse.classList.add("ellipse-wrapper__ellipse");


  function drawEllipse(){
    ellipseWrapper.appendChild(numberElement);
    ellipseWrapper.appendChild(ellipse);
    console.log(ellipseWrapper);
}

drawEllipse();









function addEllipse() {}

