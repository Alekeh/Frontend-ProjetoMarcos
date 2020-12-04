import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { CategoriaDTO } from 'src/models/categoria.dto';

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){

    }
    update(obj: CategoriaDTO) {
        return this.http.put(
            `${API_CONFIG.baseUrl}/categorias`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    delete(obj: CategoriaDTO) {
        return this.http.delete(
            `${API_CONFIG.baseUrl}/categorias/`.concat(obj.id)
        );
    }
    findAll(): Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}
