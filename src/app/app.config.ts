import { TitleStrategy, provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

// import { CustomTitleStrategy } from './custom-title-strategy';
// import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter(routes),
    provideHttpClient(),
    // { provide: TitleStrategy, useClass: CustomTitleStrategy },
  ],
};