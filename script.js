// mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if(btn && mobileNav){
    btn.addEventListener('click', () => {
      const open = mobileNav.style.display === 'block';
      mobileNav.style.display = open ? 'none' : 'block';
      mobileNav.setAttribute('aria-hidden', open ? 'true' : 'false');
    });
  }
});
