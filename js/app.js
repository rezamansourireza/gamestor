document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge: 'right'
  });

  var carouselElems = document.querySelectorAll('.carousel.top_carousel');
  M.Carousel.init(carouselElems, {
      fullWidth: true,
      indicators: true,
    },
    setInterval(()=> {
      M.Carousel.getInstance(carouselElems[0]).next()
    }, 5000)
  );

  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
    hoverEnabled: false
  });
  


});