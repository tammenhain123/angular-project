import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { PaymentForm } from 'src/app/models/payment-form';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  public paymentForm: PaymentForm = {
    type: '',
    barCode: '',
    cardName: '',
    expeditionMonth: '',
    expeditionYear: '',
    cardNumber: '',
    ccv: '',
  };

  public months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  public clients: Array<Client> = [];

  public client: Client = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    state: '',
    city: '',
    CEP: '',
    id: '',
    createdAt: '',
  };

  constructor(
    private _Activatedroute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clients = this.localStorageService.get('clients');
    if (
      this.clients.length > 0 &&
      this._Activatedroute.snapshot.paramMap.get('id')
    ) {
      this.client = this.clients.filter(
        (a) => a.id === this._Activatedroute.snapshot.paramMap.get('id')
      )[0];
      this.paymentForm = this.client.paymentForm!;
      if (!this.paymentForm) {
        this.paymentForm = {
          type: '',
          barCode: '',
          cardName: '',
          expeditionMonth: '',
          expeditionYear: '',
          cardNumber: '',
          ccv: '',
        };
      }
    }
  }
  changeType(value: string) {
    this.paymentForm.type = value;
  }

  save() {
    this.client.paymentForm = this.paymentForm;
    this.client.id = this.client.cpf;
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    if (!this._Activatedroute.snapshot.paramMap.get('id'))
      this.client.createdAt = day + '/' + month + '/' + year;
    this.clients = this.clients.filter(
      (a) => a.id !== this._Activatedroute.snapshot.paramMap.get('id')
    );
    this.clients.push(this.client);
    this.localStorageService.set('clients', this.clients);
    this.router.navigateByUrl('/home');
  }
}
