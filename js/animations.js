$(window).scroll(() => {
    var position = $(window).scrollTop();
    var hero = $('.hero').offset().top;
    var brands = $('.brands').offset().top;
    var services = $('.services').offset().top;
    var notice = $('.notice').offset().top;
    var questions = $('.questions').offset().top;
    var contact = $('.contact').offset().top;
    
    if (position >= hero) {
        $('.brands .container').addClass('animate__animated animate__fadeInUp');          
    }     
    if (position >= services - 450) {
        $('.services .container').addClass('animate__animated animate__fadeInUp');  
    }
    if (position >= notice - 400) {
        $('.notice .container').addClass('animate__animated animate__fadeIn');
    }
    if (position >= questions - 300) {
        $('.questions .container').addClass('animate__animated animate__fadeIn');
    }
    if (position >= contact - 400) {
        $('.contact').addClass('animate__animated animate__fadeIn');       
        $('.footer .container').addClass('animate__animated animate__fadeInUp');   
    }
    // console.log(hero);
});