export default class Cl_Bodega {
    constructor(billete10, billete20, billete50) {
        this.billete10 = billete10;
        this.billete20 = billete20;
        this.billete50 = billete50;
        this.acumBillete10 = 0.0;
        this.acumBillete20 = 0.0;
        this.acumBillete50 = 0.0;
    }

    set billete10(bi10) {
        this._billete10 = +bi10;
    }

    get billete10() {
        return this._billete10;
    }

    set billete20(bi20) {
        this._billete20 = +bi20;
    }

    get billete20() {
        return this._billete20;
    }

    set billete50(bi50) {
        this._billete50 = +bi50;
    }

    get billete50() {
        return this._billete50;
    }

    totalBillete10() {
        return this.billete10 * 10;
    }

    totalBillete20() {
        return this.billete20 * 20;
    }

    totalBillete50() {
        return this.billete50 * 50;
    }

    procesarBillete(billete) {
        if(billete.denominacion == 10)
            this.acumBillete10 += billete.montoCuenta();

        if(billete.denominacion == 20)
            this.acumBillete20 += billete.montoCuenta();

        if(billete.denominacion == 50)
            this.acumBillete50 += billete.montoCuenta();
    }

    montoFinalBillete10() {
        return this.acumBillete10 + this.totalBillete10();
    }

    montoFinalBillete20() {
        return this.acumBillete20 + this.totalBillete20();
    }

    montoFinalBillete50() {
        return this.acumBillete50 + this.totalBillete50();
    }

    montoTotal() {
        return this.acumBillete10 + this.acumBillete20 + this.acumBillete50 + this.totalBillete10() + this.totalBillete20() + this.totalBillete50();
    }
}