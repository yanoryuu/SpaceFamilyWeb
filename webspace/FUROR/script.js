const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.add('active');
    } else {
      target.classList.remove('active'); // 画面外に出たらリセット
      void target.offsetWidth; // 再描画をトリガー
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));