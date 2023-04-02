const reveal = Array.from(document.querySelectorAll('.reveal'));

function show() {
    reveal.forEach(item => {
        const {top, bottom} = item.getBoundingClientRect();
        if (bottom < 0) {
            item.classList.remove('reveal_active');
        } else if (top > window.innerHeight) {
            item.classList.remove('reveal_active');
        } else {
            item.classList.add('reveal_active');
            console.log('OK');
        }
    })
}

window.addEventListener('scroll', show);