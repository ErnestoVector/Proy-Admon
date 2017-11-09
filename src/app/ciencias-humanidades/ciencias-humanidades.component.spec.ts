import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CienciasHumanidadesComponent } from './ciencias-humanidades.component';

describe('CienciasHumanidadesComponent', () => {
  let component: CienciasHumanidadesComponent;
  let fixture: ComponentFixture<CienciasHumanidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CienciasHumanidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CienciasHumanidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
