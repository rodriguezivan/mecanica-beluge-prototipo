document.getElementById('link-main').addEventListener('click', () => {
    $('.hero').animatescroll({scrollSpeed: 2000, padding: 0});
});

document.getElementById('link-hero').addEventListener('click', () => {
    $('.hero').animatescroll({scrollSpeed: 2000, padding: 0});
});

document.getElementById('link-services').addEventListener('click', () => {
    $('.services').animatescroll({scrollSpeed: 2000, padding: 70});
});

document.getElementById('link-questions').addEventListener('click', () => {
    $('.questions').animatescroll({scrollSpeed: 2000, padding: 70});
});

document.getElementById('link-contact').addEventListener('click', () => {
    $('.contact').animatescroll({scrollSpeed: 2000, padding: 70});
});

document.getElementById('link-arrow').addEventListener('click', () => {
    $('.services').animatescroll({scrollSpeed: 2000, padding: 70});
});

function showButtonFixed() {
    document.querySelector('.button-fixed').setAttribute('style', 'visibility: visible;');
}

setTimeout(showButtonFixed, 10000);

document.getElementById('button-chat').addEventListener('click', () => {
    window.open('https://wa.me/542664307958?text=Consulta%20de mecanicabeluge.com:%20', '_blank');
});

document.getElementById('button-telephone').addEventListener('click', (event) => {
    event.preventDefault();
});

document.querySelector('.button-more').addEventListener('click', (event) => {               
    var items = document.getElementsByClassName('service-mobile');

    for (element of items) {                 
        element.style. display = 'block';                        
    }
    event.target.style.display = 'none';    
});

