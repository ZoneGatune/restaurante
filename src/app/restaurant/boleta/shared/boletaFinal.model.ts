import { VentaSeleccionada } from './../../lista-menu/shared/venta.model';

export class BoletaFinal {
    $key: string;
    venta: VentaSeleccionada;
    total: number;
    totalPlatos: number;
    estado: string;
    mesa: string;
    codigoMesa: string;

}
