const taskInput = document.getElementById('task__input');
const tasksForm = document.getElementById('tasks__form');
const tasksList = document.getElementById('tasks__list');

tasksForm.addEventListener('submit', () => {
    let todo = taskInput.value.trim();
    if (todo) {
        tasksList.insertAdjacentHTML('beforeend', `
        <div class="task">
            <div class="task__title">
                 ${todo}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `)
        let taskRemove = Array.from(document.querySelectorAll('.task__remove'));
        taskRemove.forEach(index => index.addEventListener('click', () => {
            index.parentElement.remove();
        }))
    }
    taskInput.value = '';
})