// tslint:disable-next-line:class-name
export class Detalle_Calculo {

    private DETCAL_NUMERO_DETALLE: number;
    private DETCAL_NUMERO_ORDEN: number;
    private DETCAL_VALOR: number;
    constructor($DETCAL_NUMERO_DETALLE: number, $DETCAL_NUMERO_ORDEN: number, $DETCAL_VALOR: number,
        // tslint:disable-next-line:max-line-lengt
        ) {
        this.DETCAL_NUMERO_DETALLE = $DETCAL_NUMERO_DETALLE;
        this.DETCAL_NUMERO_ORDEN = $DETCAL_NUMERO_ORDEN;
        this.DETCAL_VALOR = $DETCAL_VALOR;
    }

}
