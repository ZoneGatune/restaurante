import { Carta } from '../../carta/shared/carta.model';
import { Carta1 } from '../../carta/shared/carta1.model';

export class VentaSeleccionada {
  $ventaKey: string;
  id: string;
  estado: string;
  fecha: string;
  cartaList: Carta1[];
}
