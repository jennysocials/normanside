<script>
<!-- NORMANSIDE MEGA MENU HTML END -->
// NORMANSIDE MEGA MENU JAVASCRIPT START
document.addEventListener("DOMContentLoaded", function () {
  const link = document.querySelector('a[href="/dining-navigational-menu"]');
  const menu = document.getElementById('diningDropdown');

  if (link && menu) {
    const hoverArea = document.createElement("div");
    hoverArea.style.position = "relative";
    link.parentNode.insertBefore(hoverArea, link);
    hoverArea.appendChild(link);
    document.body.appendChild(menu);

    hoverArea.addEventListener("mouseenter", () => {
      menu.style.display = "block";
    });

    hoverArea.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!menu.matches(":hover")) menu.style.display = "none";
      }, 200);
    });

    menu.addEventListener("mouseenter", () => {
      menu.style.display = "block";
    });

    menu.addEventListener("mouseleave", () => {
      menu.style.display = "none";
    });
  }
});
// NORMANSIDE MEGA MENU JAVASCRIPT END
</script>
