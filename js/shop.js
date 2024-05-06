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

// Nivel 1 
// Ejercicio 1
// La función buy(id) busca un producto con un id específico. Si lo encuentra, verifica si ya está en el carrito. Si es así,
// aumenta su cantidad.Si no, lo agrega al carrito con una cantidad de 1.

function buy(id) {

    let productFind = products.find(product => product.id === id);
    
    if (productFind) {
        let productInCart = cart.find(element => element.id === id)

        if(productInCart) {
            productInCart.quantity ++
        } else {
            cart.push({ ...productFind, quantity: 1})
        }
    } 

    applyPromotionsCart()
    printCart()

}


// Ejercicio 2
// La función cleanCart() vacía el carrito. Pregunta al usuario si está seguro de que desea vaciar el carrito.
// Si el usuario confirma, el carrito se vacía.

function cleanCart() {
    let conf = confirm('Are you sure you want to empty the cart?')
    if (conf){
        cart = []
    }
    
    printCart()
    
}

// Ejercicio 3
// La función calculateTotal() suma los subtotales de todos los productos en el carrito para obtener el precio total. 
// Recorre cada producto en el carrito, agrega su subtotal con descuento al precio total y luego devuelve ese total.

function calculateTotal() {    
    
    let totalPrice = 0;

    for(let i = 0; i < cart.length; i++) {
        let product = cart[i]
        totalPrice += product.subtotalWithDiscount
    }
    return totalPrice
    
}

// Ejercicio 4
// La función applyPromotionsCart() aplica promociones a cada producto en el array "cart".
// Recorre cada producto en el carrito y calcula el precio total del producto. Si el producto tiene una oferta,
// verifica si la cantidad de productos es mayor o igual al número de productos requeridos para la oferta. Si es así,
// calcula el precio total del producto con descuento y lo guarda en el campo "subtotalWithDiscount" del producto.
// Si no, guarda el precio total del producto en el campo "subtotalWithDiscount" del producto.

function applyPromotionsCart() {
   
    for(let i = 0; i < cart.length; i++) {
        let product = cart[i]
        let productTotalPrice = product.price * product.quantity
        
        if (product.offer){
            if(product.quantity >= product.offer.number){
                product.subtotalWithDiscount = productTotalPrice - (productTotalPrice * (product.offer.percent / 100))
            } else {
                product.subtotalWithDiscount = productTotalPrice
            }
        } else {
            product.subtotalWithDiscount = productTotalPrice
        }
    }
}

// Ejercicio 5
// la función printCart() llena el modal del carrito de compras manipulando el dom del carrito de compras.
// Recorre cada producto en el carrito y agrega su nombre, precio, cantidad y subtotal con descuento al modal del carrito.
// Luego, calcula el precio total del carrito y lo muestra en el modal del carrito.
// Finalmente, muestra la cantidad de productos en el carrito.

function printCart() {
    
    let cartList = document.getElementById('cart_list')
    
    cartList.innerHTML = ''
    
    cart.forEach(element => {
        let content = document.createElement('tr')
        content.innerHTML = `
        	<th scope="row">${element.name}</th>
			<td>${element.price}</td>
			<td>${element.quantity}</td>
			<td>${element.subtotalWithDiscount}</td>
        `
        cartList.appendChild(content)
    })

    let showTotal = document.getElementById('total_price')
    showTotal.innerHTML = `${calculateTotal()}`

    let countProduct = document.getElementById('count_product')
    
    let countProductInCart = cart.reduce((total, product) => total + product.quantity, 0)

    countProduct.innerHTML = `${countProductInCart}`   
}

// Nivel 2
// Ejercicio 7
// La función removeFromCart(id) elimina un producto del carrito. Busca el producto con el id especificado en el carrito.
// Si lo encuentra, lo elimina del carrito.
// Si la cantidad de productos es mayor a 1, disminuye la cantidad en 1. Si la cantidad es 1, elimina el producto del carrito.
// Si el usuario elimina un producto del carrito, actualiza la cantidad de productos en el carrito.

function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cart_list').textContent = totalProducts;
        printCart();
    }
}
// función para abrir el modal. abre el modal y muestra el contenido del carrito de compras con los precios y descuentos.

function open_modal() {
    printCart();
}
