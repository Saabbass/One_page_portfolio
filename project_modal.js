var modal = document.getElementById("projectModal");
var images = document.getElementsByClassName("myImages");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var body = document.body;

for (var i = 0; i < images.length; i++) {
  var img = images[i];

  img.onclick = function (evt) {
    modal.style.display = "flex";
    body.style.overflow = "hidden";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName("close_holder")[0];

span.onclick = function () {
  modal.style.display = "none";
  body.style.overflow = "visible";
};
