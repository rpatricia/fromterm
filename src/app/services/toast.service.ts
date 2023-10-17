import { Injectable } from '@angular/core';

export interface ToastInfo {
  header: string;
  body: string;
  delay?: number;
  type: string;
}

@Injectable({ providedIn: 'root' })
export class AppToastService {
  toasts: ToastInfo[] = [];

  success(header: string, body: string) {
    this.toasts.push({ header, body, type: 'bg-success text-light' });
  }

  warning(header: string, body: string) {
    this.toasts.push({ header, body, type: 'bg-warning text-light' });
  }

  error(header: string, body: string) {
    this.toasts.push({ header, body, type: 'bg-danger text-light' });
  }

  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter((t) => t != toast);
  }
}
