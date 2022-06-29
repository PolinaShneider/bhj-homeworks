const interestCheck = [...document.querySelectorAll('.interest__check')];

for(let check of interestCheck) {
    check.checked = false;
}

interestCheck.forEach((check) => check.addEventListener('change', checkAllCheckboxes));

function checkAllCheckboxes(event) {
    const parent = event.target.closest('.interest');
    const children = [...parent.querySelectorAll('.interest__check')];

    console.log(event.target.parentElement.textContent.trim());

    for (let child of children) {
        child.checked = this.checked;
    }
}
