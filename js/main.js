$(document).ready(function () {
  // 網頁的主程式寫在這裡

  // 綁定 .ad-toggle-btn 的點擊事件
  $(".ad-toggle-btn").click(function () {
    $(".side-box").toggleClass("active");
  });

  // 綁定 #removeSideBoxBtn 的點擊事件
  $("#removeSideBoxBtn").click(function () {
    $(".side-box").removeClass("active");
  });

  // 綁定 .navbar 裡面 .nav-link 的點擊事件
  $(".navbar .nav-link").click(function (e) {
    // 取得滑動目標
    // 取得滑動目標的所在座標

    const target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).stop().offset().top - 50,
      },
      800
    );
  });

  $("#goBackBtn").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  // 取得現在的年份
  const year = new Date().getFullYear();
  // 將年份顯示在 id="yearShow" 的元素內
  $("#yearShow").text(year);

  //navbar變色
  var navAnchor = document.getElementById("navtop");
  var img = document.getElementById("header");
  if (window.pageYOffset != 0) {
    navAnchor.style.backgroundColor = "black";
    navAnchor.style.borderBottom = "none";
    img.style.transition = "all 1s";
    img.style.filter = " blur(5px)";
  } else {
    navAnchor.style = "";
    img.style.filter = "";
  }

  window.addEventListener("scroll", () => {
    if (window.pageYOffset != 0) {
      navAnchor.style.backgroundColor = "black";
      navAnchor.style.borderBottom = "none";
      img.style.transition = "all 1s";
      img.style.filter = " blur(5px)";
    } else {
      navAnchor.style = "";
      img.style.filter = "";
    }
  });

  function showBtnCondition() {
    if ($(this).scrollTop() > 500) {
      $("#goBackBtn").fadeIn();
    } else {
      $("#goBackBtn").fadeOut();
    }
  }

  const RWDupdate = document.querySelector(".RWDupdate");
  const projectIntro = document.querySelectorAll(".project-intro");

  if (window.innerWidth < 768) {
    // 圖片動畫順序更正
    console.log(RWDupdate);
    RWDupdate.children[0].classList.add("bounceInLeft");
    RWDupdate.children[0].classList.remove("bounceInRight");
    RWDupdate.children[1].classList.add("bounceInRight");
    RWDupdate.children[1].classList.remove("bounceInLeft");

    //  圖片延遲修正
    projectIntro.forEach((value) => {
      value.setAttribute("data-wow-delay", "0s");
    });
  }

  new WOW().init();
});
