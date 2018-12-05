import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestpwdComponent } from './requestpwd.component';

describe('RequestpwdComponent', () => {
  let component: RequestpwdComponent;
  let fixture: ComponentFixture<RequestpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
