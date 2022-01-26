import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-teams-competition',
  templateUrl: './teams-competition.component.html',
  styleUrls: ['./teams-competition.component.scss'],
})
export class TeamsCompetitionComponent implements OnInit {

  competition = '';
  teamsList: Array<any>;

  constructor(private route: Router, private router: ActivatedRoute, private competitionService: CompetitionService) {
    this.competition = this.router.snapshot.paramMap.get('competitionId');
    this.competitionService.getTeamsxCompetitionList(this.competition)
    .subscribe(res => {
      this.teamsList = res.teams;
    })
  }

  back() {
    this.route.navigate([`competition`]);
  }

  ngOnInit() {}

}
