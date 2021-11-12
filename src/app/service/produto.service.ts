import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { ProdutoApi } from '../component/view/produto/produto-list/produto-list.component';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlBase: string = "http://localhost:8080/produtos/";

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg:string, isError: boolean = false): void{
    this.snackBar.open(msg, 'Fechar',
    {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    }
    )
  }

  // CREATE
  create(produto: Produto) : Observable<Produto>{
    return this.http.post<Produto>(this.urlBase, produto);
  }


  //findAll
  findAll() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.urlBase);
  }

  // findById
  findById(id: string ) : Observable<Produto>{
    let url = `${this.urlBase}/${id}`;
    return this.http.get<Produto>(url);
  }

  // UPDATE
  update(produto: Produto) : Observable<Produto>{
      return this.http.put<Produto>(this.urlBase, produto);
  }

    // DELETE

  delete(produto: Produto): Observable<Produto>{
      let url = `${this.urlBase}/${produto.idProduto}`;
      console.log(url);
      return this.http.delete<Produto>(url);
  }


  findPaginator(sort: string, order: SortDirection, page: number, size: number): Observable<ProdutoApi> {
    //?sort=${sort}&order=${order}&page=${page + 1}
    let requestUrl =
        `${this.urlBase}paginator/?page=${page}&size=${size}`;
        //&sort=${sort}&order=${order}

    requestUrl += order == 'desc' ? '&sort='+sort+',desc' : '&sort='+sort+',asc';
    console.log(requestUrl)
    return this.http.get<ProdutoApi>(requestUrl);
  }
}
