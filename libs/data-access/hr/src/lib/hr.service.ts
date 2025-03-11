import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Employee } from './hr.models';

@Injectable({
  providedIn: 'root',
})
export class HrService {
  private apiUrl = 'https://dummyjson.com/users';


  async getData(): Promise<Observable<Employee[]>> {
    const data = await fetch(this.apiUrl).then(response => response.json());
    return data.users;

  }
}
