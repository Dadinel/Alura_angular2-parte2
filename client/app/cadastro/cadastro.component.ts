import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';
    //http: Http;

    constructor(/*http: Http, */ service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

        //this.http = http;
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            let id = params['id'];

            if(id) {
                this.service
                .buscaPorId(id)
                .subscribe( foto => this.foto = foto
                          , erro => console.log(erro)
                );
            }
        });
        
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
            .subscribe( (res) => {
                        this.mensagem = res.mensagem;
                        this.foto = new FotoComponent();
                        if(!res.inclusao) this.router.navigate(['']);
                        }
                      , erro => console.log(erro)
            );
    }
}