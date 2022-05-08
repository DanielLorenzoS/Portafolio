// var x = document.getElementById("divCont");
var y = document.getElementById("divForm");
var z = document.getElementById("divHab");
var a = document.getElementById("divCon");
var b = document.getElementById("divMain");
var i = document.getElementById("image");

const nav1 = document.getElementById("pestaña1");
// const nav2 = document.getElementById('pestaña2');
const nav3 = document.getElementById("pestaña3");
const nav4 = document.getElementById("pestaña4");
const nav5 = document.getElementById("pestaña5");

function info() {
  if (y.style.display === "none") {
    y.style.display = "block";
    // x.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
  } else {
    y.style.display = "block";
    // x.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
  }
}
function projects() {
  if (z.style.display === "none") {
    z.style.display = "flex";
    // x.style.display = "none";
    y.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
  } else {
    z.style.display = "flex";
    // x.style.display = "none";
    y.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
  }
}
function conocimiento() {
  if (a.style.display === "none") {
    z.style.display = "none";
    // x.style.display = "none";
    y.style.display = "none";
    a.style.display = "flex";
    b.style.display = "none";
  } else {
    z.style.display = "none";
    // x.style.display = "none";
    y.style.display = "none";
    a.style.display = "flex";
    b.style.display = "none";
  }
}
function menu() {
  if (b.style.display === "none") {
    z.style.display = "none";
    // x.style.display = "none";
    y.style.display = "none";
    a.style.display = "none";
    b.style.display = "inline-block";
  } else {
    z.style.display = "none";
    // x.style.display = "none";
    y.style.display = "none";
    a.style.display = "none";
    b.style.display = "inline-block";
  }
}

let btnMenu = document.querySelector(".btnDown");
let navRes = document.querySelector(".nav-res");
let obs = true;

let n1 = document.querySelector('.n1');
let n2 = document.querySelector('.n2');
let n3 = document.querySelector('.n3');

btnMenu.addEventListener('click', () => {
  if (obs) {
    navRes.style.marginTop = "10vh";
    obs = false;
  }else {
    navRes.style.marginTop = "-100vh";
    obs = true;
  }
});

n1.addEventListener('click', () => {
  navRes.style.marginTop = "-100vh";
  obs = true;
});
n2.addEventListener('click', () => {
  navRes.style.marginTop = "-100vh";
  obs = true;
});
n3.addEventListener('click', () => {
  navRes.style.marginTop = "-100vh";
  obs = true;
});

let options = {
	threshold: 0.5
}
