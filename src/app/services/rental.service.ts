import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiGetDetailsUrl = "https://localhost:44324/api/rentals/getallrentalsdetails";
  constructor(private httpClient:HttpClient) { }

  getAllRentalsDetails():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiGetDetailsUrl);
  }
}
