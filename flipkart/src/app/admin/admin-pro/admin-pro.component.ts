import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-admin-pro',
  templateUrl: './admin-pro.component.html',
  styleUrls: ['./admin-pro.component.css']
})
export class AdminProComponent implements OnInit {
 
  displayedColumns: string[] = ['id', 'name', 'image', 'about item','price', 'quantity', 'total','action'];
  productForm: FormGroup;



  constructor(private fb: FormBuilder, private ps:ApiService,private dialogRef: MatDialogRef<HomeComponent>,

    @Inject(MAT_DIALOG_DATA) public data:any) {

    this.productForm = this.fb.group({

      name: '',
        image: '',

      aboutitem: '',

      price: '',
      quantity:'',

      total:'',

      action: ''



    })

  }

  ngOnInit(): void {

    this.productForm.patchValue(this.data);

  }

  onFormSubmit() {

    if (this.productForm) {

      if (this.data) {

        this.ps.updateProduct(this.data.id, this.productForm.value).subscribe({

          next:(val:any) => {

            alert("Products updated successfully");

            this.dialogRef.close(true);

          },

          error: (err: any) => {

            console.error(err);

          },

        });

      }

      else {

        this.ps.addProduct(this.productForm.value).subscribe({

          next: (val: any) => {

            alert("Products added successfully")

            this.dialogRef.close(true);

          },

          error: (err: any) => {

            console.error(err);

          },

        });

      }

    }

  }

}

