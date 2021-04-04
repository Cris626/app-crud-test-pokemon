import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/trainer-pokemon/login/login.component';
import { PokemonsComponent } from './main/pokemons/pokemons.component';

// const routes: Routes = [{
//   path: 'pokemons', component: PokemonsComponent
// }];
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
