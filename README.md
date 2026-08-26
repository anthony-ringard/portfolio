# Portfolio — Anthony Ringard

Portfolio freelance — Vue 3 + Vite + TypeScript + Tailwind CSS, exporté en
site statique pour Cloudflare Pages. Design sobre, orienté PHP/Symfony senior,
missions e-commerce et applications métier.

## Structure

```
portfolio-site/
├── index.html          # Entrée HTML Vite et métadonnées sociales
├── src/                # Application Vue
│   ├── App.vue         # Composition des sections
│   ├── main.ts         # Montage Vue
│   ├── styles.css      # Styles globaux Tailwind
│   ├── components/     # Sections Vue
│   └── lib/content.ts  # Typage léger des contenus importés
├── data/               # Contenu principal en JSON — à éditer pour mettre à jour le site
│   ├── profile.json    # Identité, pitch, à propos, contact
│   ├── missions.json   # Offres de mission, bon fit / hors cible
│   ├── projects.json   # Réalisations en format mini case study
│   ├── expertises.json # Terrains d'expertise
│   ├── proofs.json     # Preuves rapides du hero
│   ├── site.json       # Navigation et titres de sections
│   └── stack.json      # Stack technique groupée par catégorie
├── scripts/            # Validation contenu
└── .github/workflows/  # Ancienne cible GitHub Pages si besoin
```

## Mettre à jour le contenu

Le contenu principal vient des fichiers JSON dans `data/`. Pas besoin de
toucher au code Vue pour :
- changer le pitch, le TJM, les liens de contact (`profile.json`)
- changer les missions proposées (`missions.json`)
- ajouter/retirer une réalisation (`projects.json`)
- ajuster la stack (`stack.json`)

Avant publication : renseigner `malt` et `linkedin` dans `data/profile.json`
si les liens doivent être affichés. Les champs vides sont simplement masqués.

## Développement avec Docker (rien à installer)

Le projet tourne entièrement dans des conteneurs — seul Docker est requis sur
la machine, pas de Node/npm local.

```bash
cd portfolio-site
docker compose up dev
```

- Site en hot-reload sur http://localhost:3002 (les fichiers locaux sont montés
  dans le conteneur, toute modification de `data/*.json` ou des composants se
  recharge automatiquement).
- Aperçu de la version statique de production (celle qui sera publiée) :
  ```bash
  docker compose up --build preview
  ```
  disponible sur http://localhost:3001.

Pour générer l'export statique (`dist/`) sans rien installer localement :

```bash
docker build --target export -o dist .
```

Le dossier `dist/` apparaît à la racine de `portfolio-site/`, prêt à être servi
ou déployé tel quel.

## Développement local (alternative sans Docker)

```bash
cd portfolio-site
npm install
npm run dev
```

Site disponible par défaut sur http://localhost:5173

## Vérifications

```bash
npm run check
```

Le script vérifie :
- les placeholders interdits dans `data/*.json`
- ESLint
- le typecheck Vue
- le build statique Vite

## Build statique

```bash
npm run build
```

Génère le site statique dans `dist/`.
Avec Docker, utiliser plutôt `docker build --target export -o dist .` (voir
ci-dessus) pour ne rien installer sur la machine hôte.

## Déploiement sur Cloudflare Pages

Cible recommandée pour ce portfolio :

- hébergement statique
- DNS et domaine chez Cloudflare
- HTTPS automatique
- pas de VPS, pas de Portainer, pas de serveur Node exposé

Configuration Cloudflare Pages :

- framework preset : `Vue` / `Vite` ou configuration manuelle
- root directory : `portfolio-site`
- build command : `npm run build`
- output directory : `dist`

Le build Vite génère des fichiers statiques prêts à être servis par Cloudflare
Pages.

Le fichier `public/_headers` est copié dans `dist/_headers` au build. Cloudflare
Pages l'utilise pour appliquer les headers de sécurité du site statique.

Avant de rendre le dépôt public, garder hors Git les dossiers locaux suivants :
`.claude/`, `.next*`, `output/`, `node_modules/`, `dist/` et tous les `.env*`.

## Déploiement sur GitHub Pages

Fallback possible si Cloudflare Pages n'est pas utilisé.

### Option 1 — Déploiement manuel par GitHub Actions

Le workflow `.github/workflows/deploy.yml` existe, mais il ne se déclenche plus
sur chaque push. Il faut le lancer manuellement depuis GitHub Actions pour
éviter une publication accidentelle hors Cloudflare.

1. Pousser ce dossier sur un dépôt GitHub (ex. `portfolio`).
2. Dans **Settings → Pages**, choisir la source **GitHub Actions**.
3. Lancer le workflow manuellement.

Le workflow publie le dossier `dist/`.

### Option 2 — Déploiement manuel

```bash
npm run build
# Pousser le contenu de dist/ sur la branche gh-pages, ou servir dist/
# via n'importe quel hébergeur de fichiers statiques.
```

## Notes techniques

- **Mobile first** : toutes les sections sont pensées en colonne unique sur
  mobile, avec grilles qui s'ouvrent à partir de `md:`.
- **Performance** : pas de librairie d'animation ni d'UI kit — Tailwind seul,
  police système par défaut, aucun appel Google Fonts au build.
- **Confidentialité** : aucune réalisation n'expose de code propriétaire — les
  projets sont décrits par contexte, rôle et résultat (cf. `data/projects.json`).
