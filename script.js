const input = document.getElementById("mn_inp");
const button = document.getElementById("mn_btn");
const phoneIn = document.getElementById('menu-number')

button.addEventListener('click', () => {
    const number = input.value;

    phoneIn.insertAdjacentHTML('beforeend', 
`<div class="addNumber">
    <ul class="menu-number-numb">${number}</ul>
    <ul class="menu-number-del">X</ul>
</div>`)
});

phoneIn.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu-number-del')) {
        event.target.parentElement.remove() 
    } else if (event.target.classList.contains('addNumber') === false) {
        return
    }
    //parentElement это родительский элемент текущего узла
});
