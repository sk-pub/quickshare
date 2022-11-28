import * as PubSub from 'pubsub-js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // TODO: Do proper logging of the error
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));

PubSub.subscribe('app.request', (event, data) => {
  // eslint-disable-next-line no-console
  console.log('PubSub-js received', event, data);

  const date = Date.now().toString();
  PubSub.publish('app.response', date);
});
