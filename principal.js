/*
4. UN PRODUCTO
De un producto se conoce su código, costo y tipo (1: Dama, 2: Caballero, 3: niño). Se sabe
que el precio base de venta del producto resulta de incrementar un 30% al costo del mismo;
además, el precio final del producto tiene un 10% de descuento si es para niños. Realice un
programa que muestre: el código, el precio base de venta, el descuento y el precio final.
*/

//Definir Clases
import Cl_Producto from "./Cl_Producto.js";
import Cl_iProducto from "./Cl_iProducto.js";

//Crear Objeto iProducto
let iProd = new Cl_iProducto(),
    cod = iProd.leerCodigo(),
    cos = iProd.leerCosto(),
    tip = iProd.leerTipo(),

//Crear Objeto Producto
    prod = new Cl_Producto(cod, cos, tip),

//Definir salida
    salida = document.getElementById("salida")
    salida.innerHTML = iProd.reporteProducto(prod.cod, prod.precioBaseV(), prod.descuento(), prod.precioFinal())