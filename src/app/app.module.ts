import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [CommonModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModuleModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
