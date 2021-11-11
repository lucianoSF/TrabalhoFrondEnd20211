import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlBase: string = "http://localhost:8080/produtos/";

  constructor(
    private http: HttpClient
  ) { }

  //findAll
  findAll() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.urlBase);
  }
}
