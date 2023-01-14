let html = document.documentElement;
upsize.onclick = function() {
  // при помощи JS увеличить размер шрифта html на 2px
  html.style.fontSize = parseInt(getComputedStyle(html, '').fontSize) + 2 + 'px';
//   html.style.fontSize = parseInt(getComputedStyle(html, '').fontSize) + 2 + 'px';
};

downsize.onclick = function() {
    // при помощи JS увеличить размер шрифта html на 2px
    html.style.fontSize = parseInt(getComputedStyle(html, '').fontSize) - 2 + 'px';
  };