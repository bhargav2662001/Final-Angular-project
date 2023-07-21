import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  doctor: boolean= false;

  constructor(private route: Router){}

  onTotalDoctorsClick(event :any): void{
    this.route.navigateByUrl("admin/home/tdoctor");
  }
onTotalPatientsClick():void{

}
onTotalAppointmentsClick():void{

}
}
