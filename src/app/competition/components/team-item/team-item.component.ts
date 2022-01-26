import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss'],
})
export class TeamItemComponent implements OnInit {

  @Input() teamItem!: any;
  @Input() competitionId!: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  open() {
    this.router.navigate([`team/details/${this.competitionId}/${this.teamItem.id}`]);
  }

}
