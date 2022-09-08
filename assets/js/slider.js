const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const sliderItem = document.querySelectorAll('.slider-item');
const sliderImages = document.querySelectorAll('.slider-image');
const sliderMob = document.querySelectorAll('.slider-image-mob');
const sliderControls = document.querySelectorAll('.control-toggle');
const adaptiveSliderPrev = document.querySelector('.arrow-control-prev');
const adaptiveSliderNext = document.querySelector('.arrow-control-next');
const sliderList = document.querySelector('.slider-list');
let width;
let count = 0;

function slideShow(element, parameter) {
    element.addEventListener('click', () => {
        sliderItem.forEach(item => item.style.transform = 'translateX(' + parameter + 'px)');
        
        if(parameter === 860 || parameter === 420) {
            sliderControls[0].classList.add('control-toggle-active');
            sliderControls[1].classList.remove('control-toggle-active');
            sliderControls[2].classList.remove('control-toggle-active');
        } else if(parameter === 0) {
            sliderControls[0].classList.remove('control-toggle-active');
            sliderControls[1].classList.add('control-toggle-active');
            sliderControls[2].classList.remove('control-toggle-active');
        } else {
            sliderControls[0].classList.remove('control-toggle-active');
            sliderControls[1].classList.remove('control-toggle-active');
            sliderControls[2].classList.add('control-toggle-active');
        }
    });
}

function sliderButtons(element, parameter) {
    element.addEventListener('click', () => {
        sliderItem.forEach(item => item.style.transform = 'translateX(' + parameter + 'px)');
        sliderControls[0].classList.toggle('control-toggle-active');
        sliderControls[2].classList.toggle('control-toggle-active');
    })
}

function adaptiveSlideShowNext() {
    adaptiveSliderNext.addEventListener('click', () => {
        ++count;
        if(count > sliderItem.length - 3) {
            count = 0;
        }
        width = sliderList.offsetWidth;
        sliderItem.forEach(item => item.style.transform = 'translateX(-' + count * width + 'px)');
        if(count === 0) {
            sliderControls[0].classList.add('control-toggle-active');
            sliderControls[1].classList.remove('control-toggle-active');
            sliderControls[2].classList.remove('control-toggle-active');
        } else if(count === 1) {
            sliderControls[0].classList.remove('control-toggle-active');
            sliderControls[1].classList.add('control-toggle-active');
            sliderControls[2].classList.remove('control-toggle-active');
        } else {
            sliderControls[0].classList.remove('control-toggle-active');
            sliderControls[1].classList.remove('control-toggle-active');
            sliderControls[2].classList.add('control-toggle-active');
        }
    })
}

function adaptiveSlideShowPrev() {
    adaptiveSliderPrev.addEventListener('click', () => {
        --count;
        if(count < 0) {
            count = sliderItem.length - 3;
        }
        width = sliderList.offsetWidth;
        sliderItem.forEach(item => item.style.transform = 'translateX(-' + count * width + 'px)');
        if(count === 0) {
            sliderControls[0].classList.add('control-toggle-active');
            sliderControls[1].classList.remove('control-toggle-active');
            sliderControls[2].classList.remove('control-toggle-active');
        } else if(count === 1) {
            sliderControls[0].classList.remove('control-toggle-active');
            sliderControls[1].classList.add('control-toggle-active');
            sliderControls[2].classList.remove('control-toggle-active');
        } else {
            sliderControls[0].classList.remove('control-toggle-active');
            sliderControls[1].classList.remove('control-toggle-active');
            sliderControls[2].classList.add('control-toggle-active');
        }
    })
}

function adaptive() {
    let mainWidth = document.documentElement.clientWidth;
    if(mainWidth > 1200) {
        sliderItem.forEach(item => item.style.transform = 'translateX(0px)');
        sliderControls[0].classList.remove('control-toggle-active');
        sliderControls[1].classList.add('control-toggle-active');
        sliderControls[2].classList.remove('control-toggle-active');
        sliderButtons(sliderNext, -860);
        sliderButtons(sliderPrev, 860);
        slideShow(sliderControls[0], 860);
        slideShow(sliderControls[1], 0);
        slideShow(sliderControls[2], -860);
    }  else if(mainWidth > 768){
        sliderItem.forEach(item => item.style.transform = 'translateX(0px)');
        sliderControls[0].classList.remove('control-toggle-active');
        sliderControls[1].classList.add('control-toggle-active');
        sliderControls[2].classList.remove('control-toggle-active');
        sliderButtons(sliderNext, -420);
        sliderButtons(sliderPrev, 420);
        slideShow(sliderControls[0], 420);
        slideShow(sliderControls[1], 0);
        slideShow(sliderControls[2], -420);
    } else if(mainWidth > 390) {
        sliderItem.forEach(item => item.style.transform = 'translateX(0px)');
        sliderControls[0].classList.add('control-toggle-active');
        sliderControls[1].classList.remove('control-toggle-active');
        sliderControls[2].classList.remove('control-toggle-active');
    } else if(mainWidth === 390) {
        sliderItem.forEach(item => item.style.transform = 'translateX(0px)');
        sliderControls[0].classList.add('control-toggle-active');
        sliderControls[1].classList.remove('control-toggle-active');
        sliderControls[2].classList.remove('control-toggle-active');
    } else if(mainWidth >= 375) {
        sliderItem.forEach(item => item.style.transform = 'translateX(0px)');
        sliderControls[0].classList.add('control-toggle-active');
        sliderControls[1].classList.remove('control-toggle-active');
        sliderControls[2].classList.remove('control-toggle-active');
    } else {
        sliderItem.forEach(item => item.style.transform = 'translateX(0px)');
        sliderControls[0].classList.add('control-toggle-active');
        sliderControls[1].classList.remove('control-toggle-active');
        sliderControls[2].classList.remove('control-toggle-active');
    }
}

window.addEventListener('resize', adaptive);

slideShow(sliderImages[0], 860);
slideShow(sliderImages[1], 0);
slideShow(sliderImages[2], -860);

slideShow(sliderMob[0], 420);
slideShow(sliderMob[1], 0);
slideShow(sliderMob[2], -420);

adaptiveSlideShowNext()
adaptiveSlideShowPrev()

adaptive();