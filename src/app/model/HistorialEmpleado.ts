// tslint:disable-next-line: class-name
export class HistorialEmpleado {

    private DATEMP_C_I: number;
    private DETEMP_MODIFICACION: string;
    private DETEMP_ID_EMP: number;
    constructor($DATEMP_C_I: number, $DETEMP_MODIFICACION: string, $DETEMP_ID_EMP: number,
        // tslint:disable-next-line:max-line-lengt
        ) {
        this.DATEMP_C_I = $DATEMP_C_I;
        this.DETEMP_MODIFICACION = $DETEMP_MODIFICACION;
        this.DETEMP_ID_EMP = $DETEMP_ID_EMP;
    }

}
