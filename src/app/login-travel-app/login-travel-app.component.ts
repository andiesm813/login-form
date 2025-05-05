import { Component } from '@angular/core';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-login-travel-app',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './login-travel-app.component.html',
  styleUrls: ['./login-travel-app.component.scss']
})
export class LoginTravelAppComponent {
  public checked?: any = true;
}
