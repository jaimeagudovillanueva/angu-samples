import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import { NotificationsService } from 'angular2-notifications';

import {Articulo} from 'app/articulo/articulo';
import {FormularioBaseComponent} from 'app/base/formulario-base.component';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent extends FormularioBaseComponent implements OnInit, OnDestroy {

  articulos: Articulo[];

  constructor(protected notificationService: NotificationsService,) {
    super(notificationService)

     this.formulario = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    });

    this.articulos = [
      new Articulo('Angular 2', 'http://angular.io', 3),
      new Articulo('Fullstack', 'http://fullstack.io', 2),
      new Articulo('Angular Homepage', 'http://angular.io', 1),
    ];
   }

  addArticle(): boolean {
    if (this.formulario.valid) {
      this.articulos.push(new Articulo(this.formulario.controls['titulo'].value, this.formulario.controls['url'].value, 0));
      this.formulario.controls['titulo'].setValue('');
      this.formulario.controls['url'].setValue('');
      this.notificationService.success("Operación realizada correctamente", "Se ha añadido el artículo");
    } else {
      this.notificationService.error("Error", "Se ha producido un error al añadir el artículo");
    }
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
