import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResult } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string = 'https://localhost:7287/api/Category/';

  constructor(private http: HttpClient) { }
  getSliderMenuCategories() {
    return this.http.get<IResult>(`${this.baseUrl}getSliderMenuCategories`)
  }
}
