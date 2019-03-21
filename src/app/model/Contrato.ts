export class Contrato {

    private CONT_ID_CONTRATO: number;
    private PRO_RUC: number;
    private CONT_TIPO_CONTRATO: string;
    private CONT_NUMERO_CONTRATO: number ;
    private CONT_FECHA: Date;
    private CONT_PLAZO: Date;
    constructor($CONT_ID_CONTRATO: number, $PRO_RUC: number, $CONT_TIPO_CONTRATO: string,
        $CONT_NUMERO_CONTRATO: number, $CONT_FECHA: Date, $CONT_PLAZO: Date,
        // tslint:disable-next-line:max-line-lengt
        ) {
        this.CONT_ID_CONTRATO = $CONT_ID_CONTRATO;
        this.PRO_RUC = $PRO_RUC;
        this.CONT_TIPO_CONTRATO = $CONT_TIPO_CONTRATO;
        this.CONT_NUMERO_CONTRATO = $CONT_NUMERO_CONTRATO;
        this.CONT_FECHA = $CONT_FECHA;
        this.CONT_PLAZO = $CONT_PLAZO;
    }

}
