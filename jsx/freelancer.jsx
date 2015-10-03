/*!
* Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
* Code licensed under the Apache License v2.0.
* For details, see http://www.apache.org/licenses/LICENSE-2.0.
*/

var experience = [{
    img: "img/portfolio/tutk.png"
  },{
    img: "img/portfolio/toro.png"
  },{
    img: "img/portfolio/netquest.png"
  },{
    img: "img/portfolio/aiesec.png"
  },{
    img: "img/portfolio/voxweb.png"
}];

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
   $('body').on('click', '.page-scroll a', function(event) {
       var $anchor = $(this);
       $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
       }, 1500, 'easeInOutExpo');
       event.preventDefault();
   });
   // $(".name").lettering();
   var typeSkillsText = function () {
       $(".skills-type").typed({
           strings: [
             /*"I am a Full Stack Developer ",
             "I code in Javascript ",
             "Python ",
             "HTML or CSS ",
             "I have experience with NodeJS and Express ",
             "AngularJS and React",
             "D3 or Django among others ",*/
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
                 <PortfolioList list={experience} />,
                 document.getElementById("portfolio-list")
               );
             }, 3000);
           }
       });
   };
   typeSkillsText();

});

// Floating label headings for the contact form
$(function() {
   $("body").on("input propertychange", ".floating-label-form-group", function(e) {
       $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
   }).on("focus", ".floating-label-form-group", function() {
       $(this).addClass("floating-label-form-group-with-focus");
   }).on("blur", ".floating-label-form-group", function() {
       $(this).removeClass("floating-label-form-group-with-focus");
   });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
   target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
   $('.navbar-toggle:visible').click();
});
