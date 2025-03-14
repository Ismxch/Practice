export default class Cl_Decanato {
    constructor(nombre, cantidadBandejasBecados, cantidadBandejasNoBecados, cantidadBandejasComensales ) {
        this.nombre = nombre;
        this.cantidadBandejasBecados = cantidadBandejasBecados;
        this.cantidadBandejasNoBecados = cantidadBandejasNoBecados;
        this.cantidadBandejasComensales = cantidadBandejasComensales;
    }

    set nombre(nom) {
        this._nombre = nom;
    }

    get nombre() {
        return this._nombre;
    }

    set cantidadBandejasBecados(cantidadBandejasB) {
        this._cantidadBandejasBecados = +cantidadBandejasB;
    }

    get cantidadBandejasBecados() {
        return this._cantidadBandejasBecados;
    }

    set cantidadBandejasNoBecados(cantidadBandejasNoB) {
        this._cantidadBandejasNoBecados = +cantidadBandejasNoB;
    }

    get cantidadBandejasNoBecados() {
        return this._cantidadBandejasNoBecados;
    }

    set cantidadBandejasComensales(cantidadBandejasC) {
        this._cantidadBandejasComensales = +cantidadBandejasC;
    }

    get cantidadBandejasComensales() {
        return this._cantidadBandejasComensales;
    }

    totalBandejasServidas() {
        return this.cantidadBandejasBecados + this.cantidadBandejasNoBecados + this.cantidadBandejasComensales;
    }
}