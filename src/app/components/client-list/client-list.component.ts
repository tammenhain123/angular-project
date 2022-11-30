import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  public headers: Array<string> = ['Nome', 'E-mail', 'CPF', 'Criado em'];
  public name: string = '';
  public email: string = '';
  public createdAt: string = '';
  public cpf: string = '';

  public clients: Array<Client> = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.clients = this.localStorageService.get('clients');
  }

  edit(id: string) {
    console.log(id);
  }

  delete(id: string) {
    this.clients = this.clients.filter((a) => a.id !== id);
    this.localStorageService.set('clients', this.clients);
  }

  add() {
    console.log('this email ', this.email);
    if (this.name && this.email && this.createdAt && this.cpf) {
      let newClient: Client = {
        id: this.cpf,
        name: this.name,
        email: this.email,
        createdAt: this.createdAt,
        cpf: this.cpf,
      };
      this.clients.push(newClient);
      this.localStorageService.set('clients', this.clients);
      this.name = '';
      this.email = '';
      this.createdAt = '';
      this.cpf = '';
    } else {
      alert('preencha todos campos');
    }
  }

  searchClient(event: any) {
    if (event.target.value.length > 0) {
      this.clients = this.clients.filter((a) =>
        a.name.includes(event.target.value)
      );
    } else {
      this.clients = this.localStorageService.get('clients');
    }
  }
}
