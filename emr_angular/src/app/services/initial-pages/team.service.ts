import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamList!: Array<any>;
  team!: any;

  apiUrl: string = 'https://entra21emr.herokuapp.com/team';

  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<any> {

    return this.http.get<any>(this.apiUrl);
  }
}
