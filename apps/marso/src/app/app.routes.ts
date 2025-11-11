import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MonteurVideoComponent } from './pages/monteur-video/monteur-video.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    title: 'Je suis Alexandre Marsollier · Réalisateur, motion designer & monteur vidéo',
  },
  {
    path: 'monteur-video',
    component: MonteurVideoComponent,
    title: 'Monteur vidéo freelance à Toulouse — Je suis Alexandre Marsollier',
  },
  { path: '**', redirectTo: '' },
];
