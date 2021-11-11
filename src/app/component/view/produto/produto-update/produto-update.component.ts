import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto.model';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './../produto-form/produto-form.component.html',
  styleUrls: ['./../produto-form/produto-form.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  titulo: string = "Atualizar Produto";

  produto: Produto = {
    unidadeMedida: "",
    grupo: "",
    nmProduto : "",
    dsProduto: "",
    prUnitario: 0

  }

  constructor(
    private route: ActivatedRoute,
    private service: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.service.findById(id).subscribe(produto => {
        this.produto = produto;
      })
    }
  }
  salvar(): void {
    this.service.create(this.produto).subscribe(() =>{
      this.service.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(['/produto']);
    });
  }

}
