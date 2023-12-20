import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  serverUrl="http://localhost:8080"

  constructor(private http : HttpClient){ };

  getRoles(){
    return this.http.get(`${this.serverUrl}/auth/getRoles`)
  }
}
