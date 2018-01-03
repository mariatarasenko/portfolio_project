(function(){
    const authoBtn = document.querySelectorAll('.authorisation');
    const flipBox = document.querySelector('.welcome__flip');

    authoBtn.forEach(btn => {
        btn.addEventListener('click',()=>{
            flipBox.classList.toggle('flip');
    },false);
});
})();

(function(){
    const blogBtn =document.querySelector('.mobile_articles_button');
    const blogMenu =document.querySelector('..mobile_articles');

    blogBtn.addEventListener('click',()=>{
        blogBtn.classList.toggle('active');
        blogMenu.classList.toggle('active');
        
    });
    
})();

$(document).ready(function() {
// opened burger-menu
$('.hamburger').on('click', (e) => {
    e.preventDefault();
    $('.nav__menu_hidden').toggleClass('open');
    $('.hamburger').css({
        'z-index': 101
    });
    
});
$(".hamburger").on("click", function() {
    const that = $(this);    
    if (that.hasClass("is-open")) {
      that.removeClass("is-open").addClass("is-closed");      
    } else {
      that.removeClass("is-closed").addClass("is-open");      
    }    
  });
})();