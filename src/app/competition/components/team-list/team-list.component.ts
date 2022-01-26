import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {

  @Input() teamsList!: any;
  @Input() competitionId!: string;

  constructor() { }

  ngOnInit() {}

}
