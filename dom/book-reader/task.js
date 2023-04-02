const book = document.getElementById('book');
const fontSize = Array.from(document.querySelectorAll('.font-size'));

fontSize.forEach(index => {index.addEventListener('click', (element) => {
    element.preventDefault();
    const fontSizeActive = document.querySelector('.font-size_active');
    fontSizeActive.classList.remove('font-size_active');
    index.classList.add('font-size_active');
    let n = fontSize.indexOf(index);
    if (n == 0) {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    } else if (n == 2) {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');   
    } else {
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    }
    
    console.log('OK');
})});
