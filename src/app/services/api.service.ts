import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint:String = "http://43.224.1.48:8080/ondemand/ronak";
   jwtToken:String = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoic3VwZXJhZG1pbiIsImRhdGUiOiIyMDE5LTA2LTA2In0.hErPL1-DP6ELm0vL3AeRWr09n5sv4R34_rej8zU_8HU";
  headers = new HttpHeaders().set('Contant-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    let apiUrl = `${this.endpoint}/applications/index?jwt_token=${this.jwtToken}`;
    return this.http.get(apiUrl).pipe(
      catchError(this.errorMgmt)
    )
  }


  sortData(sortingId: String, sortingValue: String): Observable<any> {
    console.log("abhis", sortingValue);
    console.log( sortingId);
    let apiUrl = `${this.endpoint}/applications/index?jwt_token=${this.jwtToken}&user_id_sort=${sortingId}.${sortingValue}`;
    return this.http.get(apiUrl).pipe(
      catchError(this.errorMgmt)
    )
  }



  getDashboardData():Observable<any>{
    try{
      let api = `${this.endpoint}/branch/branch/index?jwt_token=${this.jwtToken}`;
      return this.http.get(api).pipe(

      )
    }catch(err){
      console.log(err.message);
    }
  }
    deleteNotification(alertId:String):Observable<any>{
      try{
        let apiUrl = `${this.endpoint}/branch/branch/deleteuseralert?jwt_token=${this.jwtToken}&alert_id=${alertId}`;
        return this.http.get(apiUrl).pipe(
          catchError(this.errorMgmt)
        )
      }catch(err){
        console.log(err.message);
      }
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
