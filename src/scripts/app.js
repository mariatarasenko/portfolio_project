
const float = (function(){
    const authoBtn = document.querySelectorAll('.authorisation');
    const flipBox = document.querySelector('.welcome__flip');
    if(!authoBtn){console.log ('element is not here');} 
        else {
            authoBtn.forEach(btn => {
                btn.addEventListener('click',()=>{
                    flipBox.classList.toggle('flip');
            },false);
        });
        };
});
        
        float();
    

const blog = (function(){
    const blogBtn =document.querySelector('.mobile_articles_button');
    const blogMenu =document.querySelector('.mobile_articles');
    if(!blogBtn){console.log ('element is not here');} 
    else {
        blogBtn.addEventListener('click',()=>{
            blogBtn.classList.toggle('opened');
            blogMenu.classList.toggle('opened');
    },false);
};
    });

    blog();


$(document).ready(function() {
// opened burger-menu
$('.hamburger').on('click', (e) => {
    e.preventDefault();
    $('.nav__menu_hidden').toggleClass('open');
    $('.hamburger').css({
        'z-index': 201
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

