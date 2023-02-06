$(document).ready(function () {
  //navbar變色
  var navAnchor = document.getElementById('navtop');
  var img = document.getElementById('header');
  if (window.pageYOffset != 0) {
    navAnchor.style.backgroundColor = 'black';
    navAnchor.style.borderBottom = 'none';
    img.style.transition = 'all 1s';
    img.style.filter = ' blur(5px)';
  } else {
    navAnchor.style = '';
    img.style.filter = '';
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset != 0) {
      navAnchor.style.backgroundColor = 'black';
      navAnchor.style.borderBottom = 'none';
      img.style.transition = 'all 1s';
      img.style.filter = ' blur(5px)';
    } else {
      navAnchor.style = '';
      img.style.filter = '';
    }
  });

  function showBtnCondition() {
    if ($(this).scrollTop() > 500) {
      $('#goBackBtn').fadeIn();
    } else {
      $('#goBackBtn').fadeOut();
    }
  }

  const RWDupdate = document.querySelector('.RWDupdate');
  const projectIntro = document.querySelectorAll('.project-intro');

  if (window.innerWidth < 768) {
    // 圖片動畫順序更正
    console.log(RWDupdate);
    RWDupdate.children[0].classList.add('bounceInLeft');
    RWDupdate.children[0].classList.remove('bounceInRight');
    RWDupdate.children[1].classList.add('bounceInRight');
    RWDupdate.children[1].classList.remove('bounceInLeft');

    //  圖片延遲修正
    projectIntro.forEach((value) => {
      value.setAttribute('data-wow-delay', '0s');
    });
  }

  new WOW().init();
});
