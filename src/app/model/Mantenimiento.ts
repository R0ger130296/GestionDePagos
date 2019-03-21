export class Mantenimiento {

    private MANT_NUMERO_MANTENIMI: number;
    private CONT_ID_CONTRATO: number;
    private MANT_FECHA: Date;
    private MANT_VALOR: number;
    private MANT_FECHA_PAGO: Date;
    private MANT_IVA: number;
    private MANT_RUC: number;
    private MANT_INFORMACION: string;
    constructor($MANT_NUMERO_MANTENIMI: number, $CONT_ID_CONTRATO: number, $MANT_FECHA: Date, $MANT_VALOR: number,
        $MANT_FECHA_PAGO: Date, $MANT_IVA: number, $MANT_RUC: number, $MANT_INFORMACION: string,
        // tslint:disable-next-line:max-line-lengt
        ) {
        this.MANT_NUMERO_MANTENIMI = $MANT_NUMERO_MANTENIMI;
        this.CONT_ID_CONTRATO = $CONT_ID_CONTRATO;
        this.MANT_FECHA = $MANT_FECHA;
        this.MANT_VALOR = $MANT_VALOR;
        this.MANT_FECHA_PAGO = $MANT_FECHA_PAGO;
        this.MANT_IVA = $MANT_IVA;
        this.MANT_RUC = $MANT_RUC;
        this.MANT_INFORMACION = $MANT_INFORMACION;
    }

}
