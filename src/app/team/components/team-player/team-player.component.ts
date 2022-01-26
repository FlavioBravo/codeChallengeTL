import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-player',
  templateUrl: './team-player.component.html',
  styleUrls: ['./team-player.component.scss'],
})
export class TeamPlayerComponent implements OnInit {

  @Input() player!: any;

  constructor() { }

  ngOnInit() {}

}
