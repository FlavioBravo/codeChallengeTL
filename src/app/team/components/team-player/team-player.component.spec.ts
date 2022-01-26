import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamPlayerComponent } from './team-player.component';

describe('TeamPlayerComponent', () => {
  let component: TeamPlayerComponent;
  let fixture: ComponentFixture<TeamPlayerComponent>;
  const playerData = {
    id: 59544,
    name: "Pablo Vicó",
    position: "COACH",
    dateOfBirth: "1955-11-21T00:00:00Z",
    countryOfBirth: "Argentina",
    nationality: "Argentina",
    shirtNumber: null,
    role: "COACH"
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPlayerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show information of INPUT', () => {
    component.player = playerData;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').innerText).toEqual(playerData.name);
    expect(fixture.nativeElement.querySelector('h3').innerText).toEqual(playerData.nationality);
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual(playerData.position);
  });

});
