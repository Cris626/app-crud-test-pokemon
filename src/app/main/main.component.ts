import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  flag: any;
  main: boolean;
  myPokemon: boolean;
  constructor() {
    this.flag = false;
    this.main = true; //  initial main
    this.myPokemon = false; //  initialMyPokemon
  }

  ngOnInit(): void {
    let storage = localStorage.getItem('auth');
    if(storage==="true"){
      this.flag = true;
      localStorage.setItem("auth", "true");
    }else{
      localStorage.setItem("auth", "false");
      this.flag = false;
    }
  }

  sessionOut(event: any){
    this.flag = event.auth;
  }
  
  handleMain(event: boolean){
    this.main = event;
    this.myPokemon = false;
  }

  handleMyPokemons(event: boolean){
    this.myPokemon = event;
    this.main = false;
  }

  handleAuthentication(event: boolean | object){
    this.flag = event;
    if(this.flag[0]){
      localStorage.setItem("auth", "true");
      alert("Datos correctos");
    }else{
      this.flag = false;
      localStorage.setItem("auth", "false");
      alert("Contraseña o usuario incorrecto");
    }
  }
}
