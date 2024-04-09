import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IMapList } from '../model/maps';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }
   getMapList(): Observable<IMapList[]>{
            return this.http.get<IMapList[]>(`${this.baseUrl}/api/v1/adminMapList`);
          }
 
}


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment.prod';
// import { IMapList } from '../model/maps';
// // import { Configuration } from '../../configuration';
// // import { DefaultUrlSerializer } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable()
// export class MapService {
//     // readonly httpOptions = {
//     //     headers: new HttpHeaders({
//     //         'Content-Type': 'application/json'
//     //     })
//     // };
//     private baseUrl = environment.serverUrl

//     constructor(private http: HttpClient,
//         //  private config: Configuration
//          ) { }

//          getMapList(): Observable<IMapList[]>{
//             return this.http.get<IMapList[]>(`${this.baseUrl}/api/v1/adminMapList`);
//           }
//     // getMapsList(inputParameter: { [x: string]: any; token?: any; }) {
//     //   //  debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.OnlineDrivers + params , this.httpOptions);
//     // }

//     // getdriverList(inputParameter: { [x: string]: any; token?: any; }){
//     //     debugger;
//     //     const serializer = new DefaultUrlSerializer();
//     //     const paramSerializer = serializer.parse('');
//     //     paramSerializer.queryParams = inputParameter;
//     //     const params = serializer.serialize(paramSerializer);
//     //     return this.http.get(this.config.driverDetails + params , this.httpOptions);
//     // }

// }