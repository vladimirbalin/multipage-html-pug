import "../scss/index.scss";

$(document).ready(function () {
  // navbar active class
  const pathArr = window.location.pathname.split("/");
  pathArr[pathArr.length - 1]
    ? $(`a[data-path='${pathArr[pathArr.length - 1]}']`)
        .parent()
        .addClass("active")
    : $(`a[data-path='index.html']`).parent().addClass("active");

  // footer-year
  $("#year").text(new Date().getFullYear());

  $("button[type=submit]").on("click", (event) => {
    event.preventDefault();
  });

  // index-page
  // slider
  $(".carousel").carousel({
    interval: 6000,
    pause: "hover",
  });

  $(function () {
    // modal video
    $(".video").click(function (event) {
      event.preventDefault();
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto =
          videoSRC +
          "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + " iframe").attr("src", videoSRCauto);
      $(theModal + " button.close").click(function () {
        $(theModal + " iframe").attr("src", videoSRC);
      });
    });
  });

  // lightbox gallery
  $(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // about-page
  if (window.location.pathname === "/about-page.html") {
    $(".slider").slick({
      infinite: true,
      slideToShow: 1,
      slideToScroll: 1,
    });
  }
});
