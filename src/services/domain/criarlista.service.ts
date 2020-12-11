import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CriarListDTO } from 'src/models/criarlist.dto';
import { API_CONFIG } from 'src/config/api.config';
import {clienteDTO} from "../../models/cliente.dto";
import {CategoriaDTO} from "../../models/categoria.dto";

@Injectable()
export class CriarListaService{

    constructor(public http: HttpClient){

    }
    insert(obj: CategoriaDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/categorias`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    update(obj: CategoriaDTO) {
        return this.http.put(
            `${API_CONFIG.baseUrl}/categorias/`.concat(obj.id),
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
    findAll(): Observable<CriarListDTO[]> {
        return this.http.get<CriarListDTO[]>(`${API_CONFIG.baseUrl}/exercicios`);
    }
}
