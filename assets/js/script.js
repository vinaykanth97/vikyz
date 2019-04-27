 $(document).ready(function () {
  $('.Design').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: true,
    autoplaySpeed: 2000,
  });
  $(".top-img").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
	$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 500) {
        $(".scroll-top").fadeIn();
    } else {
        $(".scroll-top").stop().fadeOut();
    }
});
 });
