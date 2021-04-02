import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDto[] = [];

  constructor(private carService:CarService) {
    this.getCarDetails();
  }

  ngOnInit(): void {
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      if(response.success){
        this.carDetails = response.data;
      }
    });
  }

}
