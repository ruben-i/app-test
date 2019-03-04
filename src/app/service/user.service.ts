import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { UserModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase:string=environment.api;
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(`${this.urlBase}/users`);
  }
  
  getUserById(id:string){
    return this.http.get(`${this.urlBase}/users/${id}`);
  }

  save(user:UserModel){
    return this.http.post(`${this.urlBase}/users/`,user);
  }

  update(user:UserModel){
    return this.http.put(`${this.urlBase}/users/${user.id}`,user);
  }

  delete(id:string){
    return this.http.delete(`${this.urlBase}/users/${id}`);
  }

}
