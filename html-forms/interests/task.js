const interestCheck = Array.from(document.querySelectorAll('.interest__check'));
const ul = Array.from(document.querySelectorAll('ul'));

interestCheck.forEach(index => {
    index.addEventListener('click', () => {
        if (index.closest('.interests_active') == null) {
            let element = index.parentElement;
            let mini = element.nextElementSibling.querySelectorAll('input');
            mini.forEach(miniIndex => {
                if (index.checked) {
                    miniIndex.checked = true;
                } else {
                    miniIndex.checked = false;
                }
            })
        }   
    })
})
