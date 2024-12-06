// Array
const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
  ];

/* Filtrar Productos con Descuento
 Identificar los productos del inventario que tienen un descuento 
 aplicado (es decir, aquellos cuyo campo discount es mayor que 0).
 El resultado será un nuevo grupo de productos.*/

const prodDesc = products.filter(product => product.discount > 0);

console.log("Productos con descuentos:",prodDesc);

/* Calcular el Precio Final con Descuento
Para los productos con descuento, calcular su precio después de aplicar el descuento. 
Luego, crear una nueva lista que incluya este precio final.*/

const productosConPrecioFinal = prodDesc.map(product => ({
    ...product,
    precioFinal: product.price - (product.price * product.discount) / 100,
  }));
  
console.log("Precio final del producto, despues del descuento:", productosConPrecioFinal);

/*Identificar Productos con Stock Bajo
Encontrar los productos que tienen menos de 5 unidades en inventario y almacenarlos en otro grupo o lista. */

const bajoStock = products.filter(product => product.stock < 5);

console.log("Productos con stock bajo:",bajoStock);

/* Actualizar el Stock de un Producto
Crear un mecanismo para que, dado el nombre de un producto y una cantidad específica, se pueda aumentar el stock del producto en el inventario. Además, manejar errores si el producto no existe */


// actualizar stock de un producto //
function actualizarStock(nombreProducto, cantidad) {
    const product = products.find(p => p.name.toLowerCase() === nombreProducto.toLowerCase());
  
    if (!product) {
      console.log("Error: El producto no está");
      return;
    }
  
    product.stock += cantidad;
    console.log(`Nuevo stock de "${product.name}": ${product.stock}`);
  }
  
  actualizarStock("Celular", 10); //agregar que es lo que quieres agregar, este es un ejemplo //
