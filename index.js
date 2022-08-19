const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const line = document.getElementById('line');
const error = document.getElementById('error');
const symbol = document.getElementById('symbol')

// CONTENT-FIT INPUT

input1.addEventListener('input', resizeInput);
resizeInput.call(input1);

function resizeInput() {
    this.style.width = 10 + 'px';
    this.style.width = this.scrollWidth + 'px';
}

// INPUT VALIDATION

input1.onblur = inputBlur;
input1.onfocus = inputFocus;
input2.onblur = inputBlur;
input2.onfocus = () => {
    inputFocus()
    if (!input1.value) {
        input1.focus()
    }
}

function inputBlur() {
    if (!input1.value?.length || !input2.value?.length) {
        line.classList.add('errorLine');
        error.innerHTML = 'Can`t be empty';
    } else {
        line.classList.remove('active')
    }
}

function inputFocus() {
    if (line.classList.contains('errorLine')) {
        line.classList.remove('errorLine');
        error.innerHTML = '';
    } else {
        line.classList.add('active')
    }
}