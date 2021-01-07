import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb(){
    const heroes=[
      {id:1,name:"shubham",age:10   },
      {id:2,name:"ashish",age:11  },
      {id:3,name:"suvin",age:12  },
      {id:4,name:"hariom",age:13   },
  
  ];
  return heroes;

  }
}