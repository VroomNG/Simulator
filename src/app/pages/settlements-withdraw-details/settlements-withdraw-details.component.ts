import { Component } from '@angular/core';
import { Iwithdraw_Request } from 'src/app/model/settlements';


@Component({
  selector: 'app-settlements-withdraw-details',
  templateUrl: './settlements-withdraw-details.component.html',
  styleUrls: ['./settlements-withdraw-details.component.scss']
})
export class SettlementsWithdrawDetailsComponent {
  withdraw: Iwithdraw_Request [] = [];
}
