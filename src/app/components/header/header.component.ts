import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sessionExit = new EventEmitter;
  @Output() mainPokemons = new EventEmitter;
  @Output() myPokemons = new EventEmitter;
  constructor() {
    
  }

  ngOnInit(): void {
  }

  logout(){
    this.sessionExit.emit({ auth: false })
    localStorage.setItem("auth", "false")
    alert('Cerró sesión')
  }

  handleMainPokemons(){
    this.mainPokemons.emit(true)
  }

  handleMyPokemons(){
    this.myPokemons.emit(true)
  }
}
