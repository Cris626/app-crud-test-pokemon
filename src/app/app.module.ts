import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/trainer-pokemon/login/login.component';
import { SignupComponent } from './components/trainer-pokemon/signup/signup.component';
import { MainComponent } from './main/main.component';
import { ListPokemonComponent } from './main/list-pokemon/list-pokemon.component';
import { PokemonsComponent } from './main/pokemons/pokemons.component';
import { PokemonSelectedComponent } from './components/pokemon-selected/pokemon-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    ListPokemonComponent,
    PokemonsComponent,
    PokemonSelectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule //  activa las propiedades angular en html
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
