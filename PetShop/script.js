window.addEventListener('scroll', function() {
  const quemSomos = document.querySelector('.titulo-quem-somos');
  const rect = quemSomos.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight * 0.8) {
    quemSomos.classList.add('aparecer');
  }
});
