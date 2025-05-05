import { Component } from '@angular/core';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-login-form',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {}
