import { RenderMode, ServerRoute } from '@angular/ssr';
import { PORTFOLIO_PROJECTS } from './data/portfolio';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projets/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      PORTFOLIO_PROJECTS.map((project) => ({ slug: project.slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
