export class Orden_Gasto {

    private ORDGA_NUMERO_ORDEN: number;
    private DATEMP_C_I: number;
    private CEPRE_NUMERO_CERTIFICADO: number;
    private CONT_ID_CONTRATO: number;
    private ORDDGA_FECHA_ORDEN_GASTO: Date;
    private ORDDGA_CONTRATO: string;
    private ORDGA_PRECIO_UNITARIO: number;
    private ORDGA_SUBTOTAL: number;
    private ORDGA_IVA: number;
    private ORDGA_OTRO_IMPUESTO: number;
    private ORDGA_TOTAL: number;
    private ORDGA_CODIGO_PRESUPUESTARIO: number;
    private ORDGA_DESCRIPCION: string;
    private ORDGA_VALOR_CERTIFICADO: number;
    private ORDGAGASTO_AFECTUAR: number;
    private ORDGA_SALDO: number;
    private ORDGA_RUC: number;
    private ORDGA_TIPO_PAGO: string;
    private ORDGA_MESES_ACUMULABLES: string;
    constructor($ORDGA_NUMERO_ORDEN: number, $DATEMP_C_I: number, $CEPRE_NUMERO_CERTIFICADO: number, $CONT_ID_CONTRATO: number,
        $ORDDGA_FECHA_ORDEN_GASTO: Date, $ORDDGA_CONTRATO: string, $ORDGA_PRECIO_UNITARIO: number, $ORDGA_SUBTOTAL: number,
        $ORDGA_IVA: number, $ORDGA_OTRO_IMPUESTO: number, $ORDGA_TOTAL: number, $ORDGA_CODIGO_PRESUPUESTARIO: number,
        $ORDGA_DESCRIPCION: string, $ORDGA_VALOR_CERTIFICADO: number, $ORDGAGASTO_AFECTUAR: number, $ORDGA_SALDO: number,
        $ORDGA_RUC: number, $ORDGA_TIPO_PAGO: string, $ORDGA_MESES_ACUMULABLES: string,
        // tslint:disable-next-line:max-line-lengt
        ) {
        this.ORDGA_NUMERO_ORDEN = $ORDGA_NUMERO_ORDEN;
        this.DATEMP_C_I = $DATEMP_C_I;
        this.CEPRE_NUMERO_CERTIFICADO = $CEPRE_NUMERO_CERTIFICADO;
        this.CONT_ID_CONTRATO = $CONT_ID_CONTRATO;
        this.ORDDGA_FECHA_ORDEN_GASTO = $ORDDGA_FECHA_ORDEN_GASTO;
        this.ORDGA_PRECIO_UNITARIO = $ORDGA_PRECIO_UNITARIO;
        this.ORDGA_SUBTOTAL = $ORDGA_SUBTOTAL;
        this.ORDGA_IVA = $ORDGA_IVA;
        this.ORDGA_OTRO_IMPUESTO = $ORDGA_OTRO_IMPUESTO;
        this.ORDDGA_CONTRATO = $ORDDGA_CONTRATO;
        this.ORDGA_TOTAL = $ORDGA_TOTAL;
        this.ORDGA_CODIGO_PRESUPUESTARIO = $ORDGA_CODIGO_PRESUPUESTARIO;
        this.ORDGA_DESCRIPCION = $ORDGA_DESCRIPCION;
        this.ORDGA_VALOR_CERTIFICADO = $ORDGA_VALOR_CERTIFICADO;
        this.ORDGAGASTO_AFECTUAR = $ORDGAGASTO_AFECTUAR;
        this.ORDGA_SALDO = $ORDGA_SALDO;
        this.ORDGA_RUC = $ORDGA_RUC;
        this.ORDGA_TIPO_PAGO = $ORDGA_TIPO_PAGO;
        this.ORDGA_MESES_ACUMULABLES = $ORDGA_MESES_ACUMULABLES;
    }

}
