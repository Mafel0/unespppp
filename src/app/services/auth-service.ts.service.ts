import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

interface ILogin {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceTsService {

  constructor(
    public http: HttpClient
  ) { }

  login(login: ILogin): Observable<any> {
    const url = 'http://127.0.0.1/back-end/api.php';

    let req: Observable<any>;

    req = this.http.post<any>(url, { ...login });

    return req;
  }

}
