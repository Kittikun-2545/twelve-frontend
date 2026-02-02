/* ===== HEADER & FOOTER LOAD (ถ้ามีเดิมก็ปล่อยได้) ===== */
fetch("components/header.html")
  .then(res => res.text())
  .then(data => document.getElementById("header").innerHTML = data);

fetch("components/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);

/* ===== SCROLL ROW ===== */
function scrollRow(id, direction) {
  const row = document.getElementById(id);
  const scrollAmount = 250;
  row.scrollLeft += direction * scrollAmount;
}

/* ===== PRODUCT MODAL ===== */
function openModal(img, title, price) {
  document.getElementById("modalImg").src = img;
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalPrice").innerText = price;
  document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

/* ===== CLOSE MODAL WHEN CLICK OUTSIDE ===== */
window.onclick = function (e) {
  const modal = document.getElementById("productModal");
  if (e.target === modal) {
    closeModal();
  }
};
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  let index = 0;

  if (slides.length <= 1) return;

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);
});

