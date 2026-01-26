import { ResolveFn, Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MonteurVideoComponent } from './pages/monteur-video/monteur-video.component';
import { ReelDetailComponent } from './pages/reel-detail/reel-detail.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { getPortfolioProjectBySlug } from './data/portfolio';

const projectTitleResolver: ResolveFn<string> = (route) => {
  const slug = route.paramMap.get('slug') ?? '';
  const project = getPortfolioProjectBySlug(slug);
  return project
    ? `${project.title} — ${project.client} | Alexandre Marsollier`
    : 'Projet vidéo — Alexandre Marsollier';
};

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    title: 'Alexandre Marsollier · Monteur vidéo freelance, réalisateur & motion designer',
  },
  {
    path: 'monteur-video',
    component: MonteurVideoComponent,
    title: 'Monteur vidéo freelance à Toulouse — Alexandre Marsollier',
  },
  {
    path: 'mentions-legales',
    component: MentionsLegalesComponent,
    title: 'Mentions légales — Alexandre Marsollier',
  },
  {
    path: 'projets/:slug',
    component: ReelDetailComponent,
    title: projectTitleResolver,
  },
  { path: '**', redirectTo: '' },
];
