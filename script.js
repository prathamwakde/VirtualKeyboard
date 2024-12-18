document.addEventListener("DOMContentLoaded", () => {
    const keypress = new Audio('./keypress.wav');
    const inputField = document.getElementById('inputField');
    const keys = document.querySelectorAll('.key, .space'); // Include space button in keys list
    const deleteKey = document.querySelector('.delete');
    const shiftKey = document.querySelector('.shift');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            keypress.play();
            if (key.classList.contains('space')) {
                inputField.value += ' ';
            } else {
                inputField.value += key.innerText;
            }
        });

        key.addEventListener('mousedown', () => {
            key.style.backgroundColor = '#8e44ad';
        });

        key.addEventListener('mouseup', () => {
            key.style.backgroundColor = ''; 
        });

        key.addEventListener('mouseout', () => {
            key.style.backgroundColor = ''; 
        });
    });

    deleteKey.addEventListener('click', () => {
        inputField.value = inputField.value.slice(0, -1);
    });

    shiftKey.addEventListener('click', () => {
        keys.forEach(key => {
            key.innerText = key.innerText === key.innerText.toUpperCase()
                ? key.innerText.toLowerCase()
                : key.innerText.toUpperCase();
        });
    });
});
