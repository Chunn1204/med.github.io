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

  adjustTopButton(topBtn, footer, windowHeight);

  //icon
  if (window.innerWidth <= 768) {
    const fixedTop = 450;  // 預設固定高度
    let offset = 0;

    // 如果 footer 接近，往上調整 icon 的位置
    if (footerTop < fixedTop + 85) {
      offset = fixedTop + 85 - footerTop;
    }

    sideIcons.style.top = (fixedTop - offset) + 'px';
  }
  else {
    const initialTop = 200;
    const minTop = 20;
    const newTop = Math.max(initialTop - scrollY, minTop);

    sideIcons.style.top = newTop + 'px';
    sideIcons.style.transform = 'none';
    sideIcons.style.bottom = 'auto';
  }
});

//topButton
function adjustTopButton(topBtn, footer, windowHeight) {
  const footerTop = footer.getBoundingClientRect().top;

  if (footerTop < windowHeight - 60) {
    topBtn.style.bottom = (windowHeight - footerTop + 20) + 'px';
  } else {
    topBtn.style.bottom = '40px';
  }
}

//changeAHUSAndPnh
window.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth <= 768) {
    const ahusLabel = document.querySelector('#ahus-label'); // 你的 span 要加 ID
    if (ahusLabel) {
      ahusLabel.textContent = '認識 aHUS';
    }

    const pnhLabel = document.querySelector('#pnh-label'); // 你的 span 要加 ID
    if (pnhLabel) {
      pnhLabel.textContent = '認識 PNH';
    }
  }
});

//768clickButton
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (dropdownToggle && dropdownContent) {
      dropdownToggle.addEventListener("click", function (e) {
        e.preventDefault();
        dropdownContent.classList.toggle("show-dropdown");
      });
    }
});
