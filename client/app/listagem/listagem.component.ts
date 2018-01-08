import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { PainelComponent } from '../painel/painel.component';
//import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html' 
})
export class ListagemComponent { 

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(/*http: Http*/ service: FotoService ) {
        this.service = service;
        /*http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );*/
        this.service
            .lista()
            .subscribe( fotos => this.fotos = fotos,
                        erro => console.log(erro)
            );
    }

    remove(foto: FotoComponent, painel: PainelComponent) {
        //if(confirm('Confirma exclusão da foto?')) {
        this.service
            .remove(foto)
            .subscribe(
                () => {
                    /*let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice,1);*/
                    painel.fadeOut(() => {
                        let novasFotos = this.fotos.slice(0);
                        let indice = novasFotos.indexOf(foto);
                        novasFotos.splice(indice, 1);
                        this.fotos = novasFotos;
                        this.mensagem = 'Foto removida com sucesso';
                    });
                    }
              , erro => {
                    console.log(erro);
                    this.mensagem = 'Não foi possível remover a foto';
                }
            );
        //}
    }
}