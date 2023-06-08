import { Component ,Input,OnInit} from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
@Input() sideNavStatus:boolean=false;
  list=[
  {
    number:'1',
    name:'home',
    icon:'fa-solid fa-house'
  },
  {
    number:'2',
    name:'My-Details',
    icon:'fa-solid fa-user'
  },
  {
    number:'3',
    name:'My-Team',
    icon:'fa-solid fa-users'
  },
  {
    number:'4',
    name:'Add-New',
    icon:'fa-solid fa-user-plus'
  },
  {
    number:'5',
    name:'Edit-Details',
    icon:'fa-solid fa-user-pen'
  },
  {
    number:'6',
    name:'Search',
    icon:'fa-solid fa-magnifying-glass'
  }

]
constructor(){}

ngOnInit():void{

}
}
