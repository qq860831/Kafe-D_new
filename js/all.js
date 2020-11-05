$(document).ready(function () {
  // 滑動式固定選單
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $(".dropdowns").addClass("navFixed");
    } else {
      $(".dropdowns").removeClass("navFixed");
    }
  });

  // goTop
  //   $(".fa-chevron-circle-up").click(function (e) {
  //     e.preventDefault();
  //     $("html,body").animate(
  //       {
  //         scrollTop: 0,
  //       },
  //       700
  //     );
  //   });

  //   $("#goTop").click(function () {
  //     $("html,body").animate({ scrollTop: 0 }, "700");
  //     return false;
  //   });
});
