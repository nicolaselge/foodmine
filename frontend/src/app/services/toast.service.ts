import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum toastTypes {
  error,
  info,
  success,
  warning
};

export interface ToastData {
  message: string;
  type: toastTypes;
  show?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ToastService {
  colorBg!: string;
  colorText!: string;
  data!: ToastData;
  public open = new Subject<ToastData>();

  openToast(data: ToastData) {
    switch (data.type) {
      case 0:
        this.colorBg = 'bg-red-200';
        this.colorText = 'text-red-500';
        break;
      case 1:
        this.colorBg = 'bg-blue-200';
        this.colorText = 'text-blue-500';
        break;
      case 2:
        this.colorBg = 'bg-green-200';
        this.colorText = 'text-green-500';
        break;
      case 3:
        this.colorBg = 'bg-yellow-200';
        this.colorText = 'text-yellow-500';
        break;
    
      default:
        this.colorBg = 'bg-grey-200';
        this.colorText = 'text-grey-500';
        break;
    }
    setTimeout(() => {
      this.data = { ...data, show: true};
    }, 300)

    /* Out */
    setTimeout(() => {
      document.getElementById('toast-alert')!.classList.toggle('translate-x-96');
      setTimeout(() => {
        document.getElementById('toast-alert')!.classList.toggle('hidden');
      }, 200);
      this.data = { ...this.data, show: false };
    }, 5000);
  }
}