export class Proveedor {

    private PRO_RUC: number;
    private PRO_NOMBRE: string;
    private PRO_TELEFONO: number;
    private PRO_CONTACTO: string;
    private PRO_CONTACTO_DATO: string;
    private PRO_CONTACTO_EMAIL: string;
    constructor($PRO_RUC: number, $PRO_NOMBRE: string, $PRO_TELEFONO: number, $PRO_CONTACTO: string,
        $PRO_CONTACTO_DATO: string, $PRO_CONTACTO_EMAIL: string,
        // tslint:disable-next-line:max-line-lengt
        ) {
        this.PRO_RUC = $PRO_RUC;
        this.PRO_NOMBRE = $PRO_NOMBRE;
        this.PRO_TELEFONO = $PRO_TELEFONO;
        this.PRO_CONTACTO = $PRO_CONTACTO;
        this.PRO_CONTACTO_DATO = $PRO_CONTACTO_DATO;
        this.PRO_CONTACTO_EMAIL = $PRO_CONTACTO_EMAIL;
    }

}
