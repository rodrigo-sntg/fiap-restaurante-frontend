export interface ItemPedidoDTO {
  customizacao: string;
  nomeProduto: string;
  codigoProduto: string;
  preco: number;
  descricao: string;
}

export class CadastroItemPedidoDTO {
  codigoProduto!: string;
  customizacao!: string;
}