// // 获取所有具有类名"page-link"的链接元素
// var links = document.querySelectorAll(".page-link");
// // 为每个链接添加单击事件处理程序
// links.forEach(function (link) {
//   link.addEventListener("click", function (event) {
//     // 阻止默认链接操作
//     event.preventDefault();
//     // 获取要跳转的部分的ID
//     var targetId = link.getAttribute("href");
//     // 使用scrollIntoView()将页面滚动到该部分
//     document.querySelector(targetId).scrollIntoView({
//       behavior: "smooth"
//     });
//   });
// });


$(document).ready(function () {
  $(".pt-link").click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 800);
    return false;
  });
});