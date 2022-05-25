// 網頁的主程式寫在這裡

// 綁定 .ad-toggle-btn 的點擊事件
$(".ad-toggle-btn").click(function () {
  console.log("[.ad-toggle-btn被點擊了]");
});

// 綁定 #removeSideBoxBtn 的點擊事件
$("#removeSideBoxBtn").click(function () {
  console.log("[#removeSideBoxBtn被點擊了]");
});

// 綁定 .navbar 裡面 .nav-link 的點擊事件
$(".navbar .nav-link").click(function () {
  console.log("[導覽列按鈕被點擊了]", this);
  // 取得滑動目標

  // 取得滑動目標的所在座標
  if (this.hash !== "") {
    let target = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 50,
      },
      800
    );
  }

  // 設定動畫時間

  // 執行滑動動畫
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
