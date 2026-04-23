
/* Gnb */
document.querySelector('.area-header').addEventListener('mouseenter', () => {
  document.querySelector('.area-header').classList.add('on');
})
document.querySelector('.area-header').addEventListener('mouseleave', () => {
  document.querySelector('.area-header').classList.remove('on');
})
  
/* Sitemap */
document.querySelector('.area-header .box-util-login .btn-sitemap').addEventListener('click', () => {
  document.querySelector('.layer-sitemap').classList.add('on');
})
document.querySelector('.layer-sitemap .btn-close-sitemap').addEventListener('click', () => {
  document.querySelector('.layer-sitemap').classList.remove('on');
})

