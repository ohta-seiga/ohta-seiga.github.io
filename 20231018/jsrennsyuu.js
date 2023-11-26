console.log("modalを読み込みました");
function showModal(){
  let element = document.querySelector("#modal");
  element.innerHTML = "クリックされました";
}

function changeRed(){
  let element = document.querySelector("#modal2");
  element.style.backgroundColor = "red";
}
function changeYellow(){
  let element = document.querySelector("#modal2");
  element.style.backgroundColor = "yellow";
}
function changeGreen(){
  let element = document.querySelector("#modal2");
  element.style.backgroundColor = "green";
}

function appendCircle() {
  let element = document.querySelector("#modal3");
  element.innerHTML += "○"
}

function appendCross() {
  let element = document.querySelector("#modal3");
  element.innerHTML += "×"
}

function plusOne() {
  let element = document.querySelector("#modal4");
  let total = Number(element.innerHTML);
  element.innerHTML = total + 1;
}

function plusFive() {
  let element = document.querySelector("#modal4");
  let total = Number(element.innerHTML);
  element.innerHTML = total + 5;
}

function plusTen() {
  let element = document.querySelector("#modal4");
  let total = Number(element.innerHTML);
  element.innerHTML = total + 10;
}