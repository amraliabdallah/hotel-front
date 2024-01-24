(function ($) {
  "use strict";

  var body = $("body");

  if ($(".has-matchHeight", body).length) {
    $(".has-matchHeight", body).matchHeight();
  }
  if ($(".dropdown-toggle", body).length) {
    $(".dropdown-toggle", body).dropdown();
  }
  $(".open-loss-password", body).click(function (ev) {
    ev.preventDefault();
    $("#st-login-form", body).modal("hide");
    $("#st-register-form", body).modal("hide");
    setTimeout(function () {
      $("#st-forgot-form", body).modal("show");
    }, 500);
  });

 // ---------Responsive-navbar-active-animation-----------
 function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
          top: itemPosNewAnimTop.top + "px",
          left: itemPosNewAnimLeft.left + "px",
          height: activeWidthNewAnimHeight + "px",
          width: activeWidthNewAnimWidth + "px",
      });
  });
}
$(document).ready(function () {
  setTimeout(function () {
      test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
      test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
      test();
  });
});

// --------------add active class-on another-page move----------
$(document).ready(function ($) {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path == "") {
      path = "index.html";
  }

  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  // Add active class to target link
  target.parent().addClass("active");
});
/*
  document.querySelector("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";
  });*/
  // Add active class on another page linked
  // ==========================================
  // $(window).on('load',function () {
  //     var current = location.pathname;
  //     console.log(current);
  //     $('#navbarSupportedContent ul li a').each(function(){
  //         var $this = $(this);
  //         // if the current path is like this link, make it active
  //         if($this.attr('href').indexOf(current) !== -1){
  //             $this.parent().addClass('active');
  //             $this.parents('.menu-submenu').addClass('show-dropdown');
  //             $this.parents('.menu-submenu').parent().addClass('active');
  //         }else{
  //             $this.parent().removeClass('active');
  //         }
  //     })
  // });

  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add the 'fade-in' class to elements when they are in the viewport
  function handleScroll() {
    $(".animated").each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass("fade-in");
      }
    });
  }

  // Initial check on page load
  handleScroll();

  // Listen for scroll events and check element visibility
  $(window).on("scroll", function () {
    handleScroll();
  });

  $(".open-login", body).click(function (ev) {
    ev.preventDefault();
    $("#st-register-form", body).modal("hide");
    $("#st-forgot-form", body).modal("hide");
    setTimeout(function () {
      $("#st-login-form", body).modal("show");
    }, 500);
  });

  $(".open-signup", body).click(function (ev) {
    ev.preventDefault();
    $("#st-forgot-form", body).modal("hide");
    $("#st-login-form", body).modal("hide");
    setTimeout(function () {
      $("#st-register-form", body).modal("show");
    }, 500);
  });

  $('[data-toggle="tooltip"]').tooltip();

  $(".toggle-menu").click(function (ev) {
    ev.preventDefault();
    toggleBody($("#st-main-menu"));
    $("#st-main-menu").toggleClass("open");
  });
  $(".back-menu").click(function (ev) {
    ev.preventDefault();
    toggleBody($("#st-main-menu"));
    $("#st-main-menu").toggleClass("open");
  });

  function toggleBody(el) {
    if (el.hasClass("open")) {
      body.css({
        overflow: "",
      });
    } else {
      body.css({
        overflow: "hidden",
      });
    }
  }

  $("#st-main-menu .main-menu .menu-item-has-children .fa").click(function () {
    if (window.matchMedia("(max-width: 991px)").matches) {
      $(this).toggleClass("fa-angle-down fa-angle-up");
      var parent = $(this).parent();
      $(">.menu-dropdown", parent).toggle();
      if (
        $(this).closest(".menu-item-has-children").hasClass("has-mega-menu")
      ) {
        $(">.mega-menu", $(this).parent().parent()).toggle();
      }
    }
  });

  body.click(function (ev) {
    if ($(ev.target).is("#st-main-menu")) {
      toggleBody($(ev.target));
      $("#st-main-menu").toggleClass("open");
    }
  });

  $(window)
    .on("resize", function () {
      if (window.matchMedia("(min-width: 992px)").matches) {
        $(".st-gallery", body).each(function () {
          var parent = $(this);
          var $fotoramaDiv = $(".fotorama", parent).fotorama({
            width: parent.data("width"),
            nav: parent.data("nav"),
            thumbwidth: "100",
            thumbheight: "100",
            allowfullscreen: parent.data("allowfullscreen"),
          });
          parent.data("fotorama", $fotoramaDiv.data("fotorama"));
        });
      } else {
        $(".st-gallery", body).each(function () {
          var parent = $(this);
          if (typeof parent.data("fotorama") !== "undefined") {
            parent.data("fotorama").destroy();
          }
          var $fotoramaDiv = $(".fotorama", parent).fotorama({
            width: parent.data("width"),
            nav: parent.data("nav"),
            thumbwidth: "80",
            thumbheight: "80",
            allowfullscreen: parent.data("allowfullscreen"),
          });
          parent.data("fotorama", $fotoramaDiv.data("fotorama"));
        });
      }
    })
    .resize();

  if ($(".dropdown-toggle", body).length) {
    $(".dropdown-toggle", body).dropdown();
  }

  body.on("click", ".toggle-section", function (ev) {
    ev.preventDefault();
    var t = $(this);
    var target = t.data("target");

    $(".fa", t).toggleClass("fa-angle-up fa-angle-down");
    $('[data-toggle-section="' + target + '"]').slideToggle(200);
  });

  $("[data-show-all]", body).each(function () {
    var t = $(this);
    var height = t.data("height");
    t.css("height", height);
  });

  body.on("click", "[data-show-target]", function (ev) {
    ev.preventDefault();
    var target = $(this).data("show-target");
    $(".fa", this).toggleClass("fa-caret-up fa-caret-down");
    if ($(".fa", this).hasClass("fa-caret-up")) {
      $(".text", this).html($(this).data("text-less"));
    } else {
      $(".text", this).html($(this).data("text-more"));
    }
    if ($('[data-show-all="' + target + '"]', body).hasClass("open")) {
      $('[data-show-all="' + target + '"]', body).css({
        height: $('[data-show-all="' + target + '"]', body).data("height"),
      });
    } else {
      $('[data-show-all="' + target + '"]', body).css({ height: "" });
    }
    $('[data-show-all="' + target + '"]', body).toggleClass("open");
  });

  $(".hotel-target-book-mobile .btn-mpopup", body).click(function (ev) {
    ev.preventDefault();
    $(".fixed-on-mobile", body).toggleClass("open").fadeToggle(300);
  });

  $(".fixed-on-mobile .close-icon", body).click(function (ev) {
    ev.preventDefault();
    $(".fixed-on-mobile", body).toggleClass("open").fadeToggle(300);
  });

  $(".review-list", body).on("click", ".show-more", function (ev) {
    ev.preventDefault();
    var parent = $(this).closest(".comment");
    $(this).css("display", "none");
    $(".review", parent).slideDown(200);
    $(".show-less", parent).css("display", "block");
  });

  $(".review-list", body).on("click", ".show-less", function (ev) {
    ev.preventDefault();
    var parent = $(this).closest(".comment");
    $(this).css("display", "none");
    $(".review", parent).slideUp(200);
    $(".show-more", parent).css("display", "block");
  });

  /* Price range */
  $(".price_range").each(function () {
    var min = $(this).data("min");
    var max = $(this).data("max");
    var step = $(this).data("step");

    var value = $(this).val();

    var from = value.split(";");

    var prefix_symbol = $(this).data("symbol");

    var to = from[1];
    from = from[0];

    $(this).ionRangeSlider({
      min: min,
      max: max,
      type: "double",
      prefix: prefix_symbol,
      prettify: false,
      step: step,
      onFinish: function (data) {
        set_price_range_val(data, $('input[name="price_range"]'));
      },
      from: from,
      to: to,
      force_edges: true,
    });
  });

  function set_price_range_val(data, element) {
    var exchange = 1;
    var from = Math.round(parseInt(data.from) / exchange);
    var to = Math.round(parseInt(data.to) / exchange);
    var text = from + ";" + to;
    element.val(text);
  }

  /*Sidebar toggle*/
  if ($(".sidebar-item").length) {
    $(".sidebar-item").each(function () {
      var t = $(this);
      if (t.hasClass("open")) {
        t.find(".item-content").slideUp();
      }
    });
  }
  $(".sidebar-item .item-title").on("click", function () {
    var t = $(this);
    t.parent().toggleClass("open");
    t.parent().find(".item-content").slideToggle();
  });

  /* Clear radio button */
  $(".btn-clear-review-score").on("click", function () {
    var t = $(this);
    var parent = t.closest("ul");
    parent.find("input").prop("checked", false);
  });

  /* Load more checkbox item */
  if ($(".btn-more-item").length) {
    $(".btn-more-item").each(function () {
      var t = $(this);
      var parent = t.closest(".item-content");
      if (parent.find("ul li").length > 3) {
        t.show();
      }
      t.on("click", function () {
        var countLi = parent.find("ul li.hidden").length;
        var max = 3;
        if (countLi < 3) {
          max = countLi;
        }

        for (var i = 0; i < max; i++) {
          parent.find("ul li.hidden").eq(0).removeClass("hidden");
        }

        var countLi = parent.find("ul li.hidden").length;
        if (countLi <= 0) {
          t.hide();
        }
      });
    });
  }

  $(".form-date-search", body).each(function () {
    var parent = $(this),
      date_wrapper = $(".date-wrapper", parent),
      check_in_input = $(".check-in-input", parent),
      check_out_input = $(".check-out-input", parent),
      check_in_out = $(".check-in-out", parent),
      check_in_render = $(".check-in-render", parent),
      check_out_render = $(".check-out-render", parent);
    var timepicker = parent.data("timepicker");
    if (typeof timepicker == "undefined" || timepicker == "") {
      timepicker = false;
    } else {
      timepicker = true;
    }
    var options = {
      singleDatePicker: false,
      autoApply: true,
      disabledPast: true,
      dateFormat: "DD/MM/YYYY",
      customClass: "",
      widthSingle: 500,
      onlyShowCurrentMonth: true,
      timePicker: timepicker,
    };
    if (typeof locale_daterangepicker == "object") {
      options.locale = locale_daterangepicker;
    }

    check_in_out.daterangepicker(options, function (start, end, label) {
      check_in_input.val(start.format(parent.data("format")));
      check_in_render.html(start.format(parent.data("format")));
      check_out_input.val(end.format(parent.data("format")));
      check_out_render.html(end.format(parent.data("format")));
      check_in_out.trigger("daterangepicker_change", [start, end]);
      if (window.matchMedia("(max-width: 767px)").matches) {
        $("label", parent).hide();
        $(".render", parent).show();
        $(".check-in-wrapper span", parent).show();
      }
    });
    date_wrapper.click(function (e) {
      check_in_out.trigger("click");
    });
  });

  $(".form-extra-field").each(function () {
    var parent = $(this);
    $(".dropdown", parent).click(function (e) {
      var dropdown_menu = $(
        '[aria-labelledby="' + $(this).attr("id") + '"]',
        parent
      );
      $(".form-extra-field")
        .find(".dropdown-menu")
        .not(dropdown_menu)
        .slideUp(50);
      dropdown_menu.slideToggle(50);
      $(".arrow", parent).toggleClass("fa-angle-up fa-angle-down");
      if ($(".ovscroll").length) {
        $(".ovscroll").getNiceScroll().resize();
      }
    });
    $('input[name="adult_number"]', parent).change(function () {
      var adults = parseInt($(this).val());
      var html = adults;
      if (typeof adults == "number") {
        if (adults < 2) {
          html = adults + " " + $(".render .adult", parent).data("text");
        } else {
          html = adults + " " + $(".render .adult", parent).data("text-multi");
        }
      }
      $(".render .adult", parent).html(html);
    });

    $('input[name="adult_number"]', parent).trigger("change");

    $('input[name="child_number"]', parent).change(function () {
      var children = parseInt($(this).val());
      var html = children;
      if (typeof children == "number") {
        if (children < 2) {
          html = children + " " + $(".render .children", parent).data("text");
        } else {
          html =
            children + " " + $(".render .children", parent).data("text-multi");
        }
      }
      $(".render .children", parent).html(html);
    });
    $('input[name="child_number"]', parent).trigger("change");
  });

  body.click(function (ev) {
    if ($(ev.target).closest(".form-extra-field").length == 0) {
      $(".form-extra-field .dropdown-menu").slideUp(50);
      $(".form-extra-field .arrow")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
    }
  });

  $(".form-more-extra", body).each(function () {
    var t = $(this),
      parent = t.closest(".form-more-extra");
    $(".dropdown", parent).click(function (ev) {
      ev.preventDefault();
      $(".extras", parent).slideToggle(200);
      $(".arrow", parent).toggleClass("fa-caret-up fa-caret-down");
    });
  });
  $('a[data-toggle="tab"][href="#map-tab"]').on("click", function (e) {
    e.preventDefault();
    loadMap(".st-map");
  });

  /* nicescroll */
  $(".ovscroll").each(function () {
    $(this).niceScroll();
  });

  $(".map-view-popup .col-left-map").each(function () {
    $(this).niceScroll();
  });

  /*Filter mobile click*/
  $(".toolbar-action-mobile .btn-filter").on("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: "46",
    });
    $(".sidebar-filter").fadeIn();
    $(".top-filter").fadeIn();
    $("html, body").css({ overflow: "hidden" });
  });

  $(".toolbar-action-mobile .btn-sort").on("click", function (e) {
    e.preventDefault();
    $(".sort-menu-mobile").fadeIn();
  });
  $(".toolbar-action-mobile .btn-map").on("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: "46",
    });
    $(".page-half-map .col-right").show();
    $(".full-map .full-map-item").show();
    $("html, body").css({ overflow: "hidden" });
  });

  $(".sidebar-filter .close-filter").on("click", function () {
    $(this)
      .closest(".sidebar-filter")
      .fadeOut(function () {
        $("html, body").css({ overflow: "auto" });
      });
  });

  $(".top-filter .close-filter").on("click", function () {
    $(this)
      .closest(".top-filter")
      .fadeOut(function () {
        $("html, body").css({ overflow: "auto" });
      });
  });

  $(".sort-menu-mobile .close-filter").on("click", function () {
    $(this).closest(".sort-menu-mobile").fadeOut();
  });

  $(".page-half-map .close-half-map").on("click", function () {
    $(this).closest(".col-right").hide();
    $("html, body").css({ overflow: "auto" });
    if ($("#btn-show-map-mobile").length) {
      $("#btn-show-map-mobile").prop("checked", false);
    }
  });

  $(".full-map .close-map").on("click", function () {
    $(this).closest(".full-map").hide();
    $("html, body").css({ overflow: "auto" });
  });

  $(window).resize(function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      if ($(".full-map-item").length) {
        if (!$(".full-map-item").is(":visible")) {
          $(".full-map-item").attr("style", "");
        }
      }

      if ($(".st-hotel-result .sidebar-filter").length) {
        if (!$(".st-hotel-result .sidebar-filter").is(":visible")) {
          $(".st-hotel-result .sidebar-filter").attr("style", "");
        }
      }

      if ($(".st-hotel-result .top-filter").length) {
        if (!$(".st-hotel-result .top-filter").is(":visible")) {
          $(".st-hotel-result .top-filter").attr("style", "");
        }
      }
    }

    if (window.matchMedia("(min-width: 992px)").matches) {
      if ($(".page-half-map .col-right").length) {
        if (
          !$(".page-half-map .col-right").is(":visible") &&
          $("#btn-show-map").is(":checked")
        ) {
          $(".page-half-map .col-right").attr("style", "");
        }
      }
    }

    if (window.matchMedia("(max-width: 991px)").matches) {
      if ($(".page-half-map .col-right").length) {
        if ($(".page-half-map .col-right").is(":visible")) {
          $(".page-half-map .col-right").attr("style", "");
        }
      }

      if ($(".page-half-map .col-left").length) {
        if ($(".page-half-map .col-left").is(":visible")) {
          $(".page-half-map .col-left").getNiceScroll().remove();
        }
      }
    }
  });

  if ($(".payment-form .payment-item").length) {
    $(".payment-form .payment-item")
      .eq(0)
      .find('.st-icheck-item input[type="radio"]')
      .prop("checked", true);
    $(".payment-form .payment-item").eq(0).find(".dropdown-menu").slideDown();
  }
  $(".payment-form .payment-item").each(function (l, i) {
    var parent = $(this);
    $('.st-icheck-item input[type="radio"]', parent).change(function () {
      $(".payment-form .payment-item .dropdown-menu").slideUp();
      if ($(this).is(":checked")) {
        if ($(".dropdown-menu", parent).length) {
          $(".dropdown-menu", parent).slideDown();
        }
      }
    });
  });

  $(".info-section .detail button").on("click", function () {
    var parent = $(this).closest(".detail");
    $(".detail-list", parent).slideToggle();
  });

  $(".shares .social-share").click(function (ev) {
    ev.preventDefault();
    $(".shares .share-wrapper").slideToggle(200);
  });

  /* Mobile location */
  $(".search-form-mobile .dropdown-menu li").click(function () {
    var t = $(this);
    var parent = t.closest(".dropdown");
    $('input[name="location_id"]', parent).val(t.data("value"));
    $('input[name="location_name"]', parent).val(t.find("span").text());
  });

  $(".field-detination .dropdown-menu").each(function () {
    $(this).niceScroll({
      cursorcolor: "#a0a9b2",
    });
  });

  $(document).ready(function () {
    // Tour Package Popup
    if ($(".st-form-package").length) {
      $(".st-form-package").magnificPopup({
        removalDelay: 500,
        closeBtnInside: true,
        callbacks: {
          beforeOpen: function () {
            this.st.mainClass = this.st.el.attr("data-effect");
          },
        },
        midClick: true,
        closeMarkup:
          '<button title="Close (Esc)" type="button" class="mfp-close"></button>',
      });
    }

    if (window.matchMedia("(max-width: 768px)").matches) {
      $(".as").slideDown();
    }
    if (window.matchMedia("(min-width: 991px)").matches) {
      var c = 0;
      var c1 = 0;

      $(window).scroll(function (event) {
        if ($("#btn-show-map").is(":checked") && $(".page-half-map").length) {
          var scroll = $(window).scrollTop();
          var topEl = $(".st-hotel-result").offset().top;
          var colLeft = $(".page-half-map .col-left").height();
          var divResult = $("#modern-search-result").height();
          if (scroll >= topEl) {
            if (divResult >= colLeft) {
              if (c == 0) {
                if ($("body").hasClass("rtl")) {
                  $(".page-half-map")
                    .find(".col-left")
                    .niceScroll({ railalign: "left" });
                } else {
                  $(".page-half-map").find(".col-left").niceScroll();
                }
                c = 1;
                $(".as").slideUp();
              }
            } else {
              $(".page-half-map").find(".col-left").getNiceScroll().remove();
              $(".as").slideDown(50);
            }
          } else {
            $(".as").slideUp();
            if (c == 1) {
              $(".page-half-map")
                .find(".col-left")
                .animate({ scrollTop: 0 })
                .getNiceScroll()
                .remove();
              c = 0;
            }
          }
        }
      });

      $(".page-half-map .col-left").scroll(function (event) {
        var scroll = $(window).scrollTop();
        var topEl = $(".st-hotel-result").offset().top;

        if ($("#btn-show-map").is(":checked")) {
          var t = $(this);
          if (t.scrollTop() <= 0) {
            if (c == 1) {
              $(".page-half-map").find(".col-left").getNiceScroll().remove();
              window.scrollTo({
                top: topEl - 1,
              });
              c = 0;
            }
          } else if (typeof t.getNiceScroll()[0] != "undefined") {
            if (t.getNiceScroll()[0].page.maxh <= t.scrollTop()) {
              $(".page-half-map").find(".col-left").getNiceScroll().remove();
              $(".as").slideDown("slow");
              c = 1;
            }
          }
        }
      });
    }
  });

  if (
    $("#sticky-nav").length &&
    window.matchMedia("(min-width: 991px)").matches
  ) {
    var topElSearch = $("#sticky-nav").offset().top;
    var searchFormHeight = $("#sticky-nav")
      .closest(".search-form-wrapper")
      .outerHeight();

    $(window).resize(function () {
      var topElSearch = $("#sticky-nav").offset().top;
      var searchFormHeight = $("#sticky-nav")
        .closest(".search-form-wrapper")
        .outerHeight();
    });

    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      var top = 0;
      if ($("#wpadminbar").length) {
        top = $("#wpadminbar").height();
      }
      if (scroll > topElSearch - top) {
        $("#sticky-nav")
          .closest(".search-form-wrapper")
          .css({ height: searchFormHeight + "px" });
        $("#sticky-nav").find("form").addClass("container");
        $("#sticky-nav").css({ top: top + "px", "margin-top": "0px" });
        $("#sticky-nav").addClass("sticky");
        $("#sticky-nav .dropdown-menu").getNiceScroll().resize();
        $("#sticky-nav").addClass("small");
      } else {
        $("#sticky-nav")
          .closest(".search-form-wrapper")
          .css({ height: "auto" });
        $("#sticky-nav").find("form").removeClass("container");
        $("#sticky-nav").css({ top: "auto", "margin-top": "50px" });
        $("#sticky-nav").removeClass("sticky");
        $("#sticky-nav .dropdown-menu").getNiceScroll().resize();
        $("#sticky-nav").removeClass("small");
      }
    });
  }

  $(".st-number-wrapper").each(function () {
    var timeOut = 0;
    var t = $(this);
    var input = t.find(".st-input-number");
    var min = input.data("min");
    var max = input.data("max");

    t.find("span").on("click", function () {
      var $button = $(this);
      numberButtonFunc($button);
    });

    t.find("span")
      .on("mousedown touchstart", function () {
        var $button = $(this);
        timeOut = setInterval(function () {
          numberButtonFunc($button);
        }, 150);
      })
      .bind("mouseup mouseleave touchend", function () {
        clearInterval(timeOut);
      });

    function numberButtonFunc($button) {
      var oldValue = $button.parent().find("input").val();
      var container = $button.closest(".form-guest-search");

      var total = 0;
      $('input[type="text"]', container).each(function () {
        total += parseInt($(this).val());
      });
      var newVal = oldValue;
      if ($button.hasClass("next")) {
        if (total < max) {
          if (oldValue < max) {
            newVal = parseFloat(oldValue) + 1;
          } else {
            newVal = max;
          }
        }
      } else {
        if (oldValue > min) {
          newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = min;
        }
      }

      $button.parent().find("input").val(newVal);
      $(
        'input[name="' + $button.parent().find("input").attr("name") + '"]',
        ".search-form"
      ).trigger("change");
      $(
        'input[name="' + $button.parent().find("input").attr("name") + '"]',
        ".form-check-availability-hotel"
      ).trigger("change");
      $(
        'input[name="' + $button.parent().find("input").attr("name") + '"]',
        ".single-room-form"
      ).trigger("change");
      if (window.matchMedia("(max-width: 767px)").matches) {
        $("#dropdown-1 label", $button.closest(".field-guest")).hide();
        $("#dropdown-1 .render", $button.closest(".field-guest")).show();
      }
    }
  });
  $(".btn-close-guest-form").on("click", function () {
    $(".field-guest  .dropdown-menu").slideUp(50);
  });

  $(".st-cut-text").each(function () {
    var t = $(this);
    if (t.text().length > 0) {
      var arr = t.text().trim().split(" ");
      console.log(arr);
    }
  });

  $(".booking-item-review-expand-more").on("click", function () {
    var t = $(this);
    t.closest(".booking-item-review-content")
      .find(".booking-item-review-more")
      .fadeIn();
    t.closest(".booking-item-review-content")
      .find(".booking-item-review-expand-less")
      .show();
    t.hide();
  });

  $(".booking-item-review-expand-less").on("click", function () {
    var t = $(this);
    t.closest(".booking-item-review-content")
      .find(".booking-item-review-more")
      .fadeOut();
    t.closest(".booking-item-review-content")
      .find(".booking-item-review-expand-more")
      .show();
    t.hide();
  });

  /*$(".tm-tab-link").on("click", function(){
    $(this).addClass("active").siblings().removeClass("active");
});*/

  $(document).ready(function () {
    var itemWidthBlogs = ($(".blogs-slider").width() - 20) / 2; // Calculate the item width

    // Set the width and margin for each individual blog item
    $(".projcard:even").css({
      width: itemWidthBlogs + "px",
      "margin-right": "20px",
    });

    $(".blogs-slider").flexslider({
      animation: "slide",
      animationLoop: true, // Allow continuous loop
      itemWidth: itemWidthBlogs, // Set the item width based on calculations
      minItems: 2, // Minimum number of items to display
      maxItems: 2, // Maximum number of items to display
      slideshow: true, // Enable autoplay
      slideshowSpeed: 5000, // Set autoplay speed in milliseconds (e.g., 5000ms = 5 seconds)
      pauseOnHover: true, // Pause autoplay on hover
    });
  });

  
  // opstions owl slider
  var mainSlider = $(".main-slider");
  mainSlider.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
  });

  $(document).ready(function () {
    $(".st-service-slider").each(function () {
      $(this).owlCarousel({
        loop: false,
        items: 4,
        margin: 20,
        responsiveClass: true,
        dots: false,
        responsive: {
          0: {
            items: 2,
            nav: false,
            margin: 15,
          },
          992: {
            items: 3,
            nav: true,
          },
          1200: {
            items: 4,
            nav: true,
          },
        },
      });
    });

    $(".st-service-rental-slider").each(function () {
      $(this).owlCarousel({
        loop: false,
        items: 3,
        margin: 20,
        responsiveClass: true,
        dots: true,
        responsive: {
          0: {
            items: 2,
            nav: false,
            margin: 15,
          },
          992: {
            items: 3,
            nav: true,
          },
        },
      });
    });

    $(".st-testimonial-slider").each(function () {
      $(this).owlCarousel({
        loop: false,
        items: 4,
        margin: 30,
        responsiveClass: true,
        dots: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            margin: 15,
          },
          575: {
            items: 2,
            margin: 15,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 3,
          },
        },
      });
    });

    $(".owl-tour-program").each(function () {
      var parent = $(this).parent();
      var owl = $(this);
      owl.owlCarousel({
        loop: false,
        items: 3,
        margin: 20,
        responsiveClass: true,
        dots: false,
        nav: false,
        responsive: {
          0: {
            items: 1,
            margin: 15,
          },
          992: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
      $(".next", parent).click(function (ev) {
        ev.preventDefault();
        owl.trigger("next.owl.carousel");
      });
      $(".prev", parent).click(function (ev) {
        ev.preventDefault();
        owl.trigger("prev.owl.carousel");
      });
      owl.on("resized.owl.carousel", function () {
        setTimeout(function () {
          if ($(".ovscroll").length) {
            $(".ovscroll").getNiceScroll().resize();
          }
        }, 1000);
      });
    });

    /* BG Slider */
    if ($(".search-form-wrapper.slider").length) {
      var heightSlider = $(".search-form-wrapper.slider").outerHeight();
      $(".st-bg-slider").fotorama({
        height: heightSlider,
      });
    }

    $(window).resize(function () {
      if ($(".search-form-wrapper.slider").length) {
        var heightSlider = $(".search-form-wrapper.slider").outerHeight();
        $(".st-bg-slider").fotorama({
          height: heightSlider,
        });
      }
    });
  });

  var iex = 0;
  $(".st-program-list").each(function () {
    var t = $(this);
    $(".item .header", t).click(function () {
      $(".st-program .expand").text($(".st-program .expand").data("text-more"));
      iex = 0;
      $(".item", t).removeClass("active");
      $(this).parent().toggleClass("active");
    });
  });

  $(".st-program .expand").on("click", function () {
    var t = $(this);
    if (iex == 0) {
      $(".st-program .st-program-list .item").addClass("active");
      t.text(t.data("text-less"));
      iex = 1;
    } else {
      $(".st-program .st-program-list .item").removeClass("active");
      t.text(t.data("text-more"));
      iex = 0;
    }
  });

  $(".st-faq .item").each(function () {
    var t = $(this);
    t.find(".header").click(function () {
      $(".st-faq .item").not(t).removeClass("active");
      t.toggleClass("active");
    });
  });

  $(".st-video-popup").each(function () {
    $(this).magnificPopup({
      type: "iframe",
    });
  });

  $(".st-gallery-popup").click(function (e) {
    e.preventDefault();
    var gallery = $(this).attr("href");

    $(gallery)
      .magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
          enabled: true,
        },
      })
      .magnificPopup("open");
  });

  if ($(".logo").length) {
    var logoWidth = $(".logo").width();
    if ($(".has-mega-menu .mega-menu").length) {
      var stMegaWidth = $(".has-mega-menu .mega-menu .st-mega")
        .first()
        .outerWidth();
      $(".has-mega-menu .mega-menu").css({
        left: logoWidth + 60 + "px",
        width: stMegaWidth + "px",
      });
      $(".has-mega-menu .mega-menu .st-mega").css({
        width: "100%",
      });
      $(window).resize(function () {
        var winDowsWidth = $("#header").width();
        if (winDowsWidth < stMegaWidth + logoWidth + 130) {
          var megaWidth = winDowsWidth - (logoWidth + 130);
          $(".has-mega-menu .mega-menu").css({
            width: megaWidth + "px",
          });
        } else {
          $(".has-mega-menu .mega-menu").css({
            width: stMegaWidth + "px",
          });
        }
        if (window.matchMedia("(min-width: 992px)").matches) {
          $(".has-mega-menu .mega-menu").show();
        } else {
          $(".has-mega-menu .mega-menu").hide();
        }
      });
    }
  }

  /*-------------------------------------
       Responsive Menu js
 -------------------------------------*/
  jQuery(document).ready(function ($) {
    jQuery(".stellarnav").stellarNav({
      theme: "light",
    });
  });

  // Close search hotel from in featured section
  $(".open-close-btn").click(function () {
    if ($(".featured-overlay").hasClass("closed")) {
      //open it
      $(".opener-area").css("left", "-100px");
      setTimeout(function () {
        $(".featured-overlay").css("left", "0").removeClass("closed");
      }, 300);
    } else {
      //close it
      $(".featured-overlay").css("left", "-40%").addClass("closed");
      setTimeout(function () {
        $(".opener-area").css("left", "0px");
      }, 300);
    }
  });

  // Home index slider
  if ($("#top-slider").length > 0) {
    jQuery("#top-slider").flexslider({
      animation: "slide",
    });
  }

  $(document).ready(function () {
    $("#login-button").click(function (event) {
      $(this).toggleClass("active");
      event.preventDefault();
      $("#login-tab").toggleClass("show");
    });

    $(".mobile-filter-btn").click(function () {
      $(".sidebar-filter").fadeIn();
      event.stopPropagation();
    });

    $(".sidebar-filter").on("click", function (event) {
      event.stopPropagation();
    });

    var itemWidthOffers = ($("#offers").width() - 20 * 3) / 4;
    $("#offers").flexslider({
      animation: "slide", // Choose animation type: "slide" or "fade"
      slideshowSpeed: 5000, // Interval between slides in milliseconds
      animationSpeed: 600, // Animation speed in milliseconds
      animationLoop: false,
      itemMargin: 20,
      itemWidth: itemWidthOffers, // Set the width of each slide item
      minItems: 1, // Show at least 3 items
      maxItems: 4, // Show at most 3 items
      controlNav: true, // Hide pagination dots
      directionNav: false, // Show navigation arrows
    });

    // Calculate the item width based on your needs
    var itemWidthHotel = 270; // Replace with your desired width
    // Initialize FlexSlider
    $(".sliderhotelimg").flexslider({
      animation: "slide",
      slideshowSpeed: 5000,
      animationSpeed: 600,
      animationLoop: true,
      itemWidth: itemWidthHotel,
      minItems: 1,
      maxItems: 1,
      controlNav: false,
      directionNav: true,
    });
  });
  const $dropdownToggle = $(".custom-dropdown-toggle");
  const $dropdownOptions = $(".custom-dropdown-options");

  $dropdownToggle.on("click", function() {
    $dropdownOptions.toggleClass("show-options");
  });

  $dropdownOptions.on("click", ".custom-dropdown-option", function(event) {
    const selectedValue = $(this).data("value");
    $dropdownToggle.text(selectedValue);
    $dropdownOptions.removeClass("show-options");
  });

  $(document).on("click", function(event) {
    if (!$dropdownToggle.is(event.target) && !$dropdownOptions.is(event.target) && $dropdownOptions.has(event.target).length === 0) {
      $dropdownOptions.removeClass("show-options");
    }
  });
  
})(jQuery);

