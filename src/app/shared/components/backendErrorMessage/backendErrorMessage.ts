import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendError.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-backend-error-message',
  templateUrl: './backendErrorMessage.html',
  standalone: true,
  imports: [CommonModule],
})
export class BackendErrorMessage implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {};

  errorMessage: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.errorMessage = Object.keys(this.backendErrors).map((name: string) => {
      const message = this.backendErrors[name].join(' ');
      return `${name} ${message}`;
    });
  }
}
