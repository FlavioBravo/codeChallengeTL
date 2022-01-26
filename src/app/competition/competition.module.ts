import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompetitionPage } from './competition.page';

import { CompetitionPageRoutingModule } from './competition-routing.module';
import { CompetitionListComponent } from './components/competition-list/competition-list.component';
import { CompetitionItemComponent } from './components/competition-item/competition-item.component';
import { CompetitionService } from './services/competition.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TeamsCompetitionComponent } from './pages/teams-competition/teams-competition.component';
import { RouterModule } from '@angular/router';
import { TeamItemComponent } from './components/team-item/team-item.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TokenInterceptorService } from '../shared-module/interceptors/token-interceptor.service';
import { SearchCompetitionComponent } from './pages/search-competition/search-competition.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CompetitionPageRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    CompetitionPage,
    CompetitionItemComponent,
    CompetitionListComponent,
    SearchCompetitionComponent,
    TeamsCompetitionComponent,
    TeamItemComponent,
    TeamListComponent
  ],
  providers: [
    CompetitionService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
  ]
})
export class CompetitionPageModule {}
