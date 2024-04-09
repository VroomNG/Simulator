import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AdminAddComponent } from 'src/app/pages/admin-add/admin-add.component';
import { AdminAddQuestComponent } from 'src/app/pages/admin-addquest/admin-addquest.component';
import { AdminViewComponent } from 'src/app/pages/admin-view/admin-view.component';
import { AdminViewQuestComponent } from 'src/app/pages/admin-view-quest/admin-view-quest.component';
import { AdminViewAccessComponent } from 'src/app/pages/admin-view-access/admin-view-access.component';
import { AdminEditComponent } from 'src/app/pages/admin-edit/admin-edit.component';
import { AddQuestLocationComponent } from 'src/app/pages/add-quest-location/add-quest-location.component';
import { AdminQuestDetailsComponent } from 'src/app/pages/admin-quest-dtls/admin-quest-dtls.component';

import { VehicleAddComponent } from 'src/app/pages/vehicle-add/vehicle-add.component';
import { VehicleTypeComponent } from 'src/app/pages/vehicle-type/vehicle-type.component';
import { VehicleEditComponent } from 'src/app/pages/vehicle-edit/vehicle-edit.component';

import { PartnersComponent } from '../../pages/partners/partners.component';
import { PartnersAddComponent } from '../../pages/partners-add/partners-add.component';
import { PartnersEditComponent } from 'src/app/pages/partners-edit/partners-edit.component';

import { DriversAddComponent } from '../../pages/drivers-add/drivers-add.component';
import { DriversApprovedComponent } from '../../pages/drivers-approved/drivers-approved.component';
import { DriversPendingComponent } from '../../pages/drivers-pending/drivers-pending.component';
import { DriversRejectedComponent } from '../../pages/drivers-rejected/drivers-rejected.component';

import { RidersComponent } from '../../pages/riders/riders.component';
import { RidersAddComponent } from '../../pages/riders-add/riders-add.component';
import { RidersEditComponent } from 'src/app/pages/riders-edit/riders-edit.component';
import { TripsComponent } from '../../pages/trips/trips.component';
import { TripsUpcomingComponent } from '../../pages/trips-upcoming/trips-upcoming.component';
import { TripsPastComponent } from '../../pages/trips-past/trips-past.component';
import { TripsSettingsComponent } from '../../pages/trips-settings/trips-settings.component';

import { SettlementsComponent } from 'src/app/pages/settlements/settlements.component';
import { SettlementsPartnerWithdrawRequestsComponent } from 'src/app/pages/settlements-partner-withdraw-requests/settlements-partner-withdraw-requests.component';
import { SettlementsWithdrawDetailsComponent } from 'src/app/pages/settlements-withdraw-details/settlements-withdraw-details.component';
import { SettlementsWithdrawRequestComponent } from 'src/app/pages/settlements-withdraw-request/settlements-withdraw-request.component';

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
import { SurgeEditComponent } from 'src/app/pages/surge-edit/surge-edit.component';
import { DiscountComponent } from '../../pages/discount/discount.component';
import { DiscountAddComponent } from '../../pages/discount-add/discount-add.component';
import { DiscountCodeUseComponent } from '../../pages/discount-code-use/discount-code-use.component';
import { AppActionUninstallComponent } from '../../pages/app-action-uninstall/app-action-uninstall.component';
import { AppActionDriverVisibilityComponent } from '../../pages/app-action-driver-visibility/app-action-driver-visibility.component';
import { AppActionDriverSettingsComponent } from '../../pages/app-action-driver-settings/app-action-driver-settings.component';
import { AuthClassGuard } from 'src/app/helpers/auth-class.guard';
import { DriversEditComponent } from 'src/app/pages/drivers-edit/drivers-edit.component';

