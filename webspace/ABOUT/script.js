document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".hroom, .rroom, .aroom, .froom, .nroom");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 要素が画面内に入ったらフェードインさせる
        entry.target.classList.add("show");
      } else {
        // 画面外に出たらフェードアウト状態に戻す
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
});