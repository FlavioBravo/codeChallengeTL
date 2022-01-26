import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { compareSeason } from 'src/app/shared-module/helpers/utils';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-search-competition',
  templateUrl: './search-competition.component.html',
  styleUrls: ['./search-competition.component.scss'],
})
export class SearchCompetitionComponent implements OnInit {

  competitionForm: FormGroup;
  competitionList: Array<any>;
  initialCompetitionList: Array<any>;

  constructor(private formBuilder: FormBuilder, private competitionService: CompetitionService) {
    this.competitionForm = this.formBuilder.group({
      year: [null, [Validators.required]]
    });
    this.competitionService.getCompetitionList()
      .subscribe(res => {
        this.competitionList = [...res.competitions];
        this.initialCompetitionList = [...res.competitions];
      });
  }

  submit() {
    if (!this.competitionForm.invalid) {
      this.competitionList = [];
      this.competitionList = this.initialCompetitionList
        .filter(competitionItem => 
          compareSeason(competitionItem?.lastUpdated, this.competitionForm.get('year').value)
        );
    }
  }

  ngOnInit() {}

}
