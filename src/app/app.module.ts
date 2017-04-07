import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { PlantillaComponent } from './base/plantilla.component';
import { PrincipalComponent } from './principal/principal.component';
import { SearchComponent } from './spotify/components/search.component';
import { ArtistComponent } from './spotify/components/artist.component';
import { TrackComponent } from './spotify/components/track.component';
import { AlbumComponent } from './spotify/components/album.component';
import { InjectorsComponent } from './injectors/injectors.component';

import {SPOTIFY_PROVIDERS} from './spotify/services/spotify.service';
import {ApiService} from './injectors/services/ApiService';
import {ViewPortService} from './injectors/services/ViewPortService';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ArticuloComponent,
    PlantillaComponent,
    PrincipalComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent,
    InjectorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SimpleNotificationsModule,
    routing
  ],
  providers: [
    NotificationsService,
    SPOTIFY_PROVIDERS,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
