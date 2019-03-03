import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase:string=environment.api;
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(`${this.urlBase}/users`);
  }
}
