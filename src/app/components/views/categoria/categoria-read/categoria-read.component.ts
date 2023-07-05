import { Component } from '@angular/core';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

  /*categorias: Categoria[] = []

  constructor(){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta;
    })
  }*/

}
