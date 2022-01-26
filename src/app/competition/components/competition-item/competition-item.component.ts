import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition-item',
  templateUrl: './competition-item.component.html',
  styleUrls: ['./competition-item.component.scss'],
})
export class CompetitionItemComponent implements OnInit {

  @Input() competitionData!: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  open() {
    this.router.navigate([`competition/teams-competition/${this.competitionData?.id}`]);
  }
}
