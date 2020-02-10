import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RetailComponent } from './retail/retail.component';
import { RetailoneComponent } from './retail/retailone/retailone.component';
import { RetailtwoComponent } from './retail/retailtwo/retailtwo.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { MfgoneComponent } from './manufacturing/mfgone/mfgone.component';
import { MfgtwoComponent } from './manufacturing/mfgtwo/mfgtwo.component';
import { MfgthreeComponent } from './manufacturing/mfgthree/mfgthree.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { NfcreaderComponent } from './monitoring/nfcreader/nfcreader.component';
import { AieComponent } from './monitoring/aie/aie.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RetailComponent,
    RetailoneComponent,
    RetailtwoComponent,
    ManufacturingComponent,
    MfgoneComponent,
    MfgtwoComponent,
    MfgthreeComponent,
    MonitoringComponent,
    NfcreaderComponent,
    AieComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
