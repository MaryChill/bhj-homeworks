const editor = document.getElementById('editor');
editor.textContent = localStorage.lastname;

editor.addEventListener('input', () => {
    localStorage.lastname = editor.value;
    console.log(localStorage.lastname);
})