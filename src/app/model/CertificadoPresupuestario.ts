export class CertificadoPresupuestario {

    private CEPRE_NUMERO_CERTIFICADO: number;
    private CONT_ID_CONTRATO: number;
    private MANT_NUMERO_MANTENIMIENTO: number;
    private CEPRE_VALOR: number ;
    private CEPRE_OBJETO: string;
    private CEPRE_CODIGO_PRESUPUESTARIO: string;
    private CEPRE_DESCRIPCION: string;
    private CEPRE_RUC: number;
    constructor($CEPRE_NUMERO_CERTIFICADO: number, $CONT_ID_CONTRATO: number, $MANT_NUMERO_MANTENIMIENTO: number,
        $CEPRE_VALOR: number, $CEPRE_OBJETO: string, $CEPRE_CODIGO_PRESUPUESTARIO: string, $CEPRE_RUC: number,
        // tslint:disable-next-line:max-line-length
        $DESCRIPCION: string ) {
        this.CEPRE_NUMERO_CERTIFICADO = $CEPRE_NUMERO_CERTIFICADO;
        this.CONT_ID_CONTRATO = $CONT_ID_CONTRATO;
        this.MANT_NUMERO_MANTENIMIENTO = $MANT_NUMERO_MANTENIMIENTO;
        this.CEPRE_VALOR = $CEPRE_VALOR;
        this.CEPRE_OBJETO = $CEPRE_OBJETO;
        this.CEPRE_CODIGO_PRESUPUESTARIO = $CEPRE_CODIGO_PRESUPUESTARIO;
        this.CEPRE_DESCRIPCION = $DESCRIPCION;
        this.CEPRE_RUC = $CEPRE_RUC;
    }

}
