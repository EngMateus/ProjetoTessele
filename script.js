document.addEventListener('DOMContentLoaded', () => {
  const nextBtns = document.querySelectorAll('.btn-next');
  const prevBtns = document.querySelectorAll('.btn-prev');
  const carrosseis = document.querySelectorAll('.container-produtos');

  nextBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const container = carrosseis[i];
      container.scrollLeft += 300;
      animarProdutos(container);
    });
  });

  prevBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const container = carrosseis[i];
      container.scrollLeft -= 300;
      animarProdutos(container);
    });
  });

  // Anima os produtos visíveis ao carregar a página
  carrosseis.forEach(animarProdutos);
});
