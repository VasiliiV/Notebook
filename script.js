const input = document.getElementById("mn_inp");
const button = document.getElementById("mn_btn");
const phoneIn = document.getElementById('menu-number')

button.addEventListener('click', () => {
    const number = input.value

    phoneIn.insertAdjacentHTML('beforeend', 
`<div class="addNumber">
    <ul class="menu-number-numb">${number}</ul>
    <ul class="menu-number-del">X</ul>
</div>`)
});

phoneIn.addEventListener('click', (event) => {
    event.target.parentElement.remove() //parentElement это родительский элемент текущего узла
});

