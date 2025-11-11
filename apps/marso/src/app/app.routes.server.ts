import { RenderMode, ServerRoute } from '@angular/ssr';
import { REEL_PROJECTS } from './data/reel-projects';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projets/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      REEL_PROJECTS.map((project) => ({ slug: project.slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
