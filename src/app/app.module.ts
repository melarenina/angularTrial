import { ServerComponent } from './server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  //Imports allows us to add another modules into angular
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //Which components you shoudl be aware of the INDEX html file
  bootstrap: [AppComponent]
})

export class AppModule { }
