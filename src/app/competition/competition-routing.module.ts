import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionPage } from './competition.page';
import { SearchCompetitionComponent } from './pages/search-competition/search-competition.component';
import { TeamsCompetitionComponent } from './pages/teams-competition/teams-competition.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCompetitionComponent,
  },
  {
    path: 'teams-competition/:competitionId',
    component: TeamsCompetitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionPageRoutingModule {}
