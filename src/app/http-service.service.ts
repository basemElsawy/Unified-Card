import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './auth/Models/userModel';
import { environment } from '../environments/environment.development';
// import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = environment.Base_Url;

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Developer : Eng/Basem Ashraf Mohammed
   * @param Api_Name
   * @param params
   * @returns
   */
  GetMethod(Api_Name: any, params?: any): Observable<any> | Observable<[]> {
    let headers = new HttpHeaders();
    if (!params) {
      return this.http.get<any>(this.baseUrl + Api_Name).pipe(
        map((data: any) => {
          return data;
        }),
        catchError((error): any => {
          return this.MyThrowError(error);
        })
      );
    }
    //here is the condition needed if the called get method api has to get specific data with a selected row
    else {
      return this.http.get<[]>(this.baseUrl + Api_Name + '/' + params).pipe(
        map((data: any) => {
          return data;
        }),
        catchError((error): any => {
          return this.MyThrowError(error);
        })
      );
    }
  }

  BasicGetMethod(Api_Name: string) {
    return this.http.get<any>(this.baseUrl + Api_Name);
  }

  /**
   * Developer : Eng/Basem Ashraf Mohammed
   * @param Api_name
   * @param body
   * @returns
   */
  PostMethod(Api_name: any, body: any) {
    return this.http.post<any>(this.baseUrl + Api_name, body).pipe(
      catchError((error): any => {
        return this.MyThrowError(error);
      })
    );
  }
  PostMethodToDownload(Api_name: any, body: any) {
    return this.http.post(this.baseUrl + Api_name, body, {
      responseType: 'blob' as 'blob',
    });
  }
  PostMethodWithPipe(Api_name: any, body: any) {
    return this.http.post(this.baseUrl + Api_name, body).pipe(
      catchError((error): any => {
        return this.MyThrowError(error);
      })
    );
  }

  MyThrowError(error: any): any {
    if (error.status == 400) {
      return throwError('حدث خطأ بالإدخال برجاء المحاولة مرة أخرى');
    } else if (error.status == 500) {
      return throwError('خطأ في الاتصال بالسيرفر');
    } else if (error.status == 404) {
      return throwError('لم يتم العثور على بيانات');
    } else if (error.status == 405) {
      return throwError('غير مسموح');
    } else if (error.status == 0) {
      return throwError('خطأ في الاتصال بالإنترنت ');
    } else if (error.status == 401) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return throwError('يرجى إعادة تسجيل الدخول');
    } else {
      return throwError(error.statusText);
    }
  }
}
