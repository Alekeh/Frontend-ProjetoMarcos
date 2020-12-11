import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import {ExercicioService} from '../../services/domain/exercicio.service';
import {ExercicioDTO} from '../../models/exercicio.dto';
import {StorageService} from '../../services/storage.service.';
import {API_CONFIG} from '../../config/api.config';
import { LocalUser } from 'src/models/local_user';
import { CriarListaService } from 'src/services/domain/criarlista.service';
import { CriarListDTO } from 'src/models/criarlist.dto';
import {CategoriaDTO} from "../../models/categoria.dto";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-exercicio',
    templateUrl: './editarlist.page.html',
    styleUrls: ['./editarlist.page.scss'],
})
export class EditarlistPage implements OnInit {
    itens: CriarListDTO[];
    items: ExercicioDTO[];
    id: any;
    imgUrl: string = API_CONFIG.imgBaseUrl;

        editarCategoria: CategoriaDTO = {
            id: null,
            nome: '',
            tipo: ''
        };
    constructor(public navCtrl: NavController,
                public storage: StorageService,
                public criarlistService: CriarListaService,
                public route: ActivatedRoute) {
    }
    ngOnInit() {
        this.editarCategoria.id = this.route.snapshot.paramMap.get('id');
        this.criarlistService.findAll().subscribe(response => {this.itens = response; },
            error => {
                console.log(error);
            });
        this.criarlistService.findAll().subscribe( response => {this.items = response; },
        error => {
            console.log(error);
        } );
    }
    editCategoria() {
        console.log(this.editarCategoria);
        this.criarlistService.update(this.editarCategoria).subscribe(request => {
            if (request){
                this.navCtrl.navigateRoot('/catlog');
            }
    });
    }
}
