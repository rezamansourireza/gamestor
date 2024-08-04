document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{
      edge:'right'
    });

    var carouselElems = document.querySelectorAll('.carousel.top_carousel');
    M.Carousel.init(carouselElems, {
        fullWidth: true,
        indicators: true,
        onCycleTo: function(){
            let elems = document.querySelectorAll('.top_text');
            for (const item of elems) {
                item.classList.remove('isShow');
                setTimeout(function(){
                    item.classList.add('isShow')
                },700)
            }
        },
    });

    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top',
      hoverEnabled: false
    });


  });