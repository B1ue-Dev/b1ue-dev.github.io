const dark = document.getElementById('dark')
const light = document.getElementById('light')
const catty = document.getElementById('cattyName')

function toggleDark(){
    dark.classList.add('d-none')
    light.classList.remove('d-none')
    document.body.style.backgroundColor = "#212224"
    document.body.style.color = "#fff"
    catty.style.color = "#fff"
}
dark.addEventListener('click', toggleDark)

function toggleLight(){
    light.classList.add('d-none')
    dark.classList.remove('d-none')
    document.body.style.backgroundColor = "#fff"
    document.body.style.color = "#fff"
    catty.style.color = "#fff"
}
light.addEventListener('click', toggleLight)