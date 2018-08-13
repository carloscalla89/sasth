import { DetalleOferta } from './detalleOferta';

export class Oferta {
    id: number;
    fechaInicio: string;
    facultad: string;
    cargo: string;
    tipoCargo: string;
    requisito: string;
    detalleOferta: DetalleOferta;

}