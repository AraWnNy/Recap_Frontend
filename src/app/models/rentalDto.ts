export interface RentalDto{
    id:number;
    carId:number;
    customerName:string;
    customerSurname:string;
    customerMail:string;
    customerCompany:string;
    carBrand:string;
    carModel:string;
    dailyRentPrice:number;
    rentDate:number;
    returnDate:number;
}