
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Mega menu slider arrows
  var inner = document.getElementById('products-mega-menu-inner');
  var btnLeft = document.getElementById('mega-menu-left');
  var btnRight = document.getElementById('mega-menu-right');
  // Amount to scroll per click (adjust as needed)
  function getScrollAmount() {
    // Show about 2.5 cards per click
    const card = inner.querySelector('.products-mega-menu-col');
    return card ? (card.offsetWidth + 32) * 2.5 : 300;
  }
  btnLeft.addEventListener('click', function() {
    inner.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });
  btnRight.addEventListener('click', function() {
    inner.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });
  // Hide arrows if not scrollable
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

  // Your original nav hover code (unchanged):
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
      var rect = navItem.getBoundingClientRect();
      megaMenu.style.left = rect.left + "px";
      megaMenu.style.top = (rect.bottom + window.scrollY) + "px";
    }
    navItem.addEventListener('mouseenter', positionMenu);
    window.addEventListener('resize', positionMenu);
    window.addEventListener('scroll', positionMenu);
  }
});
</script>
