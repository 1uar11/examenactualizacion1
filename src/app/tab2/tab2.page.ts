import { Component, NgModule } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usario:any;

  constructor(private exampleService:ExampleService) {}

  ngOnInit(){
    this.exampleService.$getObejectSource.subscribe(data => {
    console.log(data) 
    this.usario = data;})
  }

}
