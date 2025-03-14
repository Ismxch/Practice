export default class Cl_iComedor {
    reporteComedor(totalBandejasB, totalBandejasC, porcentajeBandejasB) {
        return `
        <br><br> Total de Bandejas de Becados: ${totalBandejasB}
        <br> Total de Bandejas de otros Comensales: ${totalBandejasC}
        <br> Porcentaje Total de Bandejas de Becados: ${porcentajeBandejasB}`
    }
}