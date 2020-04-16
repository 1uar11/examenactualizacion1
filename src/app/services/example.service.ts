import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private objectSource = new BehaviorSubject <{}>({});
  $getObejectSource = this.objectSource.asObservable();
  constructor() { }

  sendObjectSource(data:any){
    this.objectSource.next(data);
  }
}
