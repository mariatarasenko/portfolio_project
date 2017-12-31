(function(){
    const authoBtn = document.querySelectorAll('.authorisation');
    const flipBox = document.querySelector('.welcome__flip');

    authoBtn.forEach(btn => {
        btn.addEventListener('click',()=>{
            flipBox.classList.toggle('flip');
    },false);
});
})();
