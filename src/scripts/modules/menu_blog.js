module.exports = function(){
    const blog = (function(){
        const blogBtn =document.querySelector('.mobile_articles_button');
        const blogMenu =document.querySelector('.mobile_articles');
         
        
            blogBtn.addEventListener('click',()=>{
                blogBtn.classList.toggle('opened');
                blogMenu.classList.toggle('opened');
        },false);
    
        });

        blog();
    }