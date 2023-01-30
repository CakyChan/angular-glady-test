import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsCombinationsResult } from '../interfaces/CardsCombinationsResult';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private requestOptions = {
    headers: new HttpHeaders({'Authorization': 'tokenTest123'})
  }

  constructor(private http:HttpClient) { }

  searchCombinations(amount: Number): Observable<CardsCombinationsResult> {
    return this.http.get<CardsCombinationsResult>('http://localhost:3000/shop/5/search-combination?amount=' + amount, this.requestOptions);
  }
}
