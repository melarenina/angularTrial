import { Component, OnInit } from '@angular/core';

@Component({

  //selector: '[app-servers]', ---By atribute
  selector: 'app-servers', //---By Element
  //selector: '.app-servers', --- By class

  /*Uma opção
    template: `
    <app-server></app-server>
    <app-server></app-server>`*/ 
  
    templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
