import { ClienteDTO } from "./cliente.dto";
import { CadastroItemPedidoDTO, ItemPedidoDTO } from "./itemPedido.dto";

export class PedidoDTO {
  itens!: ItemPedidoDTO[];
  cliente!: ClienteDTO;
  total!: number;
  status!: string;
  codigoPedido!: string;
  dataAlteracao!: string;
  previsaoPreparo!: string | null;
}

export class CadastroPedidoDTO {
  itens!: CadastroItemPedidoDTO[];
  cpf!: string;
}