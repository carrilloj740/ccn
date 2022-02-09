import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient, private authService : AuthService) {}

  request (method : string, url : string, body? : any) : Observable<any>{
    return from(new Promise ((resolve,reject) => {
      this.authService.getAccessToken()
      .then(token => {
        let observ : Observable<any>;
        if(this.http[method].length > 2) // IF METHOD REQUIRES MORE THAN 2 PARAMETERS => (url,body,headers). Ex: post,put,update
          observ = this.http[method](url, body, {
            headers : {"x-cog-a-token":token}
          })

        else // ELSE REQUIRES ONLY 2 PARAMETERS => (url,headers). Ex. get,delete
          observ = this.http[method](url, {
            headers : {"x-cog-a-token":token}
          })
          
        observ.subscribe({
          next : response => {
            resolve(response);
          },
          error : err => {
            reject(err)
          }
        });
      })
    }))
  }
}
