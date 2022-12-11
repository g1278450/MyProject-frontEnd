import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ZingchartAngularModule } from 'zingchart-angular';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';
import { StockDataComponent } from './stock-data/stock-data.component';
import { AppRoutesModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule  } from '@angular/cdk/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    ErrorComponent,
    StockDataComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AppRoutesModule,
    // ZingchartAngularModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CdkTableModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[AppRoutesModule]
})
export class AppModule { }
