import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownsComponent } from './countdowns.component';

describe('CountdownsComponent', () => {
  let component: CountdownsComponent;
  let fixture: ComponentFixture<CountdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
