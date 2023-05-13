import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminProComponent } from './admin-pro/admin-pro.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {
    path:"home",
    component:HomeComponent,
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    AdminProComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule
  ]
})
export class AdminModule { }
