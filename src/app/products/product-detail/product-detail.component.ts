import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../shared/services/libros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public id: any;
  public libro: any = {};


  constructor(
    public api: LibrosService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.libro = this.api.libroSeleccion(this.id);
  });



  }

  borrarLibro(){}

  editar(){}
}




