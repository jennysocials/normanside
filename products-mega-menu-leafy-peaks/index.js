<script>
document.addEventListener('DOMContentLoaded', function() {
  var inner = document.getElementById('products-mega-menu-inner');
  var btnLeft = document.getElementById('mega-menu-left');
  var btnRight = document.getElementById('mega-menu-right');
  function getScrollAmount() {
    const card = inner.querySelector('.products-mega-menu-col');
    let gap = 32;
    if (window.innerWidth <= 900) gap = 10;
    else if (window.innerWidth <= 1200) gap = 18;
    return card ? (card.offsetWidth + gap) * 2.5 : 300;
  }
  btnLeft.addEventListener('click', function(e) {
    e.stopPropagation();
    inner.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });
  btnRight.addEventListener('click', function(e) {
    e.stopPropagation();
    inner.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });
  function updateArrowVisibility() {
    if (inner.scrollWidth > inner.clientWidth) {
      btnLeft.style.display = 'flex';
      btnRight.style.display = 'flex';
    } else {
      btnLeft.style.display = 'none';
      btnRight.style.display = 'none';
    }
  }
  updateArrowVisibility();
  window.addEventListener('resize', updateArrowVisibility);

  // Hover logic for navigation menu
  var navItem = document.querySelector('a[href="/products-dropdown"]');
  var megaMenu = document.getElementById('products-mega-menu');
  if (navItem && megaMenu) {
    navItem.addEventListener('mouseenter', function() {
      positionMenu();
      megaMenu.classList.add('visible');
    });
    navItem.addEventListener('mouseleave', function() {
      setTimeout(function() {
        if (!megaMenu.matches(':hover')) megaMenu.classList.remove('visible');
      }, 200);
    });
    megaMenu.addEventListener('mouseenter', function() {
      megaMenu.classList.add('visible');
    });
    megaMenu.addEventListener('mouseleave', function() {
      megaMenu.classList.remove('visible');
    });
    function positionMenu() {
      // Full width, so just set top
      var rect = navItem.getBoundingClientRect();
      megaMenu.style.top = (rect.bottom + window.scrollY) + "px";
    }
    navItem.addEventListener('mouseenter', positionMenu);
    window.addEventListener('resize', positionMenu);
    window.addEventListener('scroll', positionMenu, true);
  }
});
</script>
