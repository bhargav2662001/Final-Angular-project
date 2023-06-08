import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'database';
  sideNavStatus:boolean=false;
  toggleSideNav() {
    this.sideNavStatus = !this.sideNavStatus;
  }
}
