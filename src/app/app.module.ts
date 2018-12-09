import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TmdbService} from './tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { FilmIHMComponent } from './film-ihm/film-ihm.component';
import { FooterComponent } from './footer/footer.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FilmPageComponent } from './film-page/film-page.component';
import { ActeurIhmComponent } from './acteur-ihm/acteur-ihm.component';
import { HeaderFilmComponent } from './header-film/header-film.component';
import {RouterModule , Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FilmTopRatedComponent } from './film-top-rated/film-top-rated.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ListDeListComponent } from './list-de-list/list-de-list.component';
import { ListFilmComponent } from './list-film/list-film.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShowFilmsComponent } from './show-films/show-films.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ShowActeursComponent } from './show-acteurs/show-acteurs.component';
import { FilmComingSoonComponent } from './film-coming-soon/film-coming-soon.component';
import { SearchComponent } from './search/search.component';
import { ProfilAuteurComponent } from './profil-auteur/profil-auteur.component';
import {FilmSimilarComponent } from './film-similar/film-similar.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AfficherInfoFilmsComponent } from './afficher-info-films/afficher-info-films.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DialogComponent } from './dialog/dialog.component';
import { DialogRemoveComponent } from './dialog-remove/dialog-remove.component';
import {MatExpansionModule} from '@angular/material';
import {DataService} from './DataService';

import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    FilmIHMComponent,
    FilmPageComponent,
    ActeurIhmComponent,
    HeaderFilmComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    FilmTopRatedComponent,
    ListDeListComponent,
    ListFilmComponent,
    ShowFilmsComponent,
    ShowActeursComponent,
    FilmComingSoonComponent,
    SearchComponent,
    ProfilAuteurComponent,
    AfficherInfoFilmsComponent,
    FilmSimilarComponent,
    DialogComponent,
    DialogRemoveComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatMenuModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    MatPaginatorModule,
    MatDividerModule,
    MatChipsModule,
    Ng2CarouselamosModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'contact', component: ContactComponent},
      {path: '', component: HomeComponent},
      {path: 'list', component: ListDeListComponent },
      {path: 'listFilm/:$key/:content', component: ListFilmComponent },
      {path: 'showFilm/:mode', component: ShowFilmsComponent },
      {path: 'comingsoon', component: FilmComingSoonComponent },
      {path: 'acteurPage/:id', component: ProfilAuteurComponent },
      {path: 'acteur', component: ShowActeursComponent },
      {path: 'informationFilm/:id', component: AfficherInfoFilmsComponent },

    ])
  ],
  providers: [TmdbService, DataService],
  bootstrap: [AppComponent],
  entryComponents: [ DialogComponent , DialogRemoveComponent ]

})
export class AppModule { }
