$(function () {


  let mixer = mixitup('.trends__product-items');

  
  $(".footer__go-top").on("click", function (event) {
    
    event.preventDefault();
    
    var id = $(this).attr('href'),
      
      top = $(id).offset().top;
    
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  





})
