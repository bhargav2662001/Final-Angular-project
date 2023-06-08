import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { MyteamComponent } from './myteam/myteam.component';
import { AddnewComponent } from './addnew/addnew.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MydetailsComponent,
    MyteamComponent,
    AddnewComponent,
    EditdetailsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
