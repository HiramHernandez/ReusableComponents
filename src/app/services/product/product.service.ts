import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IKeyboard } from 'src/app/models/keyboard';
import { IMouse } from 'src/app/models/mouse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  obtenerKeyboardList(): Observable<IKeyboard[]> {
    return this._http.get<IKeyboard[]>("/assets/data/keyboardList.json");
  }

  obtenerMiceList(): Observable<IMouse[]> {
    return this._http.get<IMouse[]>("/assets/data/mouseList.json");
  }

}
