import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discipline } from './discipline';

@Injectable({
  providedIn: 'root'
})

export class DisciplineService {
  apiUrl = 'http://localhost:3000/disciplines';

  constructor(private http: HttpClient) { }

  getAllDisciplines(): Observable<Discipline[]> {
    return this.http.get<Discipline[]>(this.apiUrl);
  }

  save(discipline: Discipline): Observable<Discipline> {
    return this.http.post<Discipline>(this.apiUrl, discipline);
  }

  delete(discipline: Discipline): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${discipline.id}`);
  }

  update(discipline: Discipline): Observable<Discipline> {
    return this.http.put<Discipline>(`${this.apiUrl}/${discipline.id}`, discipline);
  }
}
