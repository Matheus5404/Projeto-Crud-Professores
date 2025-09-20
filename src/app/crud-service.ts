import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crud } from './crud';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  apiUrl = "http://localhost:3000/professores";
  
  constructor(private http: HttpClient) { }

    getAllProfessores(): Observable<Crud[]>{
    return this.http.get<Crud[]>(this.apiUrl);
  }

    save(professor: Crud): Observable<Crud> {
    return this.http.post<Crud>(this.apiUrl, professor);
  }

    delete(professor: Crud): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${professor.id}`);
  }

    update(professor: Crud): Observable<Crud> {
    return this.http.put<Crud>(`${this.apiUrl}/${professor.id}`, professor);
  }
  
}
