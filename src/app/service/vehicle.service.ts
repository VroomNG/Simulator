import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IVehicleType, addVehicle } from '../model/vehicleInfo';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

  addVehicle(addVehicleForm:any){
    return this.http.post(`${this.baseUrl}/api/v1/createVehicle`, addVehicleForm)
  }

  getVehicles(): Observable<IVehicleType[]>{
    return this.http.get<IVehicleType[]>(`${this.baseUrl}/api/v1/vehicle`);
  }

  getSingleVehicle(vehicleId: any): Observable<IVehicleType[]>{
    return this.http.get<IVehicleType[]>(`${this.baseUrl}/api/v1/vehicleSingle/${vehicleId}`);
  }

  deleteVehicleType(vehicleId:any) {
    // const userId = admin.id; // Assuming 'id' is the property that represents the user ID
    return this.http.delete(`${this.baseUrl}/api/v1/vehicledelete/${vehicleId}`);
  }
  updateVehicle(editVehicleForm: object, vehicleId:any) {
    // const userId = admin.id; // Assuming 'id' is the property that represents the user ID
    return this.http.put(`${this.baseUrl}/api/v1/vehicleUpdate//${vehicleId}`, editVehicleForm);
  }

}


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
// import { Configuration } from '../../configuration';
// import { DefaultUrlSerializer } from '@angular/router';
// import { Observable } from 'rxjs';
// // import {RequestOptions} from '@angular/http';  
// // import { map } from 'rxjs/operators'; 
// import { map } from 'rxjs/operators';
// // import 'rxjs/add/operator/map'
// @Injectable()
// export class vehicleService {
//   readonly httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   };
//   constructor(private http: HttpClient, private config: Configuration) { }

//   //   newEntryUser(userInput,inputParameter) {
//   //     // debugger;
//   //     const serializer = new DefaultUrlSerializer();
//   //     const paramSerializer = serializer.parse('');
//   //     paramSerializer.queryParams = inputParameter;
//   //     const params = serializer.serialize(paramSerializer);
//   //     return this.http.post(this.config.newEntryUser + params, JSON.stringify(userInput), this.httpOptions);
//   //   }
//   getVehicleList(inputParameter: { [x: string]: any; token?: any; }) {
//     // debugger;
//     const serializer = new DefaultUrlSerializer();
//     const paramSerializer = serializer.parse('');
//     paramSerializer.queryParams = inputParameter;
//     const params = serializer.serialize(paramSerializer);
//     return this.http.get(this.config.getVehicleDetail + params, this.httpOptions);
//   }

//   getSingleVehicle(id: string | number) {
//     // debugger;
//     // const serializer = new DefaultUrlSerializer();
//     // const paramSerializer = serializer.parse('');
//     // paramSerializer.queryParams = inputParameter;
//     // const params = serializer.serialize(paramSerializer);
//     return this.http.get(this.config.getSingleVehicleDetail + "/" + id, this.httpOptions);
//   }
//   updateVehicle(inputParameter: {
//       vehicle_type: any; trip_type: string; per_km_rate: any; minimum_fare: any; commission: any; available_seat: any; cancel_charge_driver: any; cancel_charge_rider: any; isactive: string; description: any; per_minute_rate: any; base_fare: any; tolls_fees: any; peek_hour_fare: any;
//       // import {RequestOptions} from '@angular/http';  
//       // import { map } from 'rxjs/operators'; 
//       make: any; model: any; year: any; tax_percent: any;
//       // import { map } from 'rxjs/operators'; 
//       per_km_rate_share: any; per_minute_rate_share: any; minimum_fare_share: any; base_fare_share: any; promo_status: any; max_fare_value: any;
//     }, id: string) {
//     debugger;
//     return this.http.put(this.config.updateVehicle + '/' + id, JSON.stringify(inputParameter), this.httpOptions);

