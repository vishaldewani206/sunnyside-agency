let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-mob');
});

window.addEventListener('load', () => {
  if (window.innerWidth < 786) {
    let mainContentBothImg = document.querySelectorAll(
      '.main-content-both-img'
    );
    let changeImg = document.querySelector('.images-sect').children;
    for (let i = 0; i < changeImg.length; i++) {
      let source = changeImg[i].src;
      let changeSource = source.replace('desktop', 'mobile');
      changeImg[i].src = changeSource;
    }
    for (let k = 0; k < mainContentBothImg.length; k++) {
      source = mainContentBothImg[k].src;
      changeSource = source.replace('desktop', 'mobile');
      mainContentBothImg[k].src = changeSource;
    }
  }
  if (window.innerWidth > 786) {
    changeImg = document.querySelector('.images-sect').children;
    for (let i = 0; i < changeImg.length; i++) {
      source = changeImg[i].src;
      changeSource = source.replace('mobile', 'desktop');
      changeImg[i].src = changeSource;
    }
    let mainContentBothImg = document.querySelectorAll(
      '.main-content-both-img'
    );
    for (let k = 0; k < mainContentBothImg.length; k++) {
      source = mainContentBothImg[k].src;
      changeSource = source.replace('moblie', 'desktop');
      mainContentBothImg[k].src = changeSource;
    }
  }
});
