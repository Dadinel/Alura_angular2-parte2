import 'rxjs/add/operator/map';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routes';
import { AppComponent }   from './app.component';
import { ListagemComponent }   from './listagem/listagem.component';
import { CadastroComponent }   from './cadastro/cadastro.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { BotaoModule } from './botao/botao.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule, 
    PainelModule, 
    FotoModule,
    BotaoModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, ListagemComponent, CadastroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }