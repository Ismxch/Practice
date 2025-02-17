export default class Cl_iProducto {
    leerCodigo() {
        return prompt("Introduzca el Codigo");
    }

    leerCosto() {
        return prompt("Introduzca el Costo");
    }

    leerTipo() {
        return prompt("Introduzca el Tipo\n 1. Dama\n 2. Caballero\n 3. Niño");
    }

    reporteProducto(codigo, precioBaseV, descuento, precioF) {
        return `Codigo: ${codigo}
        <br> Precio Base de Venta ${precioBaseV}
        <br> Descuento: ${descuento}
        <br> Precio Final: ${precioF}`
    }
}