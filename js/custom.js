(function ($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
    $(".navbar").toggleClass("dark-mode-bg");
    $(".soft-skills").toggleClass("dark-mode-d");
    $(".carousel-item h4").toggleClass("dark-mode-d");
    $(".carousel-item h6").toggleClass("dark-mode-d");
    $(".carousel-item p").toggleClass("dark-mode-d");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $(".social-links a").tooltip();

  // Carousel
  $(".carousel").carousel({
    interval: 0,
  });

  // EDUCATION TIMELINE SCROLL INTERACTION
  const eduItems = document.querySelectorAll(".edu-item");

  if (eduItems.length) {
    const eduObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            entry.target.classList.remove("inactive");
          }
        });
      },
      {
        threshold: 0.6, // 60% of the item is visible to trigger
      }
    );

    eduItems.forEach((item) => eduObserver.observe(item));
  }

  // EXPERIENCE TIMELINE – SCROLL ACTIVATION ONLY
  const expItems = document.querySelectorAll(".timeline-item");

  if (expItems.length) {
    const expObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.65,
      }
    );

    expItems.forEach((item) => expObserver.observe(item));
  }

  // Projects TAB SWITCHING
  $(".tab-btn").click(function () {
    var tab_id = $(this).data("tab");

    // Toggle active class on buttons
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    // Toggle active class on panels
    $(".tab-panel").removeClass("active");
    $("#" + tab_id).addClass("active");
  });

  // Publications scroll animation
  const pubCards = document.querySelectorAll(".publication-card");

  if (pubCards.length) {
    const pubObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    pubCards.forEach((card) => pubObserver.observe(card));
  }

  // ACHIEVEMENTS scroll animation
  const achievementCards = document.querySelectorAll(".achievement-card");

  if (achievementCards.length) {
    const achObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );

    achievementCards.forEach((card) => achObserver.observe(card));
  }
})(jQuery);
