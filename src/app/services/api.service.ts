import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { env } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: env.KEY,
    });
    
    return this.httpClient.get(
      `https://api.github.com/users/${githubUsername}`, 
      { headers }
    );
  }
  
  getRepos(githubUsername: string,current_page: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: env.KEY,
    });
    const url = `https://api.github.com/users/${githubUsername}/repos`;
    const params = new HttpParams()
      .set('page', current_page.toString())
      .set('per_page', '8');
  
    return this.httpClient.get(url, { headers, params }).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }  

}
