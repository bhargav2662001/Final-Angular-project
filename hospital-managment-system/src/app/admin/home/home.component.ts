import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  doctor: boolean= false;

  constructor(private route: Router){}

  logout(): void {
    // remove session data
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("usertype");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");

    // navigate to login page
    this.route.navigate(['login']);
  }
  onTotalDoctorsClick(event :any): void{
    this.doctor = true;
    this.route.navigateByUrl("admin/home/tdoctor");
  }
onTotalPatientsClick():void{

}
onTotalAppointmentsClick():void{

}
}
