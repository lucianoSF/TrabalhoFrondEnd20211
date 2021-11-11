import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto.model';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  produto: Produto = {
    unidadeMedida: "",
    grupo: "",
    nmProduto : "",
    dsProduto: "",
    prUnitario: 0

  }
  constructor(
    private service: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.service.create(this.produto).subscribe(() =>{
      this.service.showMessage("Produto cadastrado com sucesso!");
      this.router.navigate(['/produto']);
    });
  }
}
