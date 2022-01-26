import { Component, Input, OnInit } from '@angular/core';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss'],
})
export class CompetitionListComponent implements OnInit {

  @Input('') competitionList: Array<any>;
  
  constructor() {}

  ngOnInit() {}

}
