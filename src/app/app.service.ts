
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  api = "https://thronesapi.com/api/v2/"
  
  constructor(private http: HttpClient) { 
    
  }
  
  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.api + "Characters");
  }
}
