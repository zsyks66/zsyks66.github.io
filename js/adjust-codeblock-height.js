(function() {
  function adjust() {
    var blocks = document.querySelectorAll('.md-text .highlight, .md-text pre > .hljs');
    blocks.forEach(function(el) {
      var h = el.clientHeight;
      if (h > 500) {
        el.style.maxHeight = '300px';
        el.style.overflow = 'auto';
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', adjust);
  } else {
    adjust();
  }
  document.addEventListener('pjax:complete', adjust);
})();
