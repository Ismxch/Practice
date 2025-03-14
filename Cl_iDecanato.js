export default class Cl_iDecanato {
    leerNombre() {
        return prompt("Ingrese el Nombre del Decanato: ")
    }

    leerCantidadBandejasBecados() {
        return prompt("Ingrese la Cantidad de Bandejas de los Estudiantes Becados: ")
    }

    leerCantidadBandejasNoBecados() {
        return prompt("Ingrese la Cantidad de Bandejas de los Estudiantes No Becados: ")
    }

    leerCantidadBandejasComensales() {
        return prompt("Ingrese la Cantidad de Bandejas de los otros Comensales: ")
    }

    leerRespuesta() {
        return prompt("¿Desea Añadir otro Decanato?: \n 1. Si \n 2. No")
    }

    reporteDecanato(decanato, totalBandejasS) {
        return `Nombre del Decanato: ${decanato}
        <br> Total de Bandejas Servidas: ${totalBandejasS}`
    }
}