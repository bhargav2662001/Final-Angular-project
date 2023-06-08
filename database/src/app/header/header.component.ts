import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean=false;
  
  ngOnInit(): void {
    
  }
  sideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  logout(): void {
    // Add your logout logic here
    console.log('Logout button clicked');
  }
}
