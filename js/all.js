$(document).ready(function () {
  // 滑動式固定選單
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".dropdowns").addClass("navFixed");
    } else {
      $(".dropdowns").removeClass("navFixed");
    }
  });
  //   skroller begin
  var s = skrollr.init();

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
