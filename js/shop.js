
// Sprint 2.2 - E-commerce
// Nivel 1- Ejercicio 1
// Crear el array de productos y la función para agregar esos productos al carrito.

var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',       
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

let cart = [];
let total = 0;

function buy(product, quantity = 1) {
    if (cart.includes(product)) {
        cart.forEach(item => {
            if (item.product === product) {
                    item.quantity += quantity;
            }
        });
        console.log(`¡Se añadieron ${quantity} ${product}(s) más al carrito!`);
    } else {
            cart.push({ product: product, quantity: quantity });
        console.log(`¡Se añadieron ${quantity} ${product}(s) al carrito!`);
    }
}

// Nivel 1 - Ejercicio 2
// Función para vaciar el carrito

function emptyCart() {
    cart = []; 
    console.log("¡El carrito está vacío!");
}
// Nivel 1 - Ejercicio 3
// Función para calcular el importe de la compra

function calculateTotal() {
    let total = 0;

    for(let i= 0 ; i < cart.length; i ++) {
        const producte = cart[i] ; 
        total += producte.price * producte.cantidad;
    }
    return total;
}

