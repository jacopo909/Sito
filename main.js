const slide = () =>{
    const burger = document.querySelector('.header__span');
    const menu = document.querySelector('.header__menu__lu');

    burger.addEventListener('click',(e) =>{
      menu.classList.toggle('open');
      e.preventDefault();
    });
}
slide();
