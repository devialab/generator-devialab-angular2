import { Component, ViewChild } from '@angular/core';
import 'jquery';

import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  templateUrl: './sign-in.component.html'
})

export class SignInComponent {
  @ViewChild('childModal') public modal: ModalDirective;

  onModalShow (e: MouseEvent) {
    e.preventDefault();
    this.modal.show();
  }
}
