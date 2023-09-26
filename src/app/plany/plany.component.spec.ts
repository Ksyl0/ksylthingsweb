import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanyComponent } from './plany.component';

describe('PlanyComponent', () => {
  let component: PlanyComponent;
  let fixture: ComponentFixture<PlanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
