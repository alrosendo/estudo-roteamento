import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    {
      cod: 101,
      nome: 'castanhas',
      descricao: '1 kg natural',
      preco: 60,
      imagem: 'https://picsum.photos/200'
    },
    {
      cod: 102,
      nome: 'cajuina',
      descricao: '500 ml',
      preco: 5,
      imagem: 'https://picsum.photos/200',
    },
    {
      cod: 103,
      nome: 'doces',
      descricao: '500g',
      preco: 15,
      imagem: 'https://picsum.photos/200',
    }
  ];
  listarProdutos(): Produto[] {
    return this.produtos;
  }
  getProduto(cod: number): Produto | undefined {
    return this.produtos.find((prod) => prod.cod == cod);
  }
}
