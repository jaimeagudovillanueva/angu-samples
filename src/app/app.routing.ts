import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PrincipalComponent } from './principal/principal.component';
import { SearchComponent } from './spotify/components/search.component';
import { ArtistComponent } from './spotify/components/artist.component';
import { TrackComponent } from './spotify/components/track.component';
import { AlbumComponent } from './spotify/components/album.component';
import { InjectorsComponent } from './injectors/injectors.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: PrincipalComponent },
  { path: 'articulos', component: EncabezadoComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
  { path: 'injectors', component: InjectorsComponent }
]
export const routing = RouterModule.forRoot(ROUTES);