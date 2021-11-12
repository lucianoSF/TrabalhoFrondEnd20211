import { Grupo } from "../enum/grupo.enum";
import { UnidadeMedida } from "../enum/unidadeMedida.enum";

export interface Produto {
    idProduto?: number;
    unidadeMedida: UnidadeMedida;
    grupo: Grupo;
    nmProduto: string;
    dsProduto: string;
    prUnitario: number;
}