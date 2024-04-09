import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../configuration';
import { DefaultUrlSerializer, Params } from '@angular/router';

@Injectable()
export class passengerService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private config: Configuration) { }

  //   newEntryUser(userInput,inputParameter) {
      // debugger;
  //     const serializer = new DefaultUrlSerializer();
  //     const paramSerializer = serializer.parse('');
  //     paramSerializer.queryParams = inputParameter;
  //     const params = serializer.serialize(paramSerializer);
  //     return this.http.post(this.config.newEntryUser + params, JSON.stringify(userInput), this.httpOptions);
  //   }
  getPassengerList(inputParameter: { [x: string]: any; token?: any; days?: any; },filt: string) {
    // debugger;
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.getPassengerDetail +'/'+filt+ params, this.httpOptions);
  }

  getInformedRders(inputParameter: string | number) {
    // debugger;
    // const serializer = new DefaultUrlSerializer();
    // const paramSerializer = serializer.parse('');
    // paramSerializer.queryParams = inputParameter;
    // const params = serializer.serialize(paramSerializer);
    // return this.http.get(this.config.getRidersDetail + "/inputParameter", this.httpOptions);
    return this.http.get(this.config.getRidersDetail + '/' + inputParameter);
  }

  update(inputParameter: { firstname: any; lastname: any; phone_no?: any; city: string; balance?: any; Phone_no?: any; }, id: string) {
    debugger;
    // const serializer = new DefaultUrlSerializer();
    // const paramSerializer = serializer.parse('');
    // paramSerializer.queryParams = inputParameter;
    // const params = serializer.serialize(paramSerializer);
    // return this.http.get(this.config.updatePassenger+ "/" +id + params, this.httpOptions);    
    return this.http.put(this.config.updatePassenger + "/" + id, JSON.stringify(inputParameter), this.httpOptions);

  }

  addRiders(inputParameter: { firstname: any; lastname: any; email: any; password: any; phone_no: any; city: any; user_type: string | number; balance?: any; }) {
    debugger;
    return this.http.post(this.config.addPassenger, JSON.stringify(inputParameter), this.httpOptions);

  }

  addDriver(inputParameter: { firstname: any; lastname: any; city: string; phone_no: any; email: any; password: any; licence_no: any; vehicle_type?: string; holder_name: any; user_type: string; supervisor: any; account_number: any; bank_name: any; location: any; payment_email: any; IFSC_code: any; licence_docu?: { filetype: any; fileurl: any; status: string; file_name: string; }; insurance_docu?: { filetype: any; fileurl: any; status: string; file_name: string; }; vehicle_docu?: { filetype: any; fileurl: any; status: string; file_name: string; }; multi_docu?: { filetype: any; fileurl: any; status: string; file_name: string; }; report?: { filetype: any; fileurl: any; status: string; file_name: string; }; }) {
    debugger;
    return this.http.post(this.config.addDriver, JSON.stringify(inputParameter), this.httpOptions);
  }
  schedulePush(inputParameter: { sendDate: any; title: any; textBody: any; riders: number; drivers: number; udrivers: number; token: any; })
  {
  debugger;
  return this.http.post(this.config.addSchedule,JSON.stringify(inputParameter),this.httpOptions);
  }

  getSingleDriver(id: string | number) {
    // debugger;
    // const serializer = new DefaultUrlSerializer();
    // const paramSerializer = serializer.parse('');
    // paramSerializer.queryParams = inputParameter;
    // const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.getSingleDriverDetail + "/" + id, this.httpOptions);
  }

  updateDriverAcc(inputParameter: { name?: any; account_no?: any; ifsc_code?: any; holder_name?: any; account_number?: any; bank_name?: any; location?: any; payment_email?: any; IFSC?: any; }, id: string) {
    debugger;
    return this.http.put(this.config.updateAccountDet + '/' + id, JSON.stringify(inputParameter), this.httpOptions);

  }
  getTripsList(_inputParameter: {
      token: any; // const params = serializer.serialize(paramSerializer);
      // const params = serializer.serialize(paramSerializer);
      // return this.http.get(this.config.updatePassenger+ "/" +id + params, this.httpOptions);    
      fromDate: any; toDate: any;
    }, id: number) {
    if (id == 1)
      return this.http.get(this.config.getTripsDetail, this.httpOptions);
    else if (id == 2)
      return this.http.get(this.config.getTripsDetailupcoming, this.httpOptions);
    else
      return this.http.get(this.config.getTripsDetailpast, this.httpOptions);
  }
  getReferralLists()
  {
   return this.http.get(this.config.getReferrals,this.httpOptions);
  }
  getPartners()
  {
    return this.http.get(this.config.getPartners,this.httpOptions);
  }
  getSurgeParameters()
  {
    return this.http.get(this.config.getSurgeParameters,this.httpOptions);
  }
  updateSurgeParameters(inputParameter: { hmr: any; hsvt: any; })
  {
  debugger;
  return this.http.put(this.config.updateSurgeParameters, JSON.stringify(inputParameter), this.httpOptions);
  }
  insertFeed(inputParameter: { // debugger;
      // const serializer = new DefaultUrlSerializer();
      // const paramSerializer = serializer.parse('');
      // paramSerializer.queryParams = inputParameter;
      // const params = serializer.serialize(paramSerializer);
      // return this.http.get(this.config.getRidersDetail + "/inputParameter", this.httpOptions);
      title: any; content: any; imageurl: any; datestamp: string; expires: number; date_expire: string;
    })
  {
    debugger;
    return this.http.post(this.config.insertFeed, JSON.stringify(inputParameter), this.httpOptions)
  }
  getFeeds()
  {
    debugger;
    return this.http.get(this.config.getFeeds,this.httpOptions);
  }
  
  getSingleTrips(id: string) {
    debugger;

    return this.http.get(this.config.getSingleTripsDetail + "/" + id, this.httpOptions);
  }

  delete(id: string) {
    debugger;
    return this.http.delete(this.config.getRidersDetail + '/' + id, this.httpOptions);

  }
  updateDriverStatus(inputParameter: { isBlock: string; is_active?: undefined; } | { is_active: number; isBlock?: undefined; }, id: string) {
    debugger;
    return this.http.put(this.config.updateDriverStatus + '/' + id, JSON.stringify(inputParameter), this.httpOptions);
  }
  getDriverTrans() {
    return this.http.get(this.config.getDriverTrans, this.httpOptions);
  }
  getDriverPaymentSingle(id: string, inputParameter: Params) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.getDriverPaymentSingle + "/" + id + params);
  }
  getDriverPaymentAdmin(id: string, inputParameter: Params) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.driverPaymentTransaction + "/" + id + params);
  }

  // aravi driver payment status
  updateDriverSettlements(id: string, inputParameter: { payment_status: number; }) {
    debugger;
    return this.http.put(this.config.driverPaymentPaid + '/' + id, JSON.stringify(inputParameter), this.httpOptions);
  }

  getRiderPaymentSingle(id: string | number, inputParameter: { [x: string]: any; token?: any; }) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.getRiderPaymentSingle + "/" + id + params);
  }
  documentUpdate(inputParameter: { filetype: any; driver_id: any; fileurl: any; file_name: any; }) {
    debugger;
    return this.http.post(this.config.documentUpdate, JSON.stringify(inputParameter), this.httpOptions);
  }
  blockDriverStatus(token: { [x: string]: any; token?: any; },inputParameter: { isBlock?: string | undefined; block_reason?: string; }, id: string) {
    debugger;
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = token;
    const params = serializer.serialize(paramSerializer);   
    return this.http.put(this.config.blockDriverStatus + '/' + id + params, JSON.stringify(inputParameter), this.httpOptions);
  }
  getTripsListReport(inputParameter: { [x: string]: any; token?: any; fromDate?: any; toDate?: any; year?: any; filter?: any; }) {    
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
      return this.http.get(this.config.getTripsListReport+params, this.httpOptions);    
  }
  getPassengerReportList(inputParameter: { [x: string]: any; token?: any; days?: any; year?: any; filter?: any; },filt: string) {
    // debugger;
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.getPassengerReportList +'/'+filt+ params, this.httpOptions);
  }

  // Admin paid the settelments to Driver
  updateAdminpaid(inputParameter: any) {
    debugger;
    return this.http.put(this.config.updateAdminpaid, JSON.stringify(inputParameter), this.httpOptions);
  }
  // Send Warning notification to driver
  sendWarnNotification(inputParameter: { title: string; description: string; user_id: any[]; },token: { [x: string]: any; token?: any; }) {        
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = token;
    const params = serializer.serialize(paramSerializer);   
    return this.http.put(this.config.notificationInactive + params, JSON.stringify(inputParameter), this.httpOptions);

    
  }
  getDriverPayableList() {
    return this.http.get(this.config.getDriverPayable, this.httpOptions);
  }
  getCashSettlementDet(id: string | number, inputParameter: { [x: string]: any; token?: any; }) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.driverCashSettlementDet + "/" + id + params);
  }
  updateCashPaid(id: string | number,inputParameter: { transaction_id: string; transaction_date: string; amount: string; },inputToken: { [x: string]: any; token?: any; }) {
    debugger;
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputToken;
    const params = serializer.serialize(paramSerializer);  
    return this.http.put(this.config.getDriverPayable+'/'+id+params, JSON.stringify(inputParameter), this.httpOptions);
  }
  getCashSettHistory(id: string | number, inputParameter: { [x: string]: any; token?: any; }) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.driverCashSettHistory + "/" + id + params);
  }
  getWithdrawReq(inputParameter: { [x: string]: any; token?: any; }) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.driverWithdrawReq + params);
  }
  getWithdrawReqtSing(id: string | number,inputParameter: { [x: string]: any; token?: any; }) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.WithdrawRequestTrip+'/'+id + params);
  }
  updateWithdrawRqPaid(id: string | number,inputParameter: { transaction_id: string; transaction_date: string; amount: string; },inputToken: { [x: string]: any; token?: any; }) {
    debugger;
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputToken;
    const params = serializer.serialize(paramSerializer);  
    return this.http.put(this.config.driverWithdrawReq+'/'+id+params, JSON.stringify(inputParameter), this.httpOptions);
  }
  getWithdrawHistorySingle(id: string | number,inputParameter: { [x: string]: any; token?: any; }) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.WithdrawHistoryList+'/'+id + params);
  }

  adminVerify(id: string,inputParameter: { is_verified: number; }, inputToken: { [x: string]: any; token?: any; }) {
    debugger;
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputToken;
    const params = serializer.serialize(paramSerializer);
    return this.http.put(this.config.updateAdminVerify + '/' + id, JSON.stringify(inputParameter), this.httpOptions);

  }
  getDriverWithdrawList(inputParameter: { [x: string]: any; token?: any; }) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.driverWithdrawList + params);
  }
  getWithdrawDetails(id: string | number,inputParameter: { [x: string]: any; token?: any; }) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.WithdrawDetails+'/'+id + params);
  }
  //Settlement
  getDriverSettlement(inputParameter: { [x: string]: any; token?: any; }) {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    paramSerializer.queryParams = inputParameter;
    const params = serializer.serialize(paramSerializer);
    return this.http.get(this.config.getDriverSettlement + params);
  }
  getSchedules()
  {
    return this.http.get(this.config.getSchedules,this.httpOptions);
  }
  getPartnerWithdraws()
  {
    return this.http.get(this.config.getPartnerWithdraws,this.httpOptions);
  }
  setPartnerPaidStatus(id: string)
  {
    return this.http.put(this.config.setPartnerPaid + '/' + id,this.httpOptions);
  }
  getCouponUse()
  {
    return this.http.get(this.config.getCouponUse,this.httpOptions);
  }
  getAccessLog()
  {
    return this.http.get(this.config.getAccessLog,this.httpOptions);
  }
}
