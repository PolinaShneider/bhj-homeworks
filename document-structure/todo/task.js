const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(input.value.trim().length > 0) {
        const task = document.createElement('div');
        task.classList.add('task');

        task.innerHTML =  `
      <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    `;

        tasksList.appendChild(task);

        const removeBtn = task.querySelector('.task__remove');

        removeBtn.addEventListener('click', (e) => {
            e.target.closest('.task').remove()
        });

        input.value = '';
    } else {
        console.log('Поле с задачей должно быть заполнено!')
    }
});
