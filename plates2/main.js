let h1 = document.getElementById("header");
function fork1() {
  h1.style.color = "white";
  h1.style.backgroundColor = "black";
  let rose = document.querySelector("#rose");
  rose.src = "./assets/fork3.png";
}
function fork2() {
  let rose = document.querySelector("#rose");
  h1.style.opacity = 1;

  rose.src = "./assets/fork.png";
  h1.style.color = "black";
  h1.style.backgroundColor = "white";
}

let sentence1 = "newly formed – cylinder";

function textFade() {
  zine = document.querySelector("#zine");
  zine.style.opacity = 0.05;
  console.log("hiii");
}
function textFade2() {
  zine = document.querySelector("#zine");
  zine.style.opacity = 0.5;
  console.log("hiii");
}

window.onload = function () {
  var tempX = 0;
  var tempY = 0;
  var body = document.getElementsByTagName("body");
  //   let t1 = document.querySelector("#tallrik1");
  let t2 = document.querySelector("#tallrik2");
  let t3 = document.querySelector("#tallrik3");
  let t4 = document.querySelector("#tallrik4");
  let t5 = document.querySelector("#tallrik5");
  let t6 = document.querySelector("#tallrik6");
  let t7 = document.querySelector("#tallrik7");
  let t8 = document.querySelector("#tallrik8");
  let rose = document.querySelector("#rose");
  let box = document.querySelector("#box");

  //   body.addEventListener("mousedown", function (evnt) {
  //     rose.src = "./assets/fork2.png";
  //   });
  //   body.addEventListener("mouseup", function () {
  //     rose.src = "./assets/fork.png";
  //   });

  function getMouseXY(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    tempX = e.pageX;
    tempY = e.pageY;

    if (tempX < 0) {
      tempX = 0;
    }
    if (tempY < 0) {
      tempY = 0;
    }

    // Scale mouseposition to rgb value range
    tempX = Math.floor(scale(tempX, 0, window.innerWidth, 0, 360));
    tempY = Math.floor(scale(tempY, 0, window.innerHeight, 0, 360));
    rose.style.left = mouseX - 75 + "px";
    rose.style.top = mouseY - 125 + "px";

    body[0].style.backgroundImage = ` linear-gradient(
    //     to right,
    //     rgb(${tempX}, 0, 197),
    //     rgb(0, 68, ${tempY})
    //   )`;
    t2.style.transform = "rotate(" + tempX / 2 + "deg)";
    t3.style.transform = "rotate(" + 50 + tempY * 1.5 + "deg )";
    t4.style.transform = "rotate(" + tempX * 1.5 + "deg)";
    t5.style.transform = "rotate(" + 200 + tempY / 0.4 + "deg)";
    t6.style.transform = "rotate(" + tempY / 0.8 + "deg)";
    // t7.style.transform = "rotate(" + tempX / 3 + "deg)";
    // t8.style.transform = "rotate(" + tempY / 2 + "deg)";

    return true;
  }

  // Map one range of numbers to another range or numbers
  function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }
  document.addEventListener("mousemove", getMouseXY);
};

let count = 0;
let count2 = 0;
let newsentence = [" "];

function addchar() {
  let h1 = document.getElementById("header");
  let sentence2 = sentence1.split("");

  count += 1;

  if (count % 25 == 0) {
    count2 += 1;
    newsentence.push(sentence2[count2 - 2]);
    console.log(count2, newsentence);
  }
  h1.innerHTML = newsentence.join(" ");
}
