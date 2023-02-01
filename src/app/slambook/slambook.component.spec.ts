import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlambookComponent } from './slambook.component';

describe('SlambookComponent', () => {
  let component: SlambookComponent;
  let fixture: ComponentFixture<SlambookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlambookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlambookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
