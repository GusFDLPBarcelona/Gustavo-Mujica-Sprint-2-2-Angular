# Sprint 2.2 — ShopNow E-commerce

Demo funcional de una tienda online con carrito de compra, sistema de descuentos por volumen y formulario de checkout con validación completa.

## Demo

[Ver demo en vivo](https://gusfdlpbarcelona.github.io/Gustavo-Mujica-Sprint-2-2-Angular/)

## Funcionalidades

| # | Función | Descripción |
|---|---------|-------------|
| 1 | `buy(id)` | Añade producto al carrito; incrementa cantidad si ya existe |
| 2 | `cleanCart()` | Vacía el carrito con confirmación del usuario |
| 3 | `calculateTotal()` | Suma los subtotales con descuento de todos los productos |
| 4 | `applyPromotionsCart()` | Aplica descuentos por volumen según reglas por producto |
| 5 | `printCart()` | Renderiza el carrito en el modal con precios y descuentos |
| 6 | `removeFromCart(id)` | Reduce la cantidad o elimina el producto del carrito |
| 7 | `validate(event)` | Valida el formulario de checkout con expresiones regulares |

## Descuentos por volumen

| Producto | Cantidad mínima | Descuento |
|----------|----------------|-----------|
| Cooking Oil | 3 unidades | 20% |
| Instant Cupcake Mixture | 10 unidades | 30% |

## Estructura

```
├── index.html         # Tienda principal con catálogo y modal del carrito
├── checkout.html      # Formulario de datos y confirmación de compra
├── js/
│   ├── shop.js        # Lógica del carrito: comprar, calcular, descuentos
│   └── checkout.js    # Validación del formulario con regex
├── css/
│   └── styles.css     # Bootstrap 5.3.3 con tema personalizado
└── images/            # Fotografías de los productos
```

## Cómo usar

1. Abre `index.html` en el navegador
2. Añade productos al carrito con "Add to cart"
3. Haz clic en "Cart" en la barra de navegación para ver el resumen
4. Añade 3+ unidades de Cooking Oil o 10+ de Cupcake Mixture para activar el descuento
5. Haz clic en "Checkout" y completa el formulario

## Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=flat&logo=bootstrap&logoColor=white)

## Qué demuestra este proyecto

- Manipulación del **DOM**: creación dinámica de filas en tabla, actualización de contadores
- **Lógica de negocio**: carrito con cantidades, descuentos condicionales por volumen, cálculo de totales
- **Validación de formularios**: regex para nombre, email, contraseña, dirección y teléfono
- **Bootstrap 5**: navbar fija, modal, cards con hover, badges, grid responsivo

## Autor

**Gustavo Mujica** — [GitHub](https://github.com/GusFDLPBarcelona)
