import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupIllustrationsComponent } from './setup-illustrations.component';

describe('SetupIllustrationsComponent', () => {
  let component: SetupIllustrationsComponent;
  let fixture: ComponentFixture<SetupIllustrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupIllustrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupIllustrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
