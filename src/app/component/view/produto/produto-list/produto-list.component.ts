import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Produto } from 'src/app/model/produto.model';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns: string[] = ['idProduto', 'unidadeMedida', 'grupo', 'nmProduto', 'dsProduto', 'prUnitario'];

  constructor(
    private service: ProdutoService
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(produtos =>{
      this.produtos = produtos;
      console.log(this.produtos);
    })
    console.log('hello!!!!!')
  }

}
