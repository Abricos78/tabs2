let tabsBtns = document.querySelectorAll('.tab'),
    content = document.querySelectorAll('.content')

for (let i = 0; i < tabsBtns.length; i++) {
    tabsBtns[i].addEventListener('click', () => {
        for (let j = 0; j < tabsBtns.length; j++) {
            tabsBtns[j].classList.remove('active')
            content[j].style.display = 'none'
        }
        tabsBtns[i].classList.add('active')
        content[i].style.display = 'block'
    }) 
}

