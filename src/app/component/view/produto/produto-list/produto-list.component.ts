import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscriber } from 'rxjs';
import { ConfirmDeleteComponent } from 'src/app/component/template/confirm-delete/confirm-delete.component';
import { Produto } from 'src/app/model/produto.model';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns: string[] = ['idProduto', 'unidadeMedida', 'grupo', 'nmProduto', 'dsProduto', 'prUnitario', 'acao'];

  constructor(
    private service: ProdutoService,
    private dialog: MatDialog
  ) { }

  atualizarDados(): void {
    this.service.findAll().subscribe(produtos =>{
      this.produtos = produtos;
      if(this.produtos.length == 0){
        this.service.showMessage("Busca não retornou Produtos")
      }
      console.log(this.produtos);
    })
    console.log('hello!!!!!')
  }
  ngOnInit(): void {
    this.atualizarDados();
  }


  excluir(produto: Produto): void{
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        message: `Deseja realmente excluir o Produto ${produto.nmProduto}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirm: boolean) =>{
      if(confirm){
        this.service.delete(produto).subscribe(() => {
          this.service.showMessage("Produto excluido com sucesso!");
          this.atualizarDados();
        },
        err => {
          this.service.showMessage("Não foi possível excluir Produto")
        });
      }else{
        this.service.showMessage("Operação cancelada")
      }
    })



  }
}
