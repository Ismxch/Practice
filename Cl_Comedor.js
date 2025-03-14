export default class Cl_Comedor {
    constructor() {
        this.acumBandejasBecados = 0;
        this.acumBandejasComensales = 0;
        this.acumBandejasNoBecados = 0;
    }

    procesarDecanatos(deca) {
        this.acumBandejasBecados += deca.cantidadBandejasBecados;
        
        this.acumBandejasComensales += deca.acumBandejasComensales;

        this.acumBandejasNoBecados += deca.cantidadBandejasNoBecados;
    }

    totalBandejasBecados() {
        return this.acumBandejasBecados;
    }

    totalBandejasComensales() {
        return this.acumBandejasComensales;
    }

    cantidadTotalEstudiantes() {
        return this.acumBandejasNoBecados + this.acumBandejasBecados;
    }

    porcentajeTotal() {
        if(this.cantidadTotalEstudiantes() > 0)
            return this.acumBandejasBecados * 100 / this.cantidadTotalEstudiantes();
        else 
            return 0;
    }
}