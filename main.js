window.onload = function () {

  function getMdParamFromUrl () {
    var url = new URL(window.location.href);
    return url.searchParams.get('md');
  }

  var md = getMdParamFromUrl ();
  if (md) {
    initSlide(md);
  } else {
    var element = document.querySelector('.js-lt-list');
    element.style.display = 'block';
  }

  function initSlide (md) {
    slideshow = remark.create({
      sourceUrl: md
    });
    
    var url = '/?md=' + encodeURIComponent(md);
    window.history.pushState("test","test",url);
  } 

  var linkArray = document.querySelectorAll('.js-lt-link');
  linkArray.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var target = event.target;
      initSlide(target.dataset.md);
      var element = document.querySelector('.js-lt-list');
      element.style.display = '';
    })
  });
};