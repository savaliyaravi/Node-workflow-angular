import { Component } from '@angular/core';
import { httpFactory } from '@angular/http/src/http_module';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  
  constructor (private http: Http){

   
    
  }

  ngOnInit() {
    
    
  }
  
  

  
}
