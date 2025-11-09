# README

## Useful Links

- [Visit the GitHub Pages website](https://M4RIIN.github.io/marso)

## Other Sections

Content goes here...

## Démarrer les applications

1. Lance les deux applications d'un coup :
   ```bash
   npx nx serve marso
   ```
   Cette cible démarre simultanément l'API (`api:serve`) et le front SSR (`marso:serve-frontend`) ; le dev-server Angular proxifie automatiquement `/api` vers `http://localhost:3333`.
2. Si tu ne veux lancer qu'un service, tu peux utiliser les cibles dédiées :
   ```bash
   npx nx serve api
   npx nx run marso:serve-frontend
   ```
   L'application SSR interroge l'API pendant le rendu côté serveur pour hydrater le nom « Alexandre » dans le hero.

### Configuration de l'API pour l'SSR

- Le serveur SSR d'Angular lit l'URL de l'API via la variable d'environnement `API_URL` (par défaut `http://localhost:3333`).  
- Personnalise cette valeur avant de lancer `nx serve marso` ou lors du déploiement :
  ```bash
  API_URL="https://mon-api.com" npx nx serve marso
  ```
