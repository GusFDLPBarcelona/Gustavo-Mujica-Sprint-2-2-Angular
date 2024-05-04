// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
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

//Sprint 2.2 - E-commerce
// Nivel 1- Ejercicio 1
// Crear el array de productos y la función para agregar esos productos al carrito.

let cart = [];      
let count = 0;      

//Función para agregar productos al carrito que comprueba si el producto ya está en el carrito. Añade o suma 1 a la cantidad de productos.

function buy(id) {
    
    var product = products.find(product => product.id === id);    
    if (product) {        
        var cartItem = cart.find(item => item.id === id);        
        if (cartItem) {  
            cartItem.quantity++;  
            console.log(`Se añadió 1 ${product.name} más al carrito. Total: ${cartItem.quantity}`);
        } else {  
            
            cart.push({...product, quantity: 1});
            console.log(`Producto ${product.name} añadido al carrito.`);
        }        
        count++;
        document.getElementById('cart').innerHTML = count;
    } else {
        console.log('Producto no encontrado.');
    }
}

// Buscar el producto por su ID
// Buscar el producto en el carrito
// Si el producto ya está en el carrito incrementar la cantidad en 1
// Si el producto no está en el carrito agregar el producto al carrito con una cantidad inicial de 1
// Actualizar el contador en el HTML


// Nivel 1- Ejercicio 2
// Función para vaciar el carrito de la compra y devolver un mensaje de confirmación.

function cleanCart() {    
    var confirmacion = confirm('¿Estás seguro de que deseas vaciar el carrito de compras?');    
    if (confirmacion) {  
        cart = [];  
        count = 0;  
        document.getElementById('cart').innerHTML = count;  
        console.log('Carrito de compras vaciado.');
    } else {
        console.log('Operación de vaciado cancelada.');
    }
}

// Mostrar una ventana de confirmación al usuario
// Si el usuario confirma
// Vaciar el array del carrito
// Reiniciar el contador de productos en el carrito
// Actualizar el contador en la interfaz de usuario


// Nivel 1- Ejercicio 3
// Función para calcular el total de la compra a partir del carrito.

function calculateTotal() {
    var total = 0;    
    cart.forEach(item => {        
        total += item.price * item.quantity;
    });
    
    return total;  
}

// Inicializar el total a 0
// Recorrer todos los productos en el carrito
// Multiplicar el precio del producto por su cantidad y sumarlo al total
// Devolver el total calculado


// Nivel 1- Ejercicio 4
// Función para aplicar los descuentos de las promociones.

function applyPromotionsCart(cart) {
    cart.forEach(product => {
        let productTotalPrice = product.price * product.quantity;        
        if (product.type === 'grocery' && product.quantity >= 3) {
            let discountAmount = productTotalPrice * (20 / 100);
            product.subtotalWithDiscount = productTotalPrice - discountAmount;
        }         
        else if (product.name === 'Instant cupcake mixture' && product.quantity >= 10) {
            let discountAmount = productTotalPrice * (30 / 100);
            product.subtotalWithDiscount = productTotalPrice - discountAmount;        }        
        else {
            product.subtotalWithDiscount = productTotalPrice;
        }
    });
}

// Promoción 1: Si el usuario compra 3 o más botellas de aceite, el precio del producto se rebaja un 20%.
// Promoción 2: Cuando se compran 10 o más productos para hacer tartas, el precio del producto se rebaja un 30%.
// No se aplica ninguna promoción.



