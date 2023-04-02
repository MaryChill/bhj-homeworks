const menuLink = Array.from(document.querySelectorAll('a.menu__link'));

menuLink.forEach(item => item.addEventListener('click', function(element) {
    let menuSub = Array.from(item.parentElement.getElementsByClassName('menu_sub'));
        if ((item.parentElement.getElementsByClassName('menu_sub')).length == 1) {
            element.preventDefault();
            menuSub.forEach(item => item.classList.toggle('menu_active'));
        }
      }
  ));