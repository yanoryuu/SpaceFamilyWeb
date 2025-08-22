const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.add('active');
    } else {
      target.classList.remove('active');
      void target.offsetWidth; // 再描画トリガー
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('.fade-in, .art').forEach(el => observer.observe(el));