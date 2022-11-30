import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public headerText: string = '';
  constructor(private router: Router) {
    router.events.subscribe((val: any) => {
      if (val.url) {
        if (val.url.includes('cadastro')) {
          this.headerText = 'Cadastro';
        } else {
          this.headerText = 'Lista';
        }
      }
    });
  }

  ngOnInit(): void {}

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  changeRoute(route: string) {
    this.router.navigateByUrl('/' + route);
  }
}
