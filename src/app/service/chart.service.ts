import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IChart_data } from '../model/dashboardInfo';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

  getChartData(): Observable<IChart_data[]>{
    return this.http.get<IChart_data[]>(`${this.baseUrl}/api/v1/adminViewChart`);
  }
  
}


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// // import { Configuration } from '../../configuration';
// import { environment } from 'src/environments/environment.prod';
// import { IChart_data } from '../model/dashboardInfo';
// // import { DefaultUrlSerializer, Params } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable()
// export class chartService {

//     private baseUrl = environment.serverUrl
    
//     // readonly httpOptions = {
//     //     headers: new HttpHeaders({
//     //         'Content-Type': 'application/json'
//     //     })
//     // };

//     constructor(private http: HttpClient,
//         //  private config: Configuration
//          ) { }

//     getChartData(): Observable<IChart_data[]>{
//         return this.http.get<IChart_data[]>(`${this.baseUrl}/api/v1/adminViewChart`);
//     }

//     // getChartList(inputParameter: { [x: string]: any; token?: any; }) {
//     //     debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.getChartDetail + params, this.httpOptions);
//     // }

//     // getDriverReportDetails(inputParameter: { [x: string]: any; token?: any; year?: any; filter?: any; status?: any; }) {
//     //     debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.driverReportDetails + params, this.httpOptions);
//     // }


//     // getRiderReportDetails(inputParameter: { [x: string]: any; token?: any; year?: any; filter?: any; }) {
//     //     debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.riderReportDetails + params, this.httpOptions);
//     // }

//     // getDriverRevenue(inputParameter: Params) {
//     //     debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.driverRevenuesDetails + params, this.httpOptions);
//     // }
//     // getActiveDriverReport(inputParameter: { [x: string]: any; token?: any; year?: any; filter?: any; isactive?: string; isonline?: any; }) {
//     //     debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.getActiveDriverReport + params, this.httpOptions);
//     // }
//     // getActiveRiderReport(inputParameter: { [x: string]: any; token?: any; year?: any; filter?: any; }) {
//     //     debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.getActiveRiderReport + params, this.httpOptions);
//     // }


//     // // surge charge
//     // // add surge
//     // addSurgeCharge(inputParameter: { surgeSelected: any; charge: any; startTime: any; endTime: any; fromDate: any; city: string; chargeOption: number; ratio: string; latitude: any; longitude: any; }) {
//     //     debugger;
//     //     return this.http.post(this.config.addSurgePay, JSON.stringify(inputParameter), this.httpOptions);
//     // }

//     // // get all surge
//     // getallSurge(inputParameter: { [x: string]: any; token?: any; }) {
//     //     debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.getallSurgecharge + params, this.httpOptions);
//     // }

//     // updateSurgeCharge(inputParameter: { surgeSelected: string; charge: any; fromDate: any; startTime: any; endTime: any; city: string; chargeOption: number; ratio: string; latitude: any; longitude: any; }, id: string) {
//     //     return this.http.put(this.config.editSurcharge + "/" + id, JSON.stringify(inputParameter), this.httpOptions);
//     // }

//     // // delete status
//     // deleteSurge(id: string) {
//     //     debugger;
//     //     return this.http.delete(this.config.deleteSurgecharge + '/' + id, this.httpOptions);
//     // }


//     // // get all surge
//     // getsingleSurge(id: string | number) {
//     //     debugger;
//     //     return this.http.get(this.config.getSingleSurcharge + "/" + id, this.httpOptions);

//     // }
//     // // Discount details
//     // getallDiscount(inputParameter: { [x: string]: any; token?: any; }) {
//     //     debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.getallDiscount + params, this.httpOptions);
//     // }
//     // addDiscount(inputParameter: { discount_code: any; title: any; description: any; start_date: any; end_date: any; discount_percent: any; max_discount_amount: any; max_no_of_users: any; }) {
//     //     debugger;
//     //     return this.http.post(this.config.getallDiscount, JSON.stringify(inputParameter), this.httpOptions);
//     // }
//     // // get all surge
//     // getsingleDiscount(id: string | number) {
//     //     debugger;
//     //     return this.http.get(this.config.getallDiscount + "/" + id, this.httpOptions);

//     // }
//     // updateDiscount(inputParameter: { discount_code: any; title: any; description: any; start_date: any; end_date: any; discount_percent: any; max_discount_amount: any; max_no_of_users: any; }, id: string) {
//     //     return this.http.put(this.config.getallDiscount + "/" + id, JSON.stringify(inputParameter), this.httpOptions);
//     // }
//     // deleteDiscount(id: string) {
//     //     debugger;
//     //     return this.http.delete(this.config.getallDiscount + '/' + id, this.httpOptions);
//     // }
//     // getRevenueReportDetails(inputParameter: { [x: string]: any; token?: any; year?: any; filter?: any; }) {
//     //     debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.getRevenueReportDetails + params, this.httpOptions);
//     // }

// }