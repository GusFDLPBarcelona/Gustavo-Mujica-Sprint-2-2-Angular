var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

var cart = [];
var total = 0;

function buy(id) {
    let productFind = products.find(product => product.id === id);
    
    if (productFind) {
        let productInCart = cart.find(element => element.id === id)

        if(productInCart) {
            productInCart.quantity ++;
        } else {
            cart.push({ ...productFind, quantity: 1});
        }
    } 

    applyPromotionsCart();
    printCart();
}

function cleanCart() {
    let conf = confirm('Are you sure you want to empty the cart?')
    if (conf){
        cart = []
    }
    
    printCart()
    
}

function calculateTotal() {    
    
    let totalPrice = 0;

    for(let i = 0; i < cart.length; i++) {
        let product = cart[i]
        totalPrice += product.subtotalWithDiscount
    }
    return totalPrice
    
}

function applyPromotionsCart() {

    for(let i = 0; i < cart.length; i++) {
        
        let product = cart[i];
        let productTotalPrice = product.price * product.quantity;

        if (product.offer) {
            if (product.quantity >= product.offer.number) {
                product.subtotalWithDiscount = productTotalPrice - (productTotalPrice * (product.offer.percent / 100));
            } else {
                product.subtotalWithDiscount = productTotalPrice;
            }
        } else {
            product.subtotalWithDiscount = productTotalPrice;
        }
    }
}

function printCart() {
    
    let cartList = document.getElementById('cart_list');
    cartList.innerHTML = '';
    
    let totalPrice = 0;

    cart.forEach(element => {
        let content = document.createElement('tr');
        let subtotal = (element.price * element.quantity).toFixed(2);
        totalPrice += parseFloat(subtotal);
        
        content.innerHTML = `
            <th scope="row">${element.name}</th>
            <td>$${element.price.toFixed(2)}</td>
            <td>${element.quantity}</td>
            <td>$${subtotal}</td>
            <td>$${element.subtotalWithDiscount.toFixed(2)}</td>
            <td>
                <button type="button" onclick="removeFromCart(${element.id})" class="btn btn-outline-danger">Remove</button>
            </td>
        `;
        cartList.appendChild(content);
        applyPromotionsCart();
    
});

    let showTotal = document.getElementById('total_price');
    showTotal.innerHTML = `${totalPrice.toFixed(2)}`;

    let countProduct = document.getElementById('count_product');
    let countProductInCart = cart.reduce((total, product) => total + product.quantity, 0);
    countProduct.innerHTML = countProductInCart;
}

function removeFromCart(id) {
    
    const index = cart.findIndex(item => item.id === id);
    
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        printCart();
        calculateTotal();
    }


}
function open_modal() {
    printCart();
}
