import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
import { LoginTravelAppComponent } from './login-travel-app.component';

describe('LoginTravelAppComponent', () => {
  let component: LoginTravelAppComponent;
  let fixture: ComponentFixture<LoginTravelAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTravelAppComponent, NoopAnimationsModule, FormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTravelAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
