// tslint:disable-next-line: class-name
export class Detalle_Pago {

    private DEPA_ID_DETALLE: number;
    private DEPA_ID_CONTRATO: number;
    private DEPA_ORDEN: string;
    constructor($DEPA_ID_DETALLE: number, $DEPA_ID_CONTRATO: number, $DEPA_ORDEN: string,
        // tslint:disable-next-line:max-line-lengt
        ) {
        this.DEPA_ID_DETALLE = $DEPA_ID_DETALLE;
        this.DEPA_ID_CONTRATO = $DEPA_ID_CONTRATO;
        this.DEPA_ORDEN = $DEPA_ORDEN;
    }

}
