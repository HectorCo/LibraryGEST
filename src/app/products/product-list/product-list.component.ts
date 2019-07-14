import { Component, OnInit } from '@angular/core';
import { Libro, libros } from 'src/app/data/libros-list';
import { LibrosService } from '../../shared/services/libros.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  libros: Array<Libro> = libros;

constructor(public libroService: LibrosService) { }

  ngOnInit() {
    this.libros = this.libroService.listaLibros();
  }



}
