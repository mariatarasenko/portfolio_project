module.exports = function(){
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
        
}
    