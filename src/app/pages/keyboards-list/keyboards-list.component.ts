import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { TableDataComponent } from 'src/app/reusable/components/table-data/table-data.component';
import { ProductService } from 'src/app/services/product/product.service';
import { IKeyboard } from 'src/app/models/keyboard';
import { Accion, getEntityPropiedades } from 'src/app/models/table-columna';

@Component({
  selector: 'app-keyboards-list',
  templateUrl: './keyboards-list.component.html',
  styleUrls: ['./keyboards-list.component.css']
})
export class KeyboardsListComponent implements OnInit {
  keyboardList: IKeyboard[] = [];
  columnas: string[] = [];
  title: string = "Keyboards";
  isLoading: boolean = true;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('keyboard');
    setTimeout(() => {
      this.getKeyboards();
    }, 3000);
  }

  getKeyboards() {
    this.isLoading = true;
    this._productService.obtenerKeyboardList().subscribe({
      next: (data) => {
        this.keyboardList = data;
        console.log(this.keyboardList);
      },
      error(err) {
        console.log(err);
      },
      complete:() => { this.isLoading = false; }
    });
  }

  onAction(accion: Accion) {
    if (accion.accion == "Editar") {
      this.editar(accion.fila);
    } else if (accion.accion == "Eliminar") {
      this.eliminar(accion.fila.nombre);
    }
  }

  editar(objeto: any) {
    console.log("Editar", objeto);
  }

  eliminar(nombre: string) {
    console.log("eliminar", nombre)
  }

}
