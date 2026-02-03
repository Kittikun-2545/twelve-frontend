function openImage(src) {
  const modal = document.getElementById("imgModal");
  const img = document.getElementById("modalImg");

  img.src = src;
  modal.style.display = "flex";
}

function closeImage() {
  document.getElementById("imgModal").style.display = "none";
}
