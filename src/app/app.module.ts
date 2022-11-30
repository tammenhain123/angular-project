import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from '@ngneat/input-mask';
import { BrowserModule } from '@angular/platform-browser';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

const routes: Routes = [
  { path: 'home', component: ClientListComponent },
  { path: 'lista', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cadastro', component: ClientFormComponent },
  { path: 'cadastro/:id', component: ClientFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientListComponent,
    ClientFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    InputMaskModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
