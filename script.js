window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("navbar").style.background = "#1b4566";
    document.getElementById("navbar").style.borderRadius = "0 0 25px 25px";
    document.getElementById("navbar").style.borderBottom = "1px solid #ffa500";
  } else {
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("navbar").style.background = "#254a66";
    document.getElementById("navbar").style.borderRadius = "0";
    document.getElementById("navbar").style.borderBottom = "none";
  }
}

var i = 0;
var txt = `Hallo mijn naam is S`;
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
