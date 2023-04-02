const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
const rotator = rotatorCase[0].parentElement;

function show() {
    const rotatorCaseActive = document.querySelector('.rotator__case_active');
    let next;
    if (rotatorCaseActive == rotator.lastElementChild) {
       next =  rotatorCase[0];
    } else {
        next = rotatorCaseActive.nextElementSibling;
    }
    rotatorCaseActive.classList.remove('rotator__case_active');
    next.classList.add('rotator__case_active');
}

setInterval(show, 1000);