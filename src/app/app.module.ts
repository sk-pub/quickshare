import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { FilesComponent } from './files/files.component';

@NgModule({
  declarations: [FilesComponent],
  imports: [BrowserModule],
  entryComponents: [FilesComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const analyticsCounter = createCustomElement(FilesComponent, { injector });
    customElements.define('files-widget', analyticsCounter);
  }

  ngDoBootstrap() {
    // eslint-disable-next-line no-console
    console.log('ngDoBootstrap');
  }
}
