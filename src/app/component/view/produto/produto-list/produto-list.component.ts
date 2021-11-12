import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { ConfirmDeleteComponent } from 'src/app/component/template/confirm-delete/confirm-delete.component';
import { Produto } from 'src/app/model/produto.model';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements AfterViewInit {

  resultsLength = 0;

  produtos: Produto[] = [];
  displayedColumns: string[] = ['idProduto', 'unidadeMedida', 'grupo', 'nmProduto', 'dsProduto', 'prUnitario', 'acao'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
  ngAfterViewInit() {
   
    

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
        
          //#region this.isLoadingResults = true;
          return this.service.findPaginator(
              this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize)
            .pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          //this.isLoadingResults = false;
          //this.isRateLimitReached = data === null;
         console.log(data)
          if (data === null) {
            return [];
          }
  
          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.totalElements;
          return data.content;
        })
      ).subscribe(data => this.produtos = data);
  }
}



export interface ProdutoApi {
  content: Produto[];
  totalElements: number,
  totalPages: number,
  size: number,
  number: number,
  //sort: string,
  //order: SortDirection
}