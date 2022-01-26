import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamInfoComponent } from './team-info.component';

describe('TeamInfoComponent', () => {
  let component: TeamInfoComponent;
  let fixture: ComponentFixture<TeamInfoComponent>;
  const teamDetails =  {
    "id": 758,
    "area": {
        "id": 2257,
        "name": "Uruguay"
    },
    "name": "Uruguay",
    "shortName": "Uruguay",
    "tla": "URU",
    "crestUrl": "https://crests.football-data.org/758.svg",
    "address": "Guayaybo 1531 Montevideo 11200",
    "phone": "+59 (82) 4004814",
    "website": "http://www.auf.org.uy",
    "email": "auf@auf.org.uy",
    "founded": 1900,
    "clubColors": "Sky Blue / White / Black",
    "venue": "Estadio Centenario",
    "lastUpdated": "2021-05-22T11:54:30Z"
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show information of INPUT', () => {
    component.teamDetails = teamDetails;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('ion-card-title').innerText).toEqual(teamDetails.name);
    expect(fixture.nativeElement.querySelectorAll('p')[0].innerText).toEqual(`Address: ${teamDetails.address}`);
    expect(fixture.nativeElement.querySelectorAll('p')[1].innerText).toEqual(`club Colors: ${teamDetails.clubColors}`);
    expect(fixture.nativeElement.querySelectorAll('p')[2].innerText).toEqual(`founded: ${teamDetails.founded}`);
    expect(fixture.nativeElement.querySelectorAll('p')[3].innerText).toEqual(`Phone: ${teamDetails.phone}`);
    expect(fixture.nativeElement.querySelectorAll('p')[4].innerText).toEqual(`Email: ${teamDetails.email}`);
    expect(fixture.nativeElement.querySelectorAll('p')[5].innerText).toEqual(`Stadium: ${teamDetails.venue}`);
    expect(fixture.nativeElement.querySelectorAll('p')[6].innerText).toEqual(`Website: ${teamDetails.website}`);
  });

});
