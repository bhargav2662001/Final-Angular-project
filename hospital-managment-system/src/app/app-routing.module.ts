import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { TdoctorComponent } from './admin/tdoctor/tdoctor.component';
import { DoctorsegComponent } from './doctorseg/doctorseg.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HelpAdminComponent } from './help-admin/help-admin.component';


const routes: Routes = [

  // LOGIN Layout
// {
//  path:'',
//  component:loginLAYOUT,
//  children:[{
//   path:'',
//   component:loginCOMPONENT
//  }]

//  } ,
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'doctor-dashboard', component:DoctorDashboardComponent},
  {path:'tdoctor',component:TdoctorComponent},
  {path:'doctorseg',component:DoctorsegComponent},
  {path:'patient',component:PatientComponent},
  {path:"appointments",component:AppointmentsComponent},
  {path:"help", component:HelpAdminComponent},
  
  {
    path:'admin',
    loadChildren: () => import("./admin/admin.module").then((m)=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
