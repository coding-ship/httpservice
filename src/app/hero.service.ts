import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Hero} from './hero';
import { HttpHeaders } from '@angular/common/http';

import {  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  // private heroesUrl = 'api/heroes';  // URL to web api

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  private url='api/heroes';
  constructor( private http:HttpClient
    ) {  }
   

  getall():Observable<Hero[]>{
return this.http.get<Hero[]>(this.url) ;
  }

 
}
