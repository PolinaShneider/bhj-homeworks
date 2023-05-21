const cart = document.querySelector('.cart__products');
const productsList = document.querySelectorAll('.product');
const cartTitle = document.querySelector('.cart__title');
const arr = [...productsList].map((item) => item.getAttribute('data-id'));

function getInfoAboutProduct(item) {
    const controlsItem = item.querySelector('.product__controls');
    const countBlock = controlsItem.querySelector('.product__quantity-value');
    const imgItem = item.querySelector('.product__image').src;
    const quantityControls = item.querySelectorAll('.product__quantity-control');
    const dataId = item.getAttribute('data-id');

    quantityControls.forEach(control => {
        control.addEventListener('click', () => {
            if (control.classList.contains('product__quantity-control_dec')) {
                if (countBlock.textContent > 1) {
                    countBlock.textContent = Number(countBlock.textContent) - 1;
                }
            } else {
                countBlock.textContent = Number(countBlock.textContent) + 1;
            }
        });
    });

    const addBtn = controlsItem.querySelector('.product__add');
    addBtn.addEventListener('click', () => {
        const existingCartItem = cart.querySelector(`.cart__product[data-id="${dataId}"]`);

        if (existingCartItem) {
            const existingCount = existingCartItem.querySelector('.cart__product-count');
            const totalCount = Number(existingCount.textContent) + Number(countBlock.textContent);
            existingCount.textContent = totalCount;
        } else {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = dataId;
            cartProduct.innerHTML = `
        <img class="cart__product-image" src="${imgItem}">
        <div class="cart__product-count">${countBlock.textContent}</div>
        <button class="cart__product-remove">Remove</button>
      `;
            cart.appendChild(cartProduct);
        }

        updateCartVisibility();
    });
}

function updateCartVisibility() {
    const cartProducts = cart.querySelectorAll('.cart__product');
    if (cartProducts.length > 0) {
        cart.classList.add('cart_visible');
        cartTitle.style.display = 'block';
    } else {
        cart.classList.remove('cart_visible');
        cartTitle.style.display = 'none';
    }
}

productsList.forEach((product) => {
    getInfoAboutProduct(product);
});

cart.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart__product-remove')) {
        const cartProduct = event.target.closest('.cart__product');
        cartProduct.remove();
        updateCartVisibility();
    }
});

updateCartVisibility();
