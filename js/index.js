window.addEventListener('load', function(){

    const burgerMenuBtn = document.querySelector('#burger-menu-toggler');
    const menuItems = document.querySelectorAll('.menu-item');
    
    function navMobile(){
        /*agrego o quito la clase al body con el botn*/
        burgerMenuBtn.addEventListener('click', function(){
            document.body.classList.toggle('mobile-menu-active');
        });
    
        /*saco la clase cuando elijo un elemento del menu*/
        menuItems.forEach(function(menuItem) {
            document.body.classList.remove('mobile-menu-active')
        });
    
        /*agrego la clase active para dar estilo a los items del menu clickeados*/
    
    }
    
    navMobile();
});


