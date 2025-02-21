export default class Cl_Agricultor {
//Definir Atributos dentro del constructor
    constructor(cedula, cantidadToneladasBotadas, montoTonelada) {
        this.cedula = cedula;
        this.cantidadToneladasBotadas = cantidadToneladasBotadas;
        this.montoTonelada = montoTonelada;
    }
//Set y Get de cada atributo
    set cedula(cedula) {
        this._cedula = cedula;
    }

    get cedula() {
        return this._cedula;
    }

    set cantidadToneladasBotadas(cantidadTB) {
        this._cantidadToneladasBotadas = +cantidadTB;
    }

    get cantidadToneladasBotadas() {
        return this._cantidadToneladasBotadas;
    }

    set montoTonelada(montoT) {
        this._montoTonelada = +montoT;
    }

    get montoTonelada() {
        return this._montoTonelada;
    }
//Definir los métodos()
//Una multiplicacion de atributos
    montoPerdido() {
        return this.cantidadToneladasBotadas*this.montoTonelada;
    }
//Un porcentaje del metodo anterior
    montoMulta() {
        return this.montoPerdido()*15/100
    }
//La suma de los dos metodos ya hechos
    montoTotalP() {
        return this.montoPerdido() + this.montoMulta()
    }
}