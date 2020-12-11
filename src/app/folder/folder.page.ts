import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuController, NavController} from '@ionic/angular';
import {CredenciaisDTO} from '../../models/credenciais.dto';
import {AuthService} from '../../services/auth.service';
import {ClienteService} from '../../services/domain/cliente.service';
import {clienteDTO} from "../../models/cliente.dto";

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
    public folder: string;
    listaClientes: clienteDTO[];
    credenciais: CredenciaisDTO = {
        email: '',
        senha: ''
    };
    erros: string [] = [];


    constructor(private activatedRoute: ActivatedRoute,
                public navCtrl: NavController,
                public clienteService: ClienteService,
                public auth: AuthService,
                public menu: MenuController) {
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        this.buscaTodosClientes();
    }

    private buscaTodosClientes() {
        this.clienteService.findAll().subscribe(value => {
            this.listaClientes = value;
        });
    }


    login() {
        this.validation();
    }

    loginSemCadastro() {
        this.navCtrl.navigateRoot('/categorias');
    }

    cadastra() {
        this.navCtrl.navigateRoot('/cadastro');
    }

    validation() {
        this.erros = [];
        this.listaClientes.forEach(value => {
            if (value.email === this.credenciais.email && '123' === this.credenciais.senha) {
                this.navCtrl.navigateRoot('/catlog');
            }else{
                this.erros.push('Email ou senha incorretos ');
            }
            if ('' === this.credenciais.email && '' === this.credenciais.senha) {
                this.erros.push('Por Favor insira suas credenciais');
            }
        });
        if (this.erros.length === 0) {
            this.navCtrl.navigateRoot('/catlog');
        }
    }

    ionViewWillEnter() {
        this.menu.enable(false);
    }

    ionViewDidLeave() {
        this.menu.enable(true);
    }
}
