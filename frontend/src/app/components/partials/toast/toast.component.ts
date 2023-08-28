import { animate, state, transition, trigger, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})

export class ToastComponent implements OnInit {
  constructor(public toast: ToastService) {}

  ngOnInit(): void {}
}