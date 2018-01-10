module.exports = function(){
    $(document).ready(function() {
    // opened burger-menu
    $('.hamburger').on('click', (e) => {
        e.preventDefault();
        
        $('.background__left').toggleClass('active');
        $('.backround__right').toggleClass('active');
       
        setTimeout(function(){ 
             $('.nav__menu_hidden').addClass('open');}, 2000); 
    
        //$('.nav__menu_hidden').fadeIn('2000');
        
        $('.hamburger').css({
            'z-index': 201
        });
        
    });
    $(".hamburger").on("click", function() {
        const that = $(this);    
        if (that.hasClass("is-open")) {
          that.removeClass("is-open").addClass("is-closed"); 
          
          setTimeout(function(){ 
            $('.nav__menu_hidden').removeClass('open');}, 2000);          
        }   
         else { 
          that.removeClass("is-closed").addClass("is-open");
          setTimeout(function(){ 
            $('.nav__menu_hidden').addClass('open');}, 1000);          
        }    
      });
   
    });
        
}
    