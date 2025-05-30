import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TestComp1Component } from './app/test-comp1/test-comp1.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
