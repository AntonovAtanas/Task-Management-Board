import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// bootstrap the AppComponent standalone component without need of app.module
bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
