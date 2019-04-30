import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient) { }

  createContact(contactData){ //0. get data from comp.ts 
    console.log(contactData);
     
    //1 send the data to rest api 
    return this.http.post('https://jsonplaceholder.typicode.com/users', contactData)
            .pipe(map (resp =>{  //2. get resp from rest api
              console.log(resp);
              return resp; // 3. send it back to comp.ts 
            }));
    
  }


  getContacts(){
    //1 send the data to rest api 
    return this.http.get('https://jsonplaceholder.typicode.com/users')
            .pipe(map (resp =>{  //2. get resp from rest api
              console.log(resp);
              return resp; // 3. send it back to comp.ts 
            }));

  }

  getContactById(id){
    //1 send the data to rest api 
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
            .pipe(map (resp =>{  //2. get resp from rest api
              console.log(resp);
              return resp; // 3. send it back to comp.ts 
            }));

  }

}
