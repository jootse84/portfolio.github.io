'use strict';

$(function() {
  var typeSkillsText = function () {
    $.getJSON('json/projects.json', function (experience) {
      $(".skills-type").typed({
        strings: [
          "I am a Full Stack Developer ",
          "I code in Javascript and Python ",
          "I've experience with NodeJS and Django",
          "ReactJS, AngularJS, D3 or Django, among others ",
          "Want to know more about me?"
        ],
        loop: false,
        typeSpeed: 0,
        backSpeed: 4,
        startDelay: 3000,
        callback: function () {
          setTimeout(function () {
            $('.typed-cursor').empty()
            $('.skills-type').addClass('hidden');
            $('.hidden-icons').fadeIn(2000);
            React.render(
              React.createElement(PortfolioList, {list: experience}),
              document.getElementById("portfolio-list")
            );
          }, 3000);
        }
      });
    })
    .fail(function(err) {
      console.log(err.responseText);
    });
  };

  $('body').on('click', '.page-scroll a', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
     $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
     $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
     $(this).removeClass("floating-label-form-group-with-focus");
  });
  $('body').scrollspy({
      target: '.navbar-fixed-top'
  });
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

  typeSkillsText();
});
