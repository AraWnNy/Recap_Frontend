import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://localhost:44324/api/cars/getallcarsdetails";

  getCarDetails():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
