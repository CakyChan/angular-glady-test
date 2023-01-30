import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftApi } from '../interfaces/GiftApi';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private requestOptions = {
    headers: new HttpHeaders({'Authorization': 'tokenTest123'})
  }

  constructor(private http:HttpClient) { }

  searchCombinaison(amount: Number): Observable<GiftApi> {
    return this.http.get<GiftApi>('http://localhost:3000/shop/5/search-combination?amount=' + amount, this.requestOptions);
  }
}
