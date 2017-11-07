import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CienciasBasicasComponent } from './ciencias-basicas.component';

describe('CienciasBasicasComponent', () => {
  let component: CienciasBasicasComponent;
  let fixture: ComponentFixture<CienciasBasicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CienciasBasicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CienciasBasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
