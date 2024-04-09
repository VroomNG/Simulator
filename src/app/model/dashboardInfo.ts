export class dashboardInfo { 
    id!: number;
    title?:string;
    Number?: number;
    isThismonth?: boolean;
}


export interface IChart_data {
    January: number,
    February: number,
    March: number,
    April: number,
    May: number,
    June: number,
    July: number,
    August: number,
    September: number,
    October: number,
    November: number,
    December: number,
}
export interface IDashboard {
    riders: number
    drivers: number
    vehicles: number
    trips: number
    completedTrips: number
    trip_payment: number
    total_driverShared: number
    total_adminShared: number
  }
  