let currentImg = "";

function openModal(img, title) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = "images/" + img;
  document.getElementById("modal-title").innerText = title;
  currentImg = img;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function download() {
  const link = document.createElement("a");
  link.href = "images/" + currentImg;
  link.download = currentImg;
  link.click();
}
