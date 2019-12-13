// loader js start
$(window).load(function() {
  $(".loader").fadeOut(2900);
});
// loader js end


// tabs services

$(function(){
  $('.btn-circle').on('click',function(){
    $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
    $(this).addClass('btn-info').removeClass('btn-default').blur();
  });
 
  $('.next-step, .prev-step').on('click', function (e){
    var $activeTab = $('.tab-pane.active');
 
    $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
 
    if ( $(e.target).hasClass('next-step') )
    {
       var nextTab = $activeTab.next('.tab-pane').attr('id');
       $('[href="#'+ nextTab +'"]').addClass('btn-info').removeClass('btn-default');
       $('[href="#'+ nextTab +'"]').tab('show');
    }
    else
    {
       var prevTab = $activeTab.prev('.tab-pane').attr('id');
       $('[href="#'+ prevTab +'"]').addClass('btn-info').removeClass('btn-default');
       $('[href="#'+ prevTab +'"]').tab('show');
    }
  });
 });




 //portfolio js
 $(window).load(function(){
  var $container = $('.portfolioContainer');
  $container.isotope({
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });

  $('.portfolioFilter a').click(function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
       });
       return false;
  }); 
});


// owl carousal
$('.i-blog-container.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

// testimonial slider
$(".i-testimonial .owl-carousel").owlCarousel({
  loop: true,
  margin: 35,
  nav: true,
  center: true,
  autoplay: true,
  navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
  ],
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      750: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
})

// portfolio overlay
  // $(".plusTraingle").click(function(){
   
  // });

  $(".minusTraingle").click(function(){
    $(".plusTraingle").removeClass("dnone");
    $(".i-overlay-div").css('display','none');
  });


  function plus(data){
    var result =  document.getElementById("pludId").value;
    let data1 = Number(result)
    if(data === data1){
      $(".i-overlay-div").slideDown(500);
      $(".plusTraingle").addClass("dnone");
       $(".i-overlay-div").addClass("active-overlay");
    }else{
      console.log("outside condition");
    }
  }

  // menubar

 
  $('.menu-icon').click(function () {
    $(".menu").toggle("slide");
    $(".menu-icon").css('display','none');
    $(".close-icon").css('display','block');
  });

$('.close-icon').click(function () {
    $(".menu").toggle("slide");
    $(".close-icon").css('display','none');
    $(".menu-icon").css('display','block');
});