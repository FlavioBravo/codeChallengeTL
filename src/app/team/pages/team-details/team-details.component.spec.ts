import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamDetailsComponent } from './team-details.component';
import { TeamService } from '../../services/team.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TeamInfoComponent } from '../../components/team-info/team-info.component';
import { TeamPlayerComponent } from '../../components/team-player/team-player.component';
import * as Rx from 'rxjs';

describe('TeamDetailsComponent', () => {
  let component: TeamDetailsComponent;
  let fixture: ComponentFixture<TeamDetailsComponent>;

  const teamData = {
    "id": 2037,
    "area": {
        "id": 2011,
        "name": "Argentina"
    },
    "activeCompetitions": [
        {
            "id": 2023,
            "area": {
                "id": 2011,
                "name": "Argentina"
            },
            "name": "Primera B Nacional",
            "code": null,
            "plan": "TIER_FOUR",
            "lastUpdated": "2021-04-17T11:21:38Z"
        }
    ],
    "name": "CA Brown de Adrogué",
    "shortName": "Brown",
    "tla": "BRO",
    "crestUrl": null,
    "address": "Cerreti 868 Adrogué, Buenos Aires 1846",
    "phone": "+54 (11) 42940861",
    "website": "http://www.cabrowndeadrogue.com.ar",
    "email": "prensabrowndeadrogue@yahoo.com.ar",
    "founded": 1945,
    "clubColors": "Light Blue / Red / Black",
    "venue": "Estadio Lorenzo Arandilla",
    "squad": [
        {
            "id": 4587,
            "name": "Matías Sánchez",
            "position": "Midfielder",
            "dateOfBirth": "1987-08-18T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 45905,
            "name": "Enzo Ortíz",
            "position": "Defender",
            "dateOfBirth": "1997-02-05T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 45924,
            "name": "Denis Martínez",
            "position": "Attacker",
            "dateOfBirth": "1996-04-10T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 46154,
            "name": "Ignacio Boggino",
            "position": "Defender",
            "dateOfBirth": "1986-02-22T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 46213,
            "name": "Jacobo Mansilla",
            "position": "Defender",
            "dateOfBirth": "1987-06-15T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 46496,
            "name": "Matías Jesús Noble",
            "position": "Midfielder",
            "dateOfBirth": "1996-08-09T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 59451,
            "name": "Ignacio Sanabria",
            "position": "Defender",
            "dateOfBirth": "1989-12-29T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 59522,
            "name": "Alberto Stegman",
            "position": "Midfielder",
            "dateOfBirth": "1994-02-01T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 59526,
            "name": "Martín Ríos",
            "position": "Goalkeeper",
            "dateOfBirth": "1977-07-14T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 59544,
            "name": "Pablo Vicó",
            "position": null,
            "dateOfBirth": "1955-11-21T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "COACH"
        },
        {
            "id": 59547,
            "name": "Nicolás Sánchez",
            "position": "Midfielder",
            "dateOfBirth": "1992-02-21T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 59684,
            "name": "Mauro Ruggiero",
            "position": "Goalkeeper",
            "dateOfBirth": "1987-05-16T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 59724,
            "name": "Facundo Bruera",
            "position": "Attacker",
            "dateOfBirth": "1998-09-23T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 59757,
            "name": "Mateo Acosta",
            "position": "Attacker",
            "dateOfBirth": "1992-09-22T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 59776,
            "name": "Patricio Vidal",
            "position": "Attacker",
            "dateOfBirth": "1992-04-08T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 59795,
            "name": "Ariel Kippes",
            "position": "Defender",
            "dateOfBirth": "1994-02-25T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 60071,
            "name": "Leonardo Acosta",
            "position": "Attacker",
            "dateOfBirth": "1989-04-17T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 60108,
            "name": "Francisco Gil",
            "position": "Attacker",
            "dateOfBirth": null,
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 60562,
            "name": "Matías Sproat",
            "position": "Attacker",
            "dateOfBirth": "1988-03-10T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 82027,
            "name": "Mauro Bazán",
            "position": "Defender",
            "dateOfBirth": "1993-04-27T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 82117,
            "name": "Nicolás Arrechea",
            "position": "Defender",
            "dateOfBirth": "1991-05-16T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 82623,
            "name": "Pablo Cortizo",
            "position": "Midfielder",
            "dateOfBirth": "1989-09-01T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 126919,
            "name": "Agustín Quiroz",
            "position": "Goalkeeper",
            "dateOfBirth": "1999-03-02T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 135188,
            "name": "Alexis Castaño",
            "position": "Midfielder",
            "dateOfBirth": "1999-03-09T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 136118,
            "name": "Matías Rodríguez",
            "position": "Defender",
            "dateOfBirth": "1999-01-21T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 165342,
            "name": "Agustín Vallejos",
            "position": "Defender",
            "dateOfBirth": "1999-06-25T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 165343,
            "name": "Alejandro Gómez",
            "position": "Defender",
            "dateOfBirth": "1994-06-16T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 165344,
            "name": "Damián Rojas",
            "position": "Midfielder",
            "dateOfBirth": "2001-03-06T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 165345,
            "name": "Julián Giménez Pilutik",
            "position": "Midfielder",
            "dateOfBirth": "1993-02-06T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 165346,
            "name": "Ramiro Formigo",
            "position": "Midfielder",
            "dateOfBirth": "1990-04-03T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 165347,
            "name": "Juan Mendoza",
            "position": "Attacker",
            "dateOfBirth": "1999-01-06T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        },
        {
            "id": 165348,
            "name": "Miguel Graneros",
            "position": "Attacker",
            "dateOfBirth": "1996-04-28T00:00:00Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER"
        }
    ],
    "lastUpdated": "2021-03-21T08:58:30Z"
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDetailsComponent, TeamInfoComponent, TeamPlayerComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: TeamService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamDetailsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call executeTeamInformation method', () => {
    const fixture = TestBed.createComponent(TeamDetailsComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(TeamService);
    const spyService = spyOn(service, 'getTeamInformation').and.returnValue(Rx.of(teamData));
    component.executeTeamInformation();
    expect(spyService).toHaveBeenCalled();
  })


});
