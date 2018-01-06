import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
//import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})
export class CadastroComponent { 

    service: FotoService;
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    //http: Http;

    constructor(/*http: Http, */ service: FotoService, fb: FormBuilder) {

        //this.http = http;
        this.service = service;
        
        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar(event) {
        event.preventDefault();
        console.log(this.foto);

        // cria uma instância de Headers
        //let headers = new Headers();
        // Adiciona o tipo de conteúdo application/json 
        //headers.append('Content-Type', 'application/json');

        /*this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Foto salva com sucesso');
            }, erro => {
                console.log(erro);
            });*/
        this.service
            .cadastra(this.foto)
            .subscribe( () => this.foto = new FotoComponent()
                      , erro => console.log(erro)
            );
    }
}