import {Component, Inject, ReflectiveInjector} from '@angular/core';

import {ApiService} from './services/ApiService';
import {ViewPortService} from './services/ViewPortService';

@Component({
  selector: 'app-injectors',
  templateUrl: './injectors.component.html', 
})
export class InjectorsComponent {
  
  constructor(@Inject('SizeService') private sizeService : any, 
    @Inject('ApiServiceAlias') private aliasService: ApiService, private apiService: ApiService) {
  }

  invokeApi(): void {
    this.apiService.get();
    this.aliasService.get();
    this.sizeService.run();
  }

  useInjectors(): void {
    let injector: any = ReflectiveInjector.resolveAndCreate([
      ViewPortService,
      ApiService,
      {
        provide: 'OtherSizeService',
        useFactory: (viewport: ViewPortService, api: ApiService) => {
          api.get();
          return viewport.determineService();
        },
        deps: [ViewPortService, ApiService]
      }
    ]);
    let sizeService: any = injector.get('OtherSizeService');
    sizeService.run();
  }
}