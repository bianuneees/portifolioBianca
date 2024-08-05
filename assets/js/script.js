//faz o menu aparecer \pos o clicar o hamburguer
document.querySelector('.menu-opener')
    addEventListener('click' , ()=>{
        let nav=document.querySelector('header nav');
        nav.classList.toggle('opened');
    });