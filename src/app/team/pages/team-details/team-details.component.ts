import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss'],
})
export class TeamDetailsComponent implements OnInit {
  teamId = '';
  competitionId = '';
  teamData: any;
  playersTeamList: Array<any> = [];

  constructor(private route: Router, private router: ActivatedRoute, private teamService: TeamService) { 
    this.teamId = this.router.snapshot.paramMap.get('teamId');
    this.competitionId = this.router.snapshot.paramMap.get('competitionId');
  }

  ngOnInit() {
    this.executeTeamInformation();
  }

  executeTeamInformation() {
    this.teamService.getTeamInformation(this.teamId)
    .subscribe(res => {
      this.teamData = res;
      this.playersTeamList = res.squad;
    })
  }

  back() {
    this.route.navigate([`/competition/teams-competition/${this.competitionId}`]);
  }

}
