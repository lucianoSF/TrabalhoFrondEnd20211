import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grupo } from 'src/app/enum/grupo.enum';
import { UnidadeMedida } from 'src/app/enum/unidadeMedida.enum';
import { Produto } from 'src/app/model/produto.model';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  titulo: string = "Cadastrar Novo Produto";

  produto: Produto = {
    unidadeMedida: UnidadeMedida.UNIDADE,
    grupo: Grupo.INFORMATICA,
    nmProduto : "",
    dsProduto: "",
    prUnitario: 0

  }

  public unidadeMedida = Object.values(UnidadeMedida);
  public grupo = Object.values(Grupo);
  
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
