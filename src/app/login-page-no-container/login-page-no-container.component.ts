import { Component } from '@angular/core';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-login-page-no-container',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './login-page-no-container.component.html',
  styleUrls: ['./login-page-no-container.component.scss']
})
export class LoginPageNoContainerComponent {}
