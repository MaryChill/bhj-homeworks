const productControl = Array.from(document.querySelectorAll('.product__quantity-control'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');

productControl.forEach(index => index.addEventListener('click', () => {
    if (index.classList.contains('product__quantity-control_dec')) {
        if (index.nextElementSibling.textContent > 1) {
            index.nextElementSibling.textContent--;  
        }
    } else if (index.classList.contains('product__quantity-control_inc')) {
        index.previousElementSibling.textContent++;
    }
}))

productAdd.forEach(index => index.addEventListener('click', (id, img, sum) => {
    sum = index.previousElementSibling.firstElementChild.nextElementSibling.textContent;
    img = index.closest('.product__controls').previousElementSibling.getAttribute('src');
    id = index.closest('.product').getAttribute('data-id');
    sum = Number(sum);

    let productsChildren = Array.from(cartProducts.children);
    const productInCard = productsChildren.find((elem) => {
        let idProduct = elem.getAttribute('data-id');
        if (idProduct == id) {
            return true;
        }

    });
        if (productInCard) {
            let count = productInCard.lastElementChild.textContent;
            count = Number(count);
            let quantity = count + sum;
            productInCard.lastElementChild.textContent = quantity;
        } else {
            cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${sum}</div>
            </div>
            `);
        }
}))