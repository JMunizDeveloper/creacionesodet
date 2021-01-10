window.onload = function () {
    //When the users scrolls th page, execute myFunction
    window.onscroll = function () { myFunction() };

    //Get the navbar
    let navbar = document.getElementById("menu");

    //Get the offset position of the navbar
    let sticky = navbar.offsetTop;

    //Set the sticky class to the navbar when you reach its scroll postition. Remove the sticky class when you leave position

  var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
  });
};

function menutoggle(){
  let menuList = document.getElementById("menu");
  if (menuList.className == "menuOff") 
      {
      menuList.className = "menuOn";
      }
  else 
  {
      menuList.className = "menuOff";
  }}