import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LexiluComponent } from './lexilu.component';

describe('LexiluComponent', () => {
  let component: LexiluComponent;
  let fixture: ComponentFixture<LexiluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LexiluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LexiluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
