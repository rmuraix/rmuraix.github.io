window.WebFontConfig = {
  google: { families: ['Noto+Sans+JP'] },
  active: function() {
    sessionStorage.fonts = true;
  }
};

(function() {
  var wf = document.createElement('script');
  wf.src = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
