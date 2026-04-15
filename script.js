let currentImg = "";

function openModal(img) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = "images/" + img;
  currentImg = img;
}

function download() {
  const link = document.createElement("a");
  link.href = "images/" + currentImg;
  link.download = currentImg;
  link.click();
}