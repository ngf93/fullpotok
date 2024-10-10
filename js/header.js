/* фиксированная шапка */
window.addEventListener('scroll', function() {
    let st = window.pageYOffset;
    if (st > 200) {
      document.querySelector('header').classList.add("sticky");
    } else {
      document.querySelector('header').classList.remove("sticky");
    }
});