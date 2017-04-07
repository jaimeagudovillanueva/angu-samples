import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from '../app.routing';

import { InjectorsComponent } from './injectors.component';

import {ApiService} from './services/ApiService';
import {ViewPortService} from './services/ViewPortService';

@NgModule({
  declarations: [ 
    InjectorsComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  providers: [
    ApiService,
    ViewPortService,
    { provide: 'ApiServiceAlias', useExisting: ApiService },
    {
      provide: 'SizeService',
      useFactory: (viewport: any) => {
        return viewport.determineService();
      },
      deps: [ViewPortService]
    }
  ]
})
export class InjectorsModule { }