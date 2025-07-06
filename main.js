
  window.addEventListener('scroll', function () {
    const icons = document.querySelector('.fixed-side-icons');
    const scrollY = window.scrollY;
     const initialTop = 200;  // 起始距離視窗頂部位置（依你設計調整）
    const minTop = 20;       // 不會超過這個距離（固定在視窗最上緣下方）

    // 根據滑動調整 top
    const newTop = Math.max(initialTop - scrollY, minTop);
    icons.style.top = newTop + 'px';
  });