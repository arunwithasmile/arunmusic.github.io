import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './components/songs/songs.component';
import { ListingComponent } from './components/listing/listing.component';
import { CardComponent } from './components/card/card.component';
import { ScoresComponent } from './components/scores/scores.component';
import { CoversComponent } from './components/covers/covers.component';
import { MiscComponent } from './components/misc/misc.component';
import { ContactComponent } from './components/contact/contact.component';

const routs: Routes = [
  {
    path: '',
    component: SongsComponent,
    pathMatch: 'full'
  },
  {
    path: 'songs',
    component: SongsComponent
  },
  {
    path: 'scores',
    component: ScoresComponent
  },
  {
    path: 'covers',
    component: CoversComponent
  },
  {
    path: 'misc',
    component: MiscComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SongsComponent,
    ListingComponent,
    CardComponent,
    ScoresComponent,
    CoversComponent,
    MiscComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
