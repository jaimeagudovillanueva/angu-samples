import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InjectorsModule } from './injectors/injectors.module';

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

import {SPOTIFY_PROVIDERS} from './spotify/services/spotify.service';

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
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SimpleNotificationsModule,
    InjectorsModule,
    routing
  ],
  providers: [
    NotificationsService,
    SPOTIFY_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
