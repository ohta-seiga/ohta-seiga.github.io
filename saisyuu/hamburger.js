window.onload = function () {
  let nav = document.getElementById('nav-wrapper');
  let hamburger = document.getElementById('js-hamburger');
  let blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
    blackBg.style.display = nav.classList.contains('open') ? 'block' : 'none';
    // Toggle body overflow when the navigation is open
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : 'auto';
  });

  blackBg.addEventListener('click', function () {
    nav.classList.remove('open');
    blackBg.style.display = 'none';
    // Restore body overflow when the navigation is closed
    document.body.style.overflow = 'auto';
  });
};
