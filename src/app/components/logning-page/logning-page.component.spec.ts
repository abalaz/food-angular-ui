import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogningPageComponent } from './logning-page.component';

describe('LogningPageComponent', () => {
  let component: LogningPageComponent;
  let fixture: ComponentFixture<LogningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogningPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
