export default class Cl_Producto {
    constructor(codigo, costo, tipo){
        this.codigo = codigo;
        this.costo = costo;
        this.tipo = tipo;
    }

    set codigo(cod) {
        this._codigo = cod;
    }

    get codigo() {
        return this._codigo
    }

    set costo(costo) {
        this._costo = +costo;
    }

    get costo() {
        return this._costo;
    }

    set tipo(tipo){
    this._tipo = +tipo;
    }

    get tipo() {
        return this._tipo;
    }

    precioBaseV() {
        return this.costo + (this.costo*30/100);
    }

    descuento() {
        if(this.tipo==3)
            return this.precioFinal()*10/100;
        else
            return 0
    }

    precioFinal() {
        return this.precioBaseV() + this.descuento();
    }
}