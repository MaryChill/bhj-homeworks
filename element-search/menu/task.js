const menuLink = Array.from(document.querySelectorAll('a.menu__link'));

menuLink.forEach(item => item.addEventListener('click', function(element) {
      element.preventDefault();
      let menuSub = Array.from(item.parentElement.getElementsByClassName('menu_sub'));
      menuSub.forEach(item => item.classList.toggle('menu_active'));
      }
  ));