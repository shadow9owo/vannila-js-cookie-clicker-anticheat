//made by shadowdev
var clicks;
var title = document.getElementById("title").innerText = "ez clicker 1.0";
var countint = 0;
var lastcountint = -1;
var count = document.getElementById("count");

function clicked() {
    console.log("works");
    lastcountint++;
    if (lastcountint == countint) {
        countint++;
        count.innerText = "cookies : " + countint;
    }else {
      countint = lastcountint;
      count.innerText = "cookies : " + countint;
      lastcountint--;
    }
}