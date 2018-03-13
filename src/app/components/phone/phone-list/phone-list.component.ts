import { SessionService } from './../../../shared/services/session.service';
import { PhonesService } from './../../../shared/services/phones.service';
import { Phone } from './../../../shared/model/phone.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones: Array<Phone> = [];
  user: User;

  constructor(private phonesService: PhonesService, private sessionService: SessionService) {
    this.user = sessionService.user;
  }

  ngOnInit() {
    this.phonesService.list()
      .subscribe((phones) => this.phones = phones);
  }

}
