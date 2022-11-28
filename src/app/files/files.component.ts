import * as PubSub from 'pubsub-js';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  @Input() name: string;

  @HostListener('click') onClick() {
    // eslint-disable-next-line no-console
    console.log('click handling inside files.component.ts');
  }

  @HostListener('customEvent', ['$event']) onCustomEvent(e: CustomEvent) {
    // eslint-disable-next-line no-console
    console.log('onCustomEvent handling inside files.component.ts', e.detail);
  }

  constructor() {
    this.name = 'Default File Name';
  }
  ngOnInit(): void {
    // eslint-disable-next-line no-console
    console.log('init files');

    PubSub.subscribe('app.date', (event: string, date: Date) => {
      // eslint-disable-next-line no-console
      console.log('PubSub-js received', event, date);
    });

    PubSub.subscribe('app.response', (event: string, date: Date) => {
      // eslint-disable-next-line no-console
      console.log('PubSub-js received', event, date);
    });
  }

  requestDateViaPubSub() {
    PubSub.publish('app.request');
  }
}
