import { environment } from './environments/environment';
export class Configuration {
    public APIUrl = environment.serverUrl + '/api';
    public APIUrl1 = environment.serverUrl;
    public APIUrl2 = environment.serverUrl + '/api/v1';

    // Team Settings and User Create
    public authorizeAPI = this.APIUrl1 + "/loginadmin";
    // public getteamsetting = this.APIUrl + "/team";
    // public updateusersetting = this.APIUrl + "/updateUserSetting";  
    // public getUserEdit = this.APIUrl + "/team";

    // Driver
    public getDriverDetail = this.APIUrl + "/driverView";
    public getAdminDetail = this.APIUrl + "/adminView";
    public getDriverInactiveDetail = this.APIUrl + "/driverViewInactive";
    public getPendingDetail = this.APIUrl + "/pendingDriver";
    public getCouponUse = this.APIUrl2 + "/view-coupon-use"

    // Passenger
    public getPassengerDetail = this.APIUrl + "/viewPassenger";
    public getRidersDetail = this.APIUrl1 + "/users";
    public updatePassenger = this.APIUrl1 + "/updateUser";
    public addPassenger = this.APIUrl1 + "/addAdmin";

    // Driver
    public addDriver = this.APIUrl1 + "/addDriver";
    public getSingleDriverDetail = this.APIUrl + "/singleDriverDetails";
    public addSchedule = this.APIUrl+ "/addNoteSchedule";
    public getSchedules = this.APIUrl2 + "/getSchedules";
    public getPartnerWithdraws = this.APIUrl + "/partnerWithdrReq";
    public setPartnerPaid = this.APIUrl2 + "/setPartnerPaid";

    public updateAccountDet = this.APIUrl1 + "/updateDriverAccount";
    public updateDriverStatus = this.APIUrl + "/updateDriverStatus";

    // Vehicle
    public getVehicleDetail = this.APIUrl + "/vehicle";
    public getSingleVehicleDetail = this.APIUrl + "/vehicleSingle";
    public updateVehicle = this.APIUrl + "/vehicleUpdate";
    public addVehicle = this.APIUrl + "/createVehicle";
    public deleteVehicle = this.APIUrl + "/vehicledelete";
    // Trips Details
    public getTripsDetail = this.APIUrl + "/tripsDetails";
    public getSingleTripsDetail = this.APIUrl + "/tripsDetailsSingle";

    public getTripsDetailupcoming = this.APIUrl + "/upcomingTrips";
    public getTripsDetailpast = this.APIUrl + "/pastTrips";
    public updateVehicleType = this.APIUrl + "/vehicle";

    // Driver Rating
    public getDriverReviewDetail = this.APIUrl + "/driverReview";
    public deletedriverReview = this.APIUrl + "/deletedriverReview";

    // profile details
    public getUserDetail = this.APIUrl + "/userProfile";
    public updateUserProfile = this.APIUrl + "/editProfile";
    public getAccessLog = this.APIUrl1 + "/getAccessLog";

    // Upload License
    public uploadLicense = this.APIUrl1 + "/uploadInsurance";
    public uploadImageLincense = this.APIUrl1 + "/uploadImageLincense";

    // Dashboard
    public getDashboardDetail = this.APIUrl + "/dashboard";
    public getChartDetail = this.APIUrl + "/adminViewChart";

    // reports
    public driverReportDetails = this.APIUrl + "/driverReports";
    public riderReportDetails = this.APIUrl + "/tripReports";
    // public driverRevenuesDetails = this.APIUrl + "/totalDriverRevenues";
    public driverRevenuesDetails = this.APIUrl + "/revenueReports";
    public getActiveDriverReport = this.APIUrl + "/driverActiveReports";
    public getActiveRiderReport = this.APIUrl + "/riderActiveReports";
    public getReferrals = this.APIUrl + "/referralReports"
    public getPartners = this.APIUrl1 + "/partners";
    public getSurgeParameters = this.APIUrl + "/getSurgeParameters";
    public updateSurgeParameters = this.APIUrl + "/updateSurgeParameters";

    // surge charge
    public addSurgePay = this.APIUrl + "/surge";
    public getallSurgecharge = this.APIUrl + "/surge";
    public deleteSurgecharge = this.APIUrl + "/surge";
    public getSingleSurcharge = this.APIUrl + "/surge";
    public editSurcharge = this.APIUrl + "/surge";
    public insertFeed = this.APIUrl +"/addFeed";
    public getFeeds = this.APIUrl + "/getFeeds";

    // Settlement
    public getDriverTrans = this.APIUrl + "/driverBankDetails";
    public getDriverPayments = this.APIUrl + "/driverPaymentView";
    public getDriverPaymentSingle = this.APIUrl + "/driverPaymentList";
    public driverPaymentPaid = this.APIUrl + "/driverPaymentPaid";
    public updateAdminpaid = this.APIUrl + "/updateAdminpaid";
    public driverPaymentTransaction = this.APIUrl + "/driverPaymentTransaction";
  
    public getRiderPayments = this.APIUrl + "/userPaymentView";
    public getRiderPaymentSingle = this.APIUrl + "/userPaymentList";

    public getDriverPayable = this.APIUrl2 + "/driverCash";
    public driverCashSettlementDet = this.APIUrl2 + "/driverCashTripList";
    public driverCashSettHistory = this.APIUrl2 + "/driverCashTripHistory";
    public driverWithdrawReq = this.APIUrl2 + "/withdrawRequest";
    public WithdrawRequestTrip = this.APIUrl2 + "/withdrawRequestTripList";
    public WithdrawHistoryList = this.APIUrl2 + "/withdrawRequestHistory";
    public driverWithdrawList = this.APIUrl2 + "/driverListAmount";
    public WithdrawDetails = this.APIUrl2 + "/viewDriveTrips";
    public addUserAccess = this.APIUrl1 + "/addUserAccess";

    // Website for upload documentation
    public uploadLogo = this.APIUrl1 + "/upload/images";
    public UploadAvatar = this.APIUrl1 + "/upload";
    public documentUpdate = this.APIUrl1 + "/documentUpdate";
    public externalImages = this.APIUrl1 + '/upload/images/external';

    // maps
    public OnlineDrivers = this.APIUrl + "/adminMapView";
    // map list
    public driverDetails = this.APIUrl + "/adminMapList";
    public getDriverCurrentStatus = this.APIUrl + "/getOnTripDriver";

    // forgot password
    public forgotPass = this.APIUrl1 + "/changepassword";

    public getDriverFilter = this.APIUrl + "/getDriverFilter";

    public blockDriverStatus = this.APIUrl + "/userBlock";

    public getRiderReviewDetail = this.APIUrl + "/riderReview";
    // Discount
    public getallDiscount = this.APIUrl2 + "/discount";
    public getDriverreportFilter = this.APIUrl + "/getDriverreport";
    public getTripsListReport = this.APIUrl + "/tripsListreport";
    public getDriverListReport = this.APIUrl + "/getDriverListreport";
    public getPassengerReportList = this.APIUrl + "/reportPassenger";
    public getRevenueReportDetails = this.APIUrl + "/revenueReportsFilter";

    //settlements
   // public updateDriverPayments = this.APIUrl + "/updateDriverPayments";
   public updateSettings = this.APIUrl2 + "/adminSetting";
   public getDriverSettlement = this.APIUrl + "/driverSettlementHistory";
    
    // Notification send
    public notificationInactive = this.APIUrl + "/notificationInactive";

    public updateAdminVerify = this.APIUrl + "/adminVerified";
    newEntryUser!: string;

}