//   }
//   addVehicle(inputParameter: {
//       vehicle_type: any; trip_type: string; per_km_rate: any; minimum_fare: any; commission: any; available_seat: any; cancel_charge_driver: any; cancel_charge_rider: any; isactive: string; description: any; per_minute_rate: any; base_fare: any; tolls_fees: any; peek_hour_fare: any;
//       // import {RequestOptions} from '@angular/http';  
//       // import { map } from 'rxjs/operators'; 
//       make: any; model: any; year: any; tax_percent: any;
//       // import { map } from 'rxjs/operators'; 
//       per_km_rate_share: any; per_minute_rate_share: any; minimum_fare_share: any; base_fare_share: any;
//     }) {
//     debugger;
//     return this.http.post(this.config.addVehicle, JSON.stringify(inputParameter), this.httpOptions);

//   }
//   deleteVehicle(id: string) {
//     debugger;
//     return this.http.delete(this.config.deleteVehicle + '/' + id, this.httpOptions);

//   }
//   updateVehicleType(inputParameter: { vehicle_type_id: string; }, id: string) {
//     debugger;
//     return this.http.put(this.config.updateVehicleType + '/' + id, JSON.stringify(inputParameter), this.httpOptions);
//   }

//   postFile(fileToUpload: File): Observable<boolean> {
//     // postFile(id,fileToUpload) {
//     debugger;
//     // const endpoint = '/uploads/imageLin.png';

//     let headersconf = new HttpHeaders();
//     // headersconf.append('Content-Type', 'multipart/form-data');
//     headersconf.append('Content-Type', 'undefined');

//     const formData: FormData = new FormData();
//     formData.append('fileKey', fileToUpload, fileToUpload.name);

//     // return this.http.post(this.config.uploadLicense + '/' + id , JSON.stringify(formData), this.httpOptions);   
//     return this.http
//       .post(this.config.uploadLicense, formData, { headers: headersconf })

//       .pipe(
//         //   map((res) => res.data)),
//         //   catchError(error => Observable.of(null))
//         // );
//         map(() => { return true; })
//       );
//   }

//   // postFile(subUri: string, id: number, fileToUpload: File): Observable<any> {
//   //   const formData: FormData = new FormData();
//   //   formData.append('file', fileToUpload, fileToUpload.name);
//   //   formData.append('photoalbum_id', id.toString());
//   //   // ... some other .append()

//   //   const customHeaders = new HttpHeaders({
//   //     // 'Authorization': 'Bearer' + localStorage.getItem('token'),
//   //     'Content-Type': 'multipart/form-data',
//   //     'Accepted-Encoding': 'application/json'
//   //   });

//   //   const customOptions = {
//   //     headers: customHeaders,
//   //     reportProgress: true,
//   //   };

//   //   const req = new HttpRequest('POST', this.config.uploadLicense, formData, customOptions);

//   //   // Call HttpClient.request with an HttpRequest as only param to get an observable of HttpEvents
//   //   return this.http.request(req)
//   //     .pipe(
//   //       map((event: HttpEvent<any>) => this.getEventMessage(event)),
//   //       catchError(this.handleError));
//   // }

//   // private getEventMessage(event: HttpEvent<any>) {
//   //   // We are now getting events and can do whatever we want with them!
//   //   console.log(event);
//   // }

//   uploadFiletoServer(file: File, staffId: string | number, filetype: string, leaveId: any) {
//     const headertxt = new HttpHeaders();
//     // const baseUrl = this.config.uploadLicense + '/' + staffId + '/' + filetype ;
//     const baseUrl = this.config.uploadImageLincense + '/' + staffId;
//     const formData: FormData = new FormData();
//     formData.append('file', file);
//     const req = new HttpRequest('POST', `${baseUrl}`, formData, {
//       reportProgress: true,
//       responseType: 'json',
//       headers: headertxt
//     });
//     return this.http.request(req);
//   }

// }
