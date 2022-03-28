const $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-item',
  percentPosition: true,
  gutter: 8
});

const images = document.querySelectorAll('.grid-item img');

let num = 0;
images.forEach((el) => {
  const img = new Image();
  img.src = el.src;
  img.addEventListener('load', () => {
    num += 1;
    if (images.length === num) {
      $grid.masonry();
      images.forEach((item, i) => {
        setTimeout(() => {
          item.classList.add('scaleUp');
          console.log(i);
        }, 300 * i);
      });
    }
  });
});
