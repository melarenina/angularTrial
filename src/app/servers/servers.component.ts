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
  
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() { 

     //After 2000 miliseconds (2 seconds), I want to execute a function
     //Pass the arguments on the () and describes the function on the {}
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);{}

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Server Name is: ' + this.serverName;
    this.serverCreated = true;
    
    //Including the new server into the array
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
