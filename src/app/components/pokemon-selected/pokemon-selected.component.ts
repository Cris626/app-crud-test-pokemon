import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-selected',
  templateUrl: './pokemon-selected.component.html',
  styleUrls: ['./pokemon-selected.component.css']
})
export class PokemonSelectedComponent implements OnInit {
  @Input() namePokemon: object | any;
  @Output() handlePokemonBack = new EventEmitter;
  @Output() handlePokemonEdit = new EventEmitter;
  edit: boolean = false;
  nameImage: string = "";
  nameNewPokemon: string = "";

  constructor() { }
  ngOnInit(): void {
    this.imageGet();
  }

  imageGet(){
    let img = this.namePokemon.id;
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

  handleBack(){
    this.handlePokemonBack.emit(false)
  }

  handleEdit(name: string){
    this.edit = !this.edit;
    this.nameNewPokemon = name;
  }

  handleSavePokemon(id: string){
    let pokemonData = [id, this.nameNewPokemon];
    this.handlePokemonEdit.emit(pokemonData);
    this.edit = !this.edit;
  }

  handleCancel(){
    this.edit = !this.edit;
  }

}
