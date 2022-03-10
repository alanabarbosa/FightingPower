const btnSubmit = document.querySelector('.btn')
const box1 = document.querySelector('.box_1')
const box2 = document.querySelector('.box_2')
const box3 = document.querySelector('.box_3')
const box4 = document.querySelector('.box_4')

btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    const submit = document.querySelector('.submit');
    const value = submit.value;
    if (value == '') {
        document.querySelector('.container-modal').classList.add('ativo')
    } else if (value <= 5000 || value == 5500) {
        box1.style.display = "block"
        box2.style.display = "none"
        box3.style.display = "none"
        box4.style.display = "none"
    } else if (value <= 6000 || value == 6500) {
        box1.style.display = "none"
        box2.style.display = "block"
        box3.style.display = "none"
        box4.style.display = "none"
    } else if (value <= 7000 || value == 7999) {
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "block"
        box4.style.display = "none"
    } else if (value >= 8000) {
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
        box4.style.display = "block"
    }
})

document.querySelector('.fechar').addEventListener('click', () => {
    document.querySelector('.container-modal').classList.remove('ativo')
})