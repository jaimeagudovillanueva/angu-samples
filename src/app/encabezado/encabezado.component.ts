import { Component, OnInit } from '@angular/core';

import {Articulo} from 'app/articulo/articulo';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  articulos: Articulo[];

  constructor() {
    this.articulos = [
      new Articulo('Angular 2', 'http://angular.io', 3),
      new Articulo('Fullstack', 'http://fullstack.io', 2),
      new Articulo('Angular Homepage', 'http://angular.io', 1),
    ];
   }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articulos.push(new Articulo(title.value, link.value, 0));
    title.value = '';
    link.value = '';

    return false;
  }

  removeArticle(articulo : Articulo): boolean {
    this.articulos.splice(this.articulos.indexOf(articulo), 1);

    return false;
  }

  sortedArticles(): Articulo[] {
    return this.articulos.sort((a: Articulo, b: Articulo) => b.votos - a.votos);
  }
}
