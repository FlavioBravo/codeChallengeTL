import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamPageRoutingModule } from './team-routing.module';

import { TeamPage } from './team.page';
import { TeamService } from './services/team.service';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamPlayerComponent } from './components/team-player/team-player.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { TokenInterceptorService } from '../shared-module/interceptors/token-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamPageRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    TeamPage,
    TeamInfoComponent,
    TeamPlayerComponent,
    TeamDetailsComponent
  ],
  providers: [
    TeamService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ]
})
export class TeamPageModule {}