import { UsersComponent } from 'src/app/pages/users/users.component';
import { TripMenuComponent } from 'src/app/pages/trip-menu/trip-menu.component';
import { VehiclesMenuComponent } from 'src/app/pages/vehicles-menu/vehicles-menu.component';
import { ReviewsMenuComponent } from 'src/app/pages/reviews-menu/reviews-menu.component';
import { ActivityLogComponent } from 'src/app/pages/activity-log/activity-log.component';
import { ExplorerMenuComponent } from 'src/app/pages/explorer-menu/explorer-menu.component';
import { AppActionsMenuComponent } from 'src/app/pages/app-actions-menu/app-actions-menu.component';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthClassGuard] },
    { path: 'tables',         component: TablesComponent, canActivate: [AuthClassGuard] },
    { path: 'icons',          component: IconsComponent, canActivate: [AuthClassGuard] },
    { path: 'maps',           component: MapsComponent, canActivate: [AuthClassGuard] },
    { path: 'add-admin',      component: AdminAddComponent, canActivate: [AuthClassGuard]},
    { path: 'add-quest',      component: AdminAddQuestComponent, canActivate: [AuthClassGuard]},
    { path: 'view-admin',      component: AdminViewComponent, canActivate: [AuthClassGuard] },
    { path: 'view-quest',      component: AdminViewQuestComponent, canActivate: [AuthClassGuard] },
    { path: 'view-access-trail',      component: AdminViewAccessComponent, canActivate: [AuthClassGuard] },
    { path: 'view-vehicle', component: VehicleTypeComponent, canActivate: [AuthClassGuard] },
    { path: 'users/:id/edit', component: AdminEditComponent, title:'Edit Admin', canActivate: [AuthClassGuard] }, 
    { path: 'quest/:id/addLocation', component: AddQuestLocationComponent, title:'Add Location', canActivate: [AuthClassGuard] }, 
    { path: 'quest/:id/details', component: AdminQuestDetailsComponent, title:'quest details', canActivate: [AuthClassGuard] }, 
    
    { path: 'add-vehicle', component: VehicleAddComponent, canActivate: [AuthClassGuard]},
    { path: 'vehicleUpdate/:id/edit', component: VehicleEditComponent, canActivate: [AuthClassGuard]},
    { path: 'view-partners', component: PartnersComponent, canActivate: [AuthClassGuard]},
    { path: 'add-partners', component: PartnersAddComponent, canActivate: [AuthClassGuard]},
    { path: 'partner/:id/edit', component: PartnersEditComponent, canActivate: [AuthClassGuard]},
    
    { path: 'add-drivers', component: DriversAddComponent, canActivate: [AuthClassGuard]},
    { path: 'approved-drivers', component: DriversApprovedComponent, canActivate: [AuthClassGuard]},
    { path: 'unapproved-drivers', component: DriversPendingComponent, canActivate: [AuthClassGuard]},
    { path: 'rejected-drivers', component: DriversRejectedComponent, canActivate: [AuthClassGuard]},
    { path: 'drivers/:id/edit', component: DriversEditComponent, canActivate: [AuthClassGuard]},

    { path: 'add-riders', component: RidersAddComponent, canActivate: [AuthClassGuard]},
    { path: 'view-riders', component: RidersComponent, canActivate: [AuthClassGuard]},
    { path: 'riders/:id/edit', component: RidersEditComponent, canActivate: [AuthClassGuard]},

    { path: 'trips', component: TripsComponent, canActivate: [AuthClassGuard]},
    { path: 'Ongoing-trips', component: TripsUpcomingComponent, canActivate: [AuthClassGuard]},
    { path: 'past-trips', component: TripsPastComponent, canActivate: [AuthClassGuard]},
    { path: 'trips-settings', component: TripsSettingsComponent, canActivate: [AuthClassGuard]},
    { path: 'cash-settlements', component: SettlementsComponent, canActivate: [AuthClassGuard]},
    { path: 'partner-settlements', component: SettlementsPartnerWithdrawRequestsComponent, canActivate: [AuthClassGuard]},
    { path: 'withdrawal-details', component: SettlementsWithdrawDetailsComponent, canActivate: [AuthClassGuard]},
    { path: 'withdrawal-request', component: SettlementsWithdrawRequestComponent, canActivate: [AuthClassGuard]},
    { path: 'driver-ratings', component: RatingsDriverComponent, canActivate: [AuthClassGuard]},
    { path: 'rider-ratings', component: RatingsRiderComponent, canActivate: [AuthClassGuard]},
    { path: 'add-notification', component: NotifyAddComponent,canActivate: [AuthClassGuard]},
    { path: 'notifications', component: NotificationsComponent, canActivate: [AuthClassGuard]},
    { path: 'new-message', component: MessageAddComponent, canActivate: [AuthClassGuard]},
    { path: 'messages', component: MessagesComponent, canActivate: [AuthClassGuard]},
    { path: 'reports', component: ReportsComponent, canActivate: [AuthClassGuard]},
    { path: 'reports-ref', component: ReportsRefComponent, canActivate: [AuthClassGuard]},
    { path: 'add-charge', component: SurgeAddComponent, canActivate: [AuthClassGuard]},
    { path: 'edit-surge', component: SurgeEditComponent, canActivate: [AuthClassGuard]},
    { path: 'view-edit-charge', component: SurgeChargeComponent, canActivate: [AuthClassGuard]},
    { path: 'add-discount', component: DiscountAddComponent,canActivate: [AuthClassGuard]},
    { path: 'view-discount', component: DiscountComponent, canActivate: [AuthClassGuard]},
    { path: 'view-code-use', component: DiscountCodeUseComponent,canActivate: [AuthClassGuard]},
    { path: 'uninstalls', component: AppActionUninstallComponent, canActivate: [AuthClassGuard]},
    { path: 'driver-visibility-history', component: AppActionDriverVisibilityComponent, canActivate: [AuthClassGuard]},
    { path: 'manage-settings', component: AppActionDriverSettingsComponent, canActivate: [AuthClassGuard]},
    { path: 'dashboard',      component: DashboardComponent,canActivate: [AuthClassGuard]}, 
    { path: 'users',      component: UsersComponent,canActivate: [AuthClassGuard]} ,
    { path: 'trips-menu',      component: TripMenuComponent,canActivate: [AuthClassGuard]} ,
    { path: 'vehicles-menu',      component: VehiclesMenuComponent,canActivate: [AuthClassGuard]} ,
    { path: 'reviews-menu',      component: ReviewsMenuComponent,canActivate: [AuthClassGuard]} ,
    { path: 'activity-log',      component: ActivityLogComponent,canActivate: [AuthClassGuard]} ,
    { path: 'e-menu',      component: ExplorerMenuComponent,canActivate: [AuthClassGuard]} ,
    { path: 'app-actions-menu',      component: AppActionsMenuComponent,canActivate: [AuthClassGuard]} ,
    
    
];
