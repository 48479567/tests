import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCheckComponent } from './hero-check.component';

describe('HeroCheckComponent', () => {
  let component: HeroCheckComponent;
  let fixture: ComponentFixture<HeroCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
