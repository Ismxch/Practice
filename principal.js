/*
4. ADMINISTRACIÓN DEL COMEDOR UCLA
La Administración del Comedor de la UCLA necesita llevar el control de la cantidad de
bandejas servidas a los comensales en los diferentes decanatos. Por decanato se conoce
(nombre, cantidad de bandejas becados, cantidad de bandejas de estudiantes no becados,
cantidad de bandejas otros comensales). Realice un programa que muestre el total de bandejas
servidas por decanato, total de bandejas de becados, total de bandejas para otros comensales y
el porcentaje del total de bandejas de becados con respecto al total de los estudiantes. 
*/

import Cl_Decanato from "./Cl_Decanato.js";
import Cl_iDecanato from "./Cl_iDecanato.js";
import Cl_Comedor from "./Cl_Comedor.js";
import Cl_iComedor from "./Cl_iComedor.js";

let iCome = new Cl_iComedor(),
    come = new Cl_Comedor(),

    salida = document.getElementById("salida"),

    resp = 1
while(resp == 1) {
    let iDeca = new Cl_iDecanato(),
        nom = iDeca.leerNombre(),
        cantBB = iDeca.leerCantidadBandejasBecados(),
        cantBNoB = iDeca.leerCantidadBandejasNoBecados(),
        cantBC = iDeca.leerCantidadBandejasComensales(),

        deca = new Cl_Decanato(nom, cantBB, cantBNoB, cantBC);

    come.procesarDecanatos(deca);

    salida.innerHTML += iDeca.reporteDecanato(deca.nombre, deca.totalBandejasServidas()) + "<br>";

    resp = iDeca.leerRespuesta();
}

salida.innerHTML += iCome.reporteComedor(come.totalBandejasBecados(), come.totalBandejasComensales(), come.porcentajeTotal().toFixed(2))