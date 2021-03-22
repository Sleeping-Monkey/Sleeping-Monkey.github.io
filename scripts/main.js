function Nastya() {
    alert('ем огурец!');
}
var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Приветик! Что на сегодня?');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName;
}

document.querySelector('img').onclick = Nastya;
myButton.onclick = setUserName;



