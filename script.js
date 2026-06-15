// 移动端菜单切换
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// 首页分类筛选（点击导航或侧边栏分类，只显示对应文章）
const cards = document.querySelectorAll('.card[data-cat]');
if (cards.length) {
  document.querySelectorAll('[data-cat]').forEach(link => {
    if (link.classList.contains('card')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      const cat = link.getAttribute('data-cat');
      cards.forEach(c => {
        c.style.display = (c.getAttribute('data-cat') === cat) ? '' : 'none';
      });
      nav && nav.classList.remove('open');
      document.getElementById('main')?.scrollIntoView({behavior:'smooth'});
    });
  });
}
