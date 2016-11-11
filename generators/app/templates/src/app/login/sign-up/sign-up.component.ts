import { Component } from '@angular/core';

@Component({
  templateUrl: './sign-up.component.html'
})

export class SignUpComponent {
  public title: String;

  constructor () {
    this.title = 'test-title';
  }
}
