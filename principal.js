/* La Fiscalía necesita un programa que maneje la información de los agricultores que tuvieron que botar su producción por falta
de combustible, de cada agricultor se conoce: cédula, cantidad de toneladas botadas y monto de cada tonelada. Se sabe que el
agricultor que incurrió en esta falta tendrá que pagar una multa del 15% del monto perdido. 
Se requiere mostrar: 
a) Cédula 
b) Monto perdido 
c) Monto multa  
d) Monto total perdido por el agricultor
*/

//Importar Clases
import Cl_Agricultor from "./Cl_Agricultor.js";
import Cl_iAgricultor from "./Cl_iAgricultor.js";

//Crear objeto iAgricultor
let iAgri = new Cl_iAgricultor(),
    ced = iAgri.leerCedula(),
    canTB = iAgri.leerCanToneladasB(),
    mT = iAgri.leerMontoT(),

//Crear objeto Agricultor
    agri = new Cl_Agricultor(ced, canTB, mT),

//Definir salida
    salida = document.getElementById("salida")
    salida.innerHTML = iAgri.reporteAgricultor(agri.cedula, agri.montoPerdido(), agri.montoMulta(), agri.montoTotalP())