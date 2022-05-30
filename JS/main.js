window.onscroll = function() {
    if(window.scrollY > 100){
        document.getElementById('navbar').classList.add('header-scroll');
    }else {
        document.getElementById('navbar').classList.remove('header-scroll');
    }
};
