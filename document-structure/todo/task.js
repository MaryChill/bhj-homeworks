const taskInput = document.getElementById('task__input');
const tasksForm = document.getElementById('tasks__form');
const tasksList = document.getElementById('tasks__list');

tasksForm.addEventListener('submit', (elem) => {
    elem.preventDefault();
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
        let child = tasksList.lastElementChild;
        let taskRemove = child.lastElementChild;
        taskRemove.addEventListener('click', () => child.remove());
    }
    taskInput.value = '';
})