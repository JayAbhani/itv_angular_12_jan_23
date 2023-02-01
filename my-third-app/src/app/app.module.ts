import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AddServiceComponent } from './services/add-service/add-service.component';
import { RemoveServiceComponent } from './services/remove-service/remove-service.component';

import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AddServiceComponent,
    RemoveServiceComponent,
    P1Component,
    P2Component,
    ProductsComponent,
    EmployeesComponent,
    SearchComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
