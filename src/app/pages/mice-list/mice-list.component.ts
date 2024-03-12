import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { IMouse } from 'src/app/models/mouse';
import { Accion, getEntityPropiedades } from 'src/app/models/table-columna';

@Component({
  selector: 'app-mice-list',
  templateUrl: './mice-list.component.html',
  styleUrls: ['./mice-list.component.css']
})
export class MiceListComponent implements OnInit {
  columnas: string[] = [];
  mouseList: IMouse[] = [];
  title: string = "Mice";

  constructor(private _productoServ: ProductService) { }

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('mouse');
    this._productoServ.obtenerMiceList().subscribe({
      next: (data) => {
        this.mouseList = data;
        console.log(this.mouseList);
      },
      error(err) { console.log(err); },
    });
  }

  editar(objeto: any){
    console.log("editar", objeto);
  }

  eliminar(nombre: string){
    console.log("eliminar", nombre);
  }

  onAction(accion: Accion) {
    if(accion.accion == "Editar"){
      this.editar(accion.fila);
    }else if(accion.accion == "Eliminar"){
      this.eliminar(accion.fila.nombre);
    }
  }

}
