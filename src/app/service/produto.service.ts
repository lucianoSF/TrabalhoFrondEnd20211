import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
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
}
