
const flip = require('./modules/flip');
const mainMenu = require('./modules/main_menu');
const initMap = require('./modules/map');
const menuBlog = require('./modules/menu_blog');
const slider = require('./modules/slider');

        
  
   
if (document.getElementsByClassName('authorisation').length > 0)
{ flip(); }

if (document.getElementsByClassName('hamburger').length > 0)
 { mainMenu(); }

if (document.getElementsByClassName('mobile_articles_button').length > 0)
 {menuBlog(); }

 if (document.getElementsByClassName('slider_section').length > 0)
{ slider(); }

initMap();
