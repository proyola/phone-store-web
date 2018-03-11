import { PhonesService } from './../../../shared/services/phones.service';
import { Phone } from './../../../shared/model/phone.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones: Array<Phone> = [];

  constructor(private phonesService: PhonesService) { }

  ngOnInit() {
    this.phonesService.list()
      .subscribe((phones) => this.phones = phones);
  }

}
