import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { environment } from 'src/app/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

 /* baseUrl: String = environment.baseUrl; 

  constructor(private http: HttpClient) { }

  findAll():Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  } */
}
