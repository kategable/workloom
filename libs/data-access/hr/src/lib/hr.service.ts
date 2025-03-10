import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HrService {
  private apiUrl = 'https://dummyjson.com/users';


  getData(): Observable<any> {
    return from(fetch(this.apiUrl).then(response => response.json()));
  }
}
