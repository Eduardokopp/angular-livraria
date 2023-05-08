import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { book } from './model/book';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private apiUrl  = `${environment.apiUrl}/livraria`;

  HttpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  getBooks(): Observable<book[]> {
    return this.http.get<book[]>(this.apiUrl);
  }

}
