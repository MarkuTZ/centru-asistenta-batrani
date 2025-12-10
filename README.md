# CentruAsistentaBatrani

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Încărcarea fotografiilor pentru galerie

Galeria preia automat toate fișierele de imagine din `public/img/gallery`. Pentru rezultate bune în producție:

- **Redimensionează la maximum ~1600px lățime** înainte de a le urca (ajută viteza de încărcare și evită ecranul alb cauzat de payload-uri foarte mari).
- **Salvează în formate moderne** (`webp`/`avif`) sau JPEG comprimat, cu calitate 70–85.
- **Păstrează imaginile în repository** în directorul `public/img/gallery` și fă commit/push; Netlify va prelua imaginile la build.
- Dacă ai foarte multe fișiere mari, ia în calcul **Netlify Large Media** sau un bucket extern (S3/GCS) și actualizează `src/app/pages/galerie.page.ts` cu URL-urile publice.

Netlify livrează imaginile prin `.netlify/images` cu transformări (redimensionare + compresie). Dacă transformarea nu reușește, aplicația cade înapoi pe fișierul original, dar este important să nu urci fișiere mult mai mari decât necesar.
