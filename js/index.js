window.addEventListener('load', function(){

    const burgerMenuBtn = document.querySelector('#burger-menu-toggler');
    const menuItems = document.querySelectorAll('.menu-item');
    
    function navMobile(){
        /*agrego o quito la clase al body con el botn*/
        burgerMenuBtn.addEventListener('click', function(){
            document.body.classList.toggle('mobile-menu-active');
        });
    
        
        menuItems.forEach(function(menuItem) {            
            menuItem.addEventListener('click', function(){
                /*saco la clase cuando elijo un elemento del menu*/
                document.body.classList.remove('mobile-menu-active');          

                /*cuando clickeo un item este queda formato activado*/
                let currentItem = document.querySelector('.active');
                    currentItem.classList.remove('active');
                    this.classList.add('active');
            });
        });
  
    };
    navMobile();
});





