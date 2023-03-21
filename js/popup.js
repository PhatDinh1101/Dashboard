document.querySelectorAll('.product-item img').forEach(image => {
     image.onclick = () => {
          document.querySelector('.product-popup').style.display = 'block';
          document.querySelector('.product-popup img').src =image.getAttribute('src');
     }
});
document.querySelector('.product-popup span').onclick = () => {
     document.querySelector('.product-popup').style.display = 'none';
}