import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
    serverId = 10;
    serverStatus = 'offline';

    constructor(){
        //If the number generated is bigger than 0.5, set the status as online. Otherwise, set as offline.
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}