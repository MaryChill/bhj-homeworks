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

    let elementReplay = check(id);
        if (elementReplay != undefined) {
            let count = elementReplay.lastElementChild.textContent;
            count = Number(count);
            let quantity = count + sum;
            elementReplay.lastElementChild.textContent = quantity;
        } else {  
            cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${sum}</div>
            </div>
            `);
        } 
}))

function check (value) {
    let replay;
    let productsChildren = Array.from(cartProducts.children);
    let idChildren = [];
    productsChildren.forEach(elem => idChildren.push(elem.getAttribute('data-id')))
    idChildren.forEach(index => {
        if (index == value) {
            productsChildren.forEach(index => {
                    if (index.getAttribute('data-id') == value) {
                        replay = index;
                    }
                })
        }
        
    })
    return replay;
}