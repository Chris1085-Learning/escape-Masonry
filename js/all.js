var $grid = $('.grid').imagesLoaded(function () {
  $grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    getter: 10
  })
})

$grid.imagesLoaded().progress(function () {
  $grid.masonry()
})
