import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';

import { TeamPage } from './team.page';

const routes: Routes = [
  {
    path: '',
    component: TeamPage
  },
  {
    path: 'details/:competitionId/:teamId',
    component: TeamDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamPageRoutingModule {}
