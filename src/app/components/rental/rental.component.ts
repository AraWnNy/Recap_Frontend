import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  
  rentalDetails:RentalDto[] = [];

  constructor(private rentalService: RentalService) {
    this.getRentalDetails();
  }

  ngOnInit(): void {}

  getRentalDetails() {
    this.rentalService.getAllRentalsDetails().subscribe((response) => {
      if(response.success){
        this.rentalDetails = response.data;
      }
    });
  }
}
