declare var require: any
import { Component, OnInit } from '@angular/core';
import { pokemons } from '../../../helpers/user';
let getPokemons = require('json-pokemon');

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemons: Array<any>;
  myPokemons: Array<any> = pokemons; 
  nameImage: string = "";
  constructor() {
    this.pokemons = [{}]
  }

  ngOnInit(): void {
    this.getListPokemon();
  }

  getListPokemon(){
    this.pokemons = getPokemons;
  }

  showNamePokemon(pokemon: string){
    this.myPokemons.push(pokemon);
  }

  imageGet(id: any){
    let img = id;
    if(img<10){
      this.nameImage = '00'+img;
      return this.nameImage;
    }else if(img<100){
      this.nameImage = '0'+img;
      return this.nameImage;
    }else{
      this.nameImage = img;
      return this.nameImage;
    }
  }
}
