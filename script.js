function changeImage(event) {
  const div = event.currentTarget;
  const rect = div.getBoundingClientRect();
  const mouseX = rect.right - event.clientX;
   const percentage = (mouseX / rect.width) * 100;
  
  const images = div.querySelectorAll('.image');
  images[1].style.width = `${100 - percentage}%`;
}
document.querySelector('.phone').addEventListener('mousemove', changeImage);
