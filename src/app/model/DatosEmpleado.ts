export class DatosEmpleado {

    private DATEMP_C_I: number;
    private DATEMP_NOMBRE: string;
    private DATEMP_CARGO: string;
    private DATEMP_ORDEN_COSTOS: number ;
    private DATEMP_RESPONSABLE: string;
    private DATEMP_CORREO: string;
    constructor($DATEMP_C_I: number, $DATEMP_NOMBRE: string, $DATEMP_CARGO: string,
        $DATEMP_ORDEN_COSTOS: number, $DATEMP_RESPONSABLE: string, $DATEMP_CORREO: string,
        // tslint:disable-next-line:max-line-lengt
        ) {
        this.DATEMP_C_I = $DATEMP_C_I;
        this.DATEMP_NOMBRE = $DATEMP_NOMBRE;
        this.DATEMP_CARGO = $DATEMP_CARGO;
        this.DATEMP_ORDEN_COSTOS = $DATEMP_ORDEN_COSTOS;
        this.DATEMP_RESPONSABLE = $DATEMP_RESPONSABLE;
        this.DATEMP_CORREO = $DATEMP_CORREO;
    }

}
