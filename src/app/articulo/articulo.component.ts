import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Articulo} from 'app/articulo/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  host: { class: 'row'}
})
export class ArticuloComponent implements OnInit {

  @Input() articulo: Articulo;

  @Output() articuloSeleccionado = new EventEmitter();

  ngOnInit() {
  }

  voteUp() {
   this.articulo.voteUp();
   return false;
  }

  voteDown() {
    this.articulo.voteDown();
    return false;
  }

  remove() {
    this.articuloSeleccionado.emit(this.articulo);
    return false;
  }
}
