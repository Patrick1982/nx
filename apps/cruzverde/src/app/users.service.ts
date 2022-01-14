import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({

  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData() {
    let url = "http://localhost:3333/api";
    console.log(11111)
    return this.http.get(url);
  }
}
