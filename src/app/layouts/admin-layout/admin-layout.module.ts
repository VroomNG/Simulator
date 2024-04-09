import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '../shared/search/search.component';
import { TooltipModule } from 'primeng/tooltip';

import { ClipboardModule } from 'ngx-clipboard';
import { ChartModule } from 'primeng/chart';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputTextModule } from 'primeng/inputtext';
import { Button, ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

import { AdminAddComponent } from 'src/app/pages/admin-add/admin-add.component';
import { AdminAddQuestComponent } from 'src/app/pages/admin-addquest/admin-addquest.component';
import { AdminViewComponent } from '../../pages/admin-view/admin-view.component';
import { AdminViewQuestComponent } from 'src/app/pages/admin-view-quest/admin-view-quest.component';
import { AddQuestLocationComponent } from 'src/app/pages/add-quest-location/add-quest-location.component';
import { AdminViewAccessComponent } from 'src/app/pages/admin-view-access/admin-view-access.component';
import { AdminEditComponent } from '../../pages/admin-edit/admin-edit.component';
import { AdminQuestDetailsComponent } from 'src/app/pages/admin-quest-dtls/admin-quest-dtls.component';
import { VehicleTypeComponent } from '../../pages/vehicle-type/vehicle-type.component';
import { VehicleAddComponent } from '../../pages/vehicle-add/vehicle-add.component';
import { VehicleEditComponent } from '../../pages/vehicle-edit/vehicle-edit.component';

import {FileUploadModule} from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';

import { PartnersComponent } from '../../pages/partners/partners.component';
import { PartnersAddComponent } from '../../pages/partners-add/partners-add.component';
import { PartnersEditComponent } from '../../pages/partners-edit/partners-edit.component';

import { DriversAddComponent } from '../../pages/drivers-add/drivers-add.component';
import { DriversApprovedComponent } from '../../pages/drivers-approved/drivers-approved.component';
import { DriversPendingComponent } from '../../pages/drivers-pending/drivers-pending.component';
import { DriversRejectedComponent } from '../../pages/drivers-rejected/drivers-rejected.component';
import { DriversEditComponent } from 'src/app/pages/drivers-edit/drivers-edit.component';

import { RidersComponent } from '../../pages/riders/riders.component';
import { RidersAddComponent } from '../../pages/riders-add/riders-add.component';
import { RidersEditComponent } from 'src/app/pages/riders-edit/riders-edit.component';

import { TripsComponent } from '../../pages/trips/trips.component';
import { TripsUpcomingComponent } from '../../pages/trips-upcoming/trips-upcoming.component';
import { TripsPastComponent } from '../../pages/trips-past/trips-past.component';
import { TripsSettingsComponent } from '../../pages/trips-settings/trips-settings.component';

import { SettlementsComponent } from '../../pages/settlements/settlements.component';
import { SettlementsWithdrawRequestComponent } from '../../pages/settlements-withdraw-request/settlements-withdraw-request.component';
import { SettlementsWithdrawDetailsComponent } from '../../pages/settlements-withdraw-details/settlements-withdraw-details.component';
import { SettlementsPartnerWithdrawRequestsComponent } from '../../pages/settlements-partner-withdraw-requests/settlements-partner-withdraw-requests.component';

import { RatingsDriverComponent } from '../../pages/ratings-driver/ratings-driver.component';
import { RatingsRiderComponent } from '../../pages/ratings-rider/ratings-rider.component';
import { NotifyAddComponent } from '../../pages/notify-add/notify-add.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { MessageAddComponent } from '../../pages/message-add/message-add.component';
import { MessagesComponent } from '../../pages/messages/messages.component';
import { ReportsComponent } from '../../pages/reports/reports.component';
import { ReportsRefComponent } from '../../pages/reports-ref/reports-ref.component';
import { SurgeChargeComponent } from '../../pages/surge-charge/surge-charge.component';
import { SurgeAddComponent } from '../../pages/surge-add/surge-add.component';
import { DiscountComponent } from '../../pages/discount/discount.component';
import { DiscountAddComponent } from '../../pages/discount-add/discount-add.component';
import { DiscountCodeUseComponent } from '../../pages/discount-code-use/discount-code-use.component';
import { AppActionUninstallComponent } from '../../pages/app-action-uninstall/app-action-uninstall.component';
import { AppActionDriverVisibilityComponent } from '../../pages/app-action-driver-visibility/app-action-driver-visibility.component';
import { AppActionDriverSettingsComponent } from '../../pages/app-action-driver-settings/app-action-driver-settings.component';

import { VRInputComponent } from '../../layouts/shared/vr-input/vr-input.component';
import { VrAlertComponent } from '../../layouts/shared/vr-alert/vr-alert.component';
import { LoaderComponent } from '../../layouts/shared/loader/loader.component';
import { ButtonComponent } from '../shared/button/button.component';
import { VrDropdownComponent } from '../../layouts/shared/vr-dropdown/vr-dropdown.component';
import { SearchPipe } from 'src/app/helpers/search.pipe';

import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { SurgeEditComponent } from 'src/app/pages/surge-edit/surge-edit.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { TripMenuComponent } from 'src/app/pages/trip-menu/trip-menu.component';
import { VehiclesMenuComponent } from 'src/app/pages/vehicles-menu/vehicles-menu.component';
import { ReviewsMenuComponent } from 'src/app/pages/reviews-menu/reviews-menu.component';
import { ActivityLogComponent } from 'src/app/pages/activity-log/activity-log.component';
import { ExplorerMenuComponent } from 'src/app/pages/explorer-menu/explorer-menu.component';
import { AppActionsMenuComponent } from 'src/app/pages/app-actions-menu/app-actions-menu.component';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ChartModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    ToolbarModule,
    FileUploadModule,
    InputNumberModule,
    CheckboxModule,
    DialogModule,
    TooltipModule,
    GoogleMapsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    AdminAddComponent,
    AdminAddQuestComponent,
    AdminQuestDetailsComponent,
    AdminViewComponent,
    AdminViewAccessComponent,
    AdminEditComponent,
    AdminViewQuestComponent,
    AddQuestLocationComponent,
    VehicleTypeComponent,
    VehicleAddComponent,
    PartnersComponent,
    PartnersAddComponent,
    PartnersEditComponent,
    DriversAddComponent,
    DriversApprovedComponent,
    DriversPendingComponent,
    DriversRejectedComponent,
    RidersComponent,
    RidersAddComponent,
    TripsComponent,
    TripsUpcomingComponent,
    TripsPastComponent,
    TripsSettingsComponent,
    SettlementsComponent,
    SettlementsWithdrawRequestComponent,
    SettlementsWithdrawDetailsComponent,
    SettlementsPartnerWithdrawRequestsComponent,
    RatingsDriverComponent,
    RatingsRiderComponent,
    NotifyAddComponent,
    NotificationsComponent,
    MessageAddComponent,
    MessagesComponent,
    ReportsComponent,
    ReportsRefComponent,
    SurgeChargeComponent,
    SurgeAddComponent,
    DiscountComponent,
    DiscountAddComponent,
    DiscountCodeUseComponent,
    AppActionUninstallComponent,
    AppActionDriverVisibilityComponent,
    AppActionDriverSettingsComponent,
    VRInputComponent,
    VrAlertComponent,
    LoaderComponent,
    VrDropdownComponent,
    VehicleEditComponent,
    DriversEditComponent,
    RidersEditComponent,
    SurgeEditComponent,
    SearchPipe,
    UsersComponent,
    SearchComponent,
    ButtonComponent,
    TripMenuComponent,
    VehiclesMenuComponent,
    ReviewsMenuComponent,
    ActivityLogComponent,
    ExplorerMenuComponent,
    AppActionsMenuComponent,
  ]
})

export class AdminLayoutModule {}
