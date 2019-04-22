import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maths';
  name:string;
  result:object;
  searchValue:string = '';

  constructor(private data:DataService){
    //this.name='fg';
  }
  
  
  getData(city){
    this.data.getFact(city).subscribe((d)=>{
      this.result=d;
      console.log(d);
    },
    (error)=>console.log(error));
  }
}
