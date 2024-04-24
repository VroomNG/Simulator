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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputTextModule } from 'primeng/inputtext';
import { Button, ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

import {FileUploadModule} from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';


import { VRInputComponent } from '../../layouts/shared/vr-input/vr-input.component';
import { VrAlertComponent } from '../../layouts/shared/vr-alert/vr-alert.component';
import { LoaderComponent } from '../../layouts/shared/loader/loader.component';
import { ButtonComponent } from '../shared/button/button.component';
import { VrDropdownComponent } from '../../layouts/shared/vr-dropdown/vr-dropdown.component';
import { SearchPipe } from 'src/app/helpers/search.pipe';

import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';


import { GoogleMapsModule } from '@angular/google-maps';

import { ToastComponent } from '../shared/toast/toast.component';
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
    ToastComponent,
    DashboardComponent, 
    VRInputComponent,
    VrAlertComponent,
    LoaderComponent,
    VrDropdownComponent,
    SearchPipe,
    SearchComponent,
    ButtonComponent,
   
  ]
})

export class AdminLayoutModule {}
