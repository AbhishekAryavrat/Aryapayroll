import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders().set('Contant-Type', 'application/x-www-form-urlencoded');
  constructor(private http:HttpClient) { }

    getData():Observable<any>{
      let apiUrl = "http://43.224.1.48:8080/ondemand/ronak/applications/index?branch_id=1";
     return this.http.get(apiUrl).pipe(
        catchError(this.errorMgmt)
      )
    }

    
    sortData(sortingId: String,sortingValue:String):Observable<any>{
      let apiUrl = `http://43.224.1.48:8080/ondemand/ronak/applications/index?branch_id=1&sort_by=${sortingId}&sort=${sortingValue}`;
     return this.http.get(apiUrl).pipe(
        catchError(this.errorMgmt)
      )
    }



    
  //Create method for manage errors when request and return response from the server
  errorMgmt(error: HttpErrorResponse) {
    try {
      let errorMessage = '';
      //Handle client side error
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      }
      //Handle server side error
      else {
        errorMessage = `Error code:${error.status}\nMessage:${errorMessage}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
    catch (err) {
      console.log(err);
    }
  }

}
