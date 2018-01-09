
const flip = require('./modules/flip');
const mainMenu = require('./modules/main_menu');
const initMap = require('./modules/map');
const menuBlog = require('./modules/menu_blog');
const slider = require('./modules/slider');
const formBlur = require('./modules/blur');
const preloader = require('./modules/preloader');

if (document.getElementsByClassName('authorisation').length > 0)
{ flip(); }

if (document.getElementsByClassName('hamburger').length > 0)
 { mainMenu(); }

if (document.getElementsByClassName('mobile_articles_button').length > 0)
 {menuBlog(); }

 if (document.getElementsByClassName('slider_section').length > 0)
{ slider(); }

if (document.images.length > 0) {
    preloader();
    
}

// if (document.getElementsByClassName('form_block').length > 0){
//     window.onresize = function () {
//         formBlur();
//     };
// }

initMap();


