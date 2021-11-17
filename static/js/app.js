//NAV BURGER TOGGLE
var navOnOff = 0;
function navToggle(x) {
    x.classList.toggle("change");
    if (navOnOff == 1) {
        navOnOff = 0;
        document.querySelector('.nav-ul').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.nav-ul').style.display = 'none';
            document.querySelector('.nav-large').style.width = '00px';
            document.querySelector('.nav-large').style.height = '800px';
        }, 200);
    } else if (navOnOff == 0) {
        navOnOff = 1;
        document.querySelector('.nav-large').style.width = '1200px';
        document.querySelector('.nav-large').style.height = '1200px';
        document.querySelector('.nav-ul').style.display = 'flex';
        setTimeout(function() {
            document.querySelector('.nav-ul').style.opacity = '1';
        }, 200);
    }
    
}