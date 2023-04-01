const sliderArrows = Array.from(document.getElementsByClassName('slider__arrow'));
const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
let sliderItemActive;
let slidersCount = sliderItems.length;
let nextIndex;

sliderArrows.forEach((elem, index) => {
    elem.addEventListener('click', () => showSlide(index))
})

function showSlide (index) {
    sliderItemActive = sliderItems.findIndex( element => {
        if (element.classList.contains('slider__item_active')) {
            return true;
        }
    })
    if (index === 1) {
        if (sliderItemActive === slidersCount -1) {
            nextIndex = 0;
        } else {
            nextIndex = sliderItemActive + 1;
        }
    } else {
        if (sliderItemActive === 0) {
            nextIndex = slidersCount - 1;
        } else {
            nextIndex = sliderItemActive - 1;
        }
    }
    sliderItems[sliderItemActive].classList.remove('slider__item_active');
    sliderItems[nextIndex].classList.add('slider__item_active');       
}