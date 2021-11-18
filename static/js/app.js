//NAV BURGER TOGGLE
var navOnOff = 0;
function navToggle(x) {
    x.classList.toggle("change");
    if (navOnOff == 1) {
        navOnOff = 0;
        document.querySelector('.nav-ul').style.opacity = '0';
        document.querySelector('.main-container').style.opacity = '1';
        document.querySelector('.nav-ul').style.pointerEvents = 'none';
        document.querySelector('.main-container').style.pointerEvents = 'auto';
    } else if (navOnOff == 0) {
        navOnOff = 1;
        document.querySelector('.nav-ul').style.opacity = '1';
        document.querySelector('.main-container').style.opacity = '0';
        document.querySelector('.nav-ul').style.pointerEvents = 'auto';
        document.querySelector('.main-container').style.pointerEvents = 'none';
    };   
};

// window.addEventListener('scroll', function(e) {
//     var limit = 300;
//     var scroll = window.pageYOffset || document.documentElement.scrollTop ||
//                   document.body.scrollTop || 0;
//     console.log(scroll);
//     if (scroll <= limit) {
//         document.querySelector('#cover').style.opacity = (0 + scroll/limit);
//     }
//   });