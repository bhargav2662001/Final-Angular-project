import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { AdminProComponent } from '../admin-pro/admin-pro.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'image', 'description', 'price', 'category', 'action'];
  dataSource!: MatTableDataSource<any>;
  paginator: any;
  sort: any;
  ngOnInit(): void {

    this.getProduct();

  }
  constructor(private dialog: MatDialog, private api: ApiService) { }
  openAddEditProduct() {

    const dialogRef = this.dialog.open(AdminProComponent);

    dialogRef.afterClosed().subscribe({

      next: (val) => {

        if (val) {

          this.getProduct();

        }

      }

    })

  }



  getProduct() {

    this.api.getProducts().subscribe({

      next: (res) => {

        this.dataSource = new MatTableDataSource(res);

        this.dataSource.sort = this.sort;

        this.dataSource.paginator = this.paginator;

      },

      error:

        console.log

    }

    );



  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();




    if (this.dataSource.paginator) {

      this.dataSource.paginator.firstPage();

    }

  }

  deleteProduct(id: number) {

    this.api.deleteProduct(id).subscribe({

      next: (res) => {



        alert("Product Deleted");

        this.getProduct();

      },

      error: console.log,

    });

  }




  openEditProduct(data: any) {

    const dialogRef = this.dialog.open(AdminProComponent, {

      data,

    });




    dialogRef.afterClosed().subscribe({

      next: (val) => {

        if (val) {

          this.getProduct();

        }

      },

    });

  }

}
