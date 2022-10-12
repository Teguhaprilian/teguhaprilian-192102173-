import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideebarComponent } from './sideebar.component';

describe('SideebarComponent', () => {
  let component: SideebarComponent;
  let fixture: ComponentFixture<SideebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
