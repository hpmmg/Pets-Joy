$(function () {

 

  const Menu = {

    el: {
      ham: $('.burger-menu, .menu a'),
      menuTop: $('.burger-menu-top'),
      menuMiddle: $('.burger-menu-middle'),
      menuBottom: $('.burger-menu-bottom')
    },

    init: function () {
      Menu.bindUIactions();
    },

    bindUIactions: function () {
      Menu.el.ham
        .on(
          'click',
          function (event) {
            Menu.activateMenu(event);
            event.preventDefault();
          }
        );
    },

    activateMenu: function () {
      Menu.el.menuTop.toggleClass('burger-menu-top-click');
      Menu.el.menuMiddle.toggleClass('burger-menu-middle-click');
      Menu.el.menuBottom.toggleClass('burger-menu-bottom-click');
    }
  };

  Menu.init();

  $('.burger-menu, .menu a').on('click', function () {
    $('.burger-menu-global').toggleClass('burger-menu-global--active');
  });  

  $('.burger-menu, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  }); 

  $(".trends__title-btn").on("click", function () {
    $(".trends__product").slideToggle(1000);
  })


  $("#catalog .catalog__title-btn").on("click", function () {
    $(".catalog__items").slideToggle(1000);
  })


  let mixer = mixitup('.trends__product-items');

  
  $(".footer__go-top").on("click", function (event) {
    
    event.preventDefault();
    
    var id = $(this).attr('href'),
      
      top = $(id).offset().top;
    
    $('body,html').animate({ scrollTop: top }, 1500);
  });

 
  





})
