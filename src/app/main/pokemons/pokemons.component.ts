import { Component, OnInit } from '@angular/core';
import { pokemons } from '../../../helpers/user';

interface pokemonInterface {
  data: any | object;
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  name: string | null = "";
  namePokemon: string = "";
  idPokemon: string = "";
  data: Array<any> = pokemons;
  nameImage: string = "";
  edit: boolean = false;
  pokemon: pokemonInterface = {
    data: ""
  };
  constructor() { }

  ngOnInit(): void {
    let nameTrainer = localStorage.getItem("name");
    this.name = nameTrainer;
  }

  handleDeletePokemon(id: string): void{
    for (let i =0; i < this.data.length; i++){
      if (this.data[i].id === id) {
         this.data.splice(i,1);
      }
    }
  }

  handleEdit(dataPokemon: string): void{
    this.pokemon.data = dataPokemon;
    this.edit = !this.edit;
  }

  handleBack(value: boolean){
    this.edit = value;
  }

  editNamePokemon(data: any){
    for (let i =0; i < this.data.length; i++){
      if (this.data[i].id === data[0]) {
         this.data[i].name = data[1];
      }
    }
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
