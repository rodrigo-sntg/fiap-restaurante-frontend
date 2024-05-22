export interface ProdutoDTO {
  codigo: string;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  ativo: boolean;
  tempoPreparoEmMinutos: number;
  imagem?: string; // Campo opcional para imagem
}
