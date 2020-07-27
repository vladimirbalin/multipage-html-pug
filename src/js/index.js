import "../scss/index.scss";
$(document).ready(function () {
  $("#year").text(new Date().getFullYear());
  // slider config
  $(".carousel").carousel({
    interval: 6000,
    pause: "hover",
  });

  $(function () {
    // Auto play modal video
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

  $("button[type=submit]").on("click", (event) => {
    event.preventDefault();
  });

  const pathArr = window.location.pathname.split("/");
  $(`a[data-path='${pathArr[pathArr.length - 1]}']`)
    .parent()
    .addClass("active");

  //slick

  $(".slider").slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
  });
});
