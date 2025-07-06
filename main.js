
  window.addEventListener('scroll', function () {
    const icons = document.querySelector('.fixed-side-icons');
    const scrollY = window.scrollY;
     const initialTop = 200;  // 起始距離視窗頂部位置（依你設計調整）
    const minTop = 20;       // 不會超過這個距離（固定在視窗最上緣下方）

    // 根據滑動調整 top
    const newTop = Math.max(initialTop - scrollY, minTop);
    icons.style.top = newTop + 'px';
  });

  window.addEventListener('scroll', function () {
  const topBtn = document.querySelector('.back-to-top');
  const footer = document.getElementById('site-footer');

  if (!topBtn || !footer) return;

  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // 當 footer 進入視窗底部 60px 以內，調整 top 鈕向上移
  if (footerTop < windowHeight - 60) {
    topBtn.style.bottom = (windowHeight - footerTop + 20) + 'px';
  } else {
    topBtn.style.bottom = '40px'; // 正常懸浮位置
  }
});

// ☰ 開關選單功能
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('show');
});

window.addEventListener('scroll', function () {
  const topBtn = document.querySelector('.back-to-top');
  const sideIcons = document.querySelector('.fixed-side-icons');
  const footer = document.getElementById('site-footer');
  const windowHeight = window.innerHeight;
  const footerTop = footer.getBoundingClientRect().top;

  if (!topBtn || !footer || !sideIcons) return;

  // ✅ 調整 Top 鍵避開 footer（你原本已有這段，可保留）
  if (footerTop < windowHeight - 60) {
    topBtn.style.bottom = (windowHeight - footerTop + 20) + 'px';
  } else {
    topBtn.style.bottom = '40px';
  }

  // ✅ 調整左側角色 icon（僅手機版 bottom 模式下生效）
  if (window.innerWidth <= 768) {
    if (footerTop < windowHeight - 80) {
      sideIcons.style.bottom = (windowHeight - footerTop + 40) + 'px';
    } else {
      sideIcons.style.bottom = '80px';
    }
  }
});
