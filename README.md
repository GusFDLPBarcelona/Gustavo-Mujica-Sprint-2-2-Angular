# Gustavo-Mujica-Sprint-2-2-Angular
Funciones para E-commerce

En los ejercicios que componen este Sprint profundizamos en los conocimientos adquiridos de JavaScript, comenzamos a integrar todos los Sprint ateriores y ponemos en práctica lo aprendido. 
En este ejercicio creamos lógica para las funciones de compra en un E-commerce. 

Se trata de un primer acercamiento al encargo de un cliente para montar una verción demo de la getión de un carrito de la compra, tratamiento de productos con descuento y validación de un formulario con los datos que ingresan los usuarios. 

A través de los 8 niveles desarrollamos las funciones necesarias para tomar los datos, procesarlos, permitir al usuario tener el control de las operaciones de compra, vaciado del carrito, acceso a los productos y entrada y validación de datos como cliente. 

Las funciones principales: comprar
                           vaciar el carrito
                           calcular el total
                           implementar promociones con características específicas
                           
Luego se aplican métodos a las funciones para mostrar la compra, quitar artículos, vaciar el carrito y finalmente el formulario de validación de datos de cliente en la página de salida de la compra (checkout).

Para ver el funcionamiento clonar el repositorio y hacer 'Click' en el archivo "index.html"

Una breve explicación de las lógicas implementadas en JavaScript acorde con el enunciado del proyecto y los ejercicios:

 Nivel 1 

 Ejercicio 1

 La función buy(id) busca un producto con un id específico. Si lo encuentra, verifica si ya está en el carrito. Si es así,
 aumenta su cantidad.Si no, lo agrega al carrito con una cantidad de 1.

 Ejercicio 2

 La función cleanCart() vacía el carrito. Pregunta al usuario si está seguro de que desea vaciar el carrito.
 Si el usuario confirma, el carrito se vacía.

 Ejercicio 3

 La función calculateTotal() suma los subtotales de todos los productos en el carrito para obtener el precio total. 
 Recorre cada producto en el carrito, agrega su subtotal con descuento al precio total y luego devuelve ese total.

 Ejercicio 4

 La función applyPromotionsCart() aplica promociones a cada producto en el array "cart".
 Recorre cada producto en el carrito y calcula el precio total del producto. Si el producto tiene una oferta,
 verifica si la cantidad de productos es mayor o igual al número de productos requeridos para la oferta. Si es así,
 calcula el precio total del producto con descuento y lo guarda en el campo "subtotalWithDiscount" del producto.
 Si no, guarda el precio total del producto en el campo "subtotalWithDiscount" del producto.

 Ejercicio 5

 la función printCart() llena el modal del carrito de compras manipulando el dom del carrito de compras.
 Recorre cada producto en el carrito y agrega su nombre, precio, cantidad y subtotal con descuento al modal del carrito.
 Luego, calcula el precio total del carrito y lo muestra en el modal del carrito.
 Finalmente, muestra la cantidad de productos en el carrito.

 Ejercicio 6

 Función de validación de formulario.

 La función validate() se encarga de validar los campos del formulario de registro.

 Entonces primero se obtienen los valores de los campos del formulario como nombre, apellido, e-mail, etc..

 Luego, verifica cada campo con ciertas reglas. Por ejemplo, el nombre y el apellido deben tener al menos 3 caracteres y solo
 pueden contener letras. 
 El email debe ser un email válido. 
 La contraseña debe tener entre 4 y 8 caracteres y contener al  menos una letra y un número. 
 La dirección debe tener al menos 3 caracteres y puede contener letras, números y ciertos  caracteres especiales (@). 
 El teléfono debe tener exactamente 9 dígitos.
 Si todos los campos son válidos, el formulario puede enviarse. Si no, se detendrá el envío del formulario.
 Variable para contar errores.
 Obtener el valor del campo de datos y asignamos a variables. 
 Obtener el valor de error y asignamos a variables.
 Quitamos lo signos de espacio en blanco de los valores de los campos, el valor resultante se asigna a una nueva variable.
 Expresiones regulares para validar los campos y asignarlos a variables.
 Expresión regular para validar solo letras.
 Expresión regular para validar un email.
 Expresión regular para validar una contraseña. Solo acepta letras y num.
 Expresión regular para validar una dirección.
 Expresión regular para validar un número.
 El resto del código valida los campos del formulario con las expresiones regulares y  muestra los mensajes de error. 
 Si es necesario, verifica que se cumplan las condiciones de  validación y, si cualquiera de ellas no se cumple, evita el envío.


 Nivel 2

 Ejercicio 7
 La función removeFromCart(id) elimina un producto del carrito. Busca el producto con el id especificado en el carrito.
 Si lo encuentra, lo elimina del carrito.
 Si la cantidad de productos es mayor a 1, disminuye la cantidad en 1. Si la cantidad es 1, elimina el producto del carrito.
 Si el usuario elimina un producto del carrito, actualiza la cantidad de productos en el carrito.
 función para abrir el modal. abre el modal y muestra el contenido del carrito de compras con los precios y descuentos.


 Nivel 3 

 Ejercicio 8

 Dotar al proyecto de una apariencia más profecional mediante estilos de CSS.

body {
    background-color: #f5f5dc; 
    color: #333; 
}


.btn {
    background-color: #ffd700; 
    color: #333; 
    border-radius: 20px; 
    transition: all 0.3s ease;
}


.btn:hover {
    background-color: #eec900; 
}

Nota: Al momento de la entrega experimenté problemas de Bootstrap en un paquete de js.delivery que no puede resolver aún.