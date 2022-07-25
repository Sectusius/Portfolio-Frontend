import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTextEditComponent } from './profile-text-edit.component';

describe('ProfileTextEditComponent', () => {
  let component: ProfileTextEditComponent;
  let fixture: ComponentFixture<ProfileTextEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTextEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTextEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
