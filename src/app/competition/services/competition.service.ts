import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) { }

  getCompetitionList(): Observable<any> {
    return this.http.get<any>(`${environment.rootUrl}/competitions`);
  }

  getCompetitionBySeason(season: string): Observable<any> {
    return this.http.get<any>(`${environment.rootUrl}/competitions/${season}`);
  }

  getTeamsxCompetitionList(season: string): Observable<any> {
    return this.http.get<any>(`${environment.rootUrl}/competitions/${season}/teams`);
  }

}
