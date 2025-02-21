export default class Cl_iAgricultor {
//Leer cada uno de los Atributos dentro de la Clase
    leerCedula() {
        return prompt("Ingrese la Cedula: ")
    }

    leerCanToneladasB() {
        return prompt("Ingrese la Cantidad de toneladas botadas: ")
    }

    leerMontoT() {
        return prompt("Ingrese Monto/Tonelada: ")
    }
//Realizar Reporte de la Clase
    reporteAgricultor(cedula, montoP, montoM, montoTotalP) {
        return `Cedula: ${cedula}
        <br> Monto Perdido: ${montoP}$
        <br> Monto Multa: ${montoM}$
        <br> Monto Total Perdido: ${montoTotalP}$`
    }
}