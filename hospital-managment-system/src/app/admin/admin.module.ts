import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { TdoctorComponent } from './tdoctor/tdoctor.component';
import { TpatientsComponent } from './tpatients/tpatients.component';
import { TappointmentsComponent } from './tappointments/tappointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsegComponent } from '../doctorseg/doctorseg.component';
import { PatientComponent } from '../patient/patient.component';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { HelpAdminComponent } from '../help-admin/help-admin.component';

const route:Routes=[
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"",
        component:DashboardComponent
      },
      {
        path:'tdoctor',
        component:TdoctorComponent
      }  ,
      {  path:"doctor-segment",  component: DoctorsegComponent },
      {path:"patient",component:PatientComponent}  ,
      {path:"appointments",component:AppointmentsComponent},
      {path:"help",component:HelpAdminComponent},
    ]
  },
  
]

@NgModule({
  declarations: [
    HomeComponent,
    TdoctorComponent,
    TpatientsComponent,
    TappointmentsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),    
    MaterialModule,
  ]
})
export class AdminModule { }
