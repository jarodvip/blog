// whale — Hexo Theme JS
// Scroll reveal + ticker helpers

document.addEventListener('DOMContentLoaded', function () {
  // 滚动入场淡入
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    io.observe(el);
  });

  // 立即触发一次（首屏元素不依赖滚动）
  window.addEventListener('load', function () {
    document.querySelectorAll('.reveal').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('in');
    });
  });
});
