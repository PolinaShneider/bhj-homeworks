// Получаем все чекбоксы интересов
const interestCheckboxes = document.querySelectorAll('.interest__check');

// Обработчик события для изменения состояния чекбокса
function handleChange(event) {
    const checkbox = event.target;

    // Если изменился чекбокс, обновляем состояние всех дочерних чекбоксов
    updateChildCheckboxes(checkbox);

    // Если изменился чекбокс, обновляем состояние всех родительских чекбоксов
    // updateParentCheckboxes(checkbox);
}

// Рекурсивная функция для обновления состояния дочерних чекбоксов
function updateChildCheckboxes(checkbox) {
    const childCheckboxes = checkbox.closest('.interest').querySelectorAll('.interest__check');

    childCheckboxes.forEach(childCheckbox => {
        if (childCheckbox.checked !== checkbox.checked) {
            childCheckbox.checked = checkbox.checked;
            updateChildCheckboxes(childCheckbox); // Рекурсивно обновляем состояние всех дочерних чекбоксов
        }
    });
}

// Рекурсивная функция для обновления состояния родительских чекбоксов
function updateParentCheckboxes(checkbox) {
    const parentInterest = checkbox.closest('.interest').parentNode.closest('.interest');

    if (!parentInterest) {
        return; // Если достигнут корневой элемент, прекращаем обновление
    }

    const parentCheckbox = parentInterest.querySelector('.interest__check');
    const siblingCheckboxes = [...parentInterest.querySelectorAll('.interest__check')].filter((item) => item != parentCheckbox);
    let checkedCount = 0;
    let indeterminateCount = 0;

    siblingCheckboxes.forEach(siblingCheckbox => {
        if (siblingCheckbox.checked) {
            checkedCount++;
        } else if (siblingCheckbox.indeterminate) {
            indeterminateCount++;
        }
    });

    if (checkedCount === siblingCheckboxes.length && indeterminateCount === 0) {
        parentCheckbox.checked = true;
        parentCheckbox.indeterminate = false;
    } else if (checkedCount === 0 && indeterminateCount === 0) {
        parentCheckbox.checked = false;
        parentCheckbox.indeterminate = false;
    } else {
        parentCheckbox.checked = false;
        parentCheckbox.indeterminate = true;
    }

    updateParentCheckboxes(parentCheckbox); // Рекурсивно обновляем состояние всех родительских чекбоксов
}

// Назначаем обработчик события для каждого чекбокса интересов
interestCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleChange);
});
