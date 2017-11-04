import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriasComponent } from './asesorias.component';

describe('AsesoriasComponent', () => {
  let component: AsesoriasComponent;
  let fixture: ComponentFixture<AsesoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});