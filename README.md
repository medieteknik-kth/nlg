<p align="center">
  <img alt="Näringslivsgruppen" src="https://www.medieteknik.com/static/committees/nlg.png" width="60" />
</p>
<h1 align="center">
  Näringslivsgruppens hemsida
</h1>

Syftet med hemsidan är främst att ge företag information om vad näringslivsgruppen gör och hur näringslivsgruppen kan kontaktas.

## 🚀 Quick start

1.  **Klona denna repository**

    Använd git för att klona denna repository, eller ladda ner den.

    ```shell
    # klona repositoryt till en lokal mapp
    git clone https://github.com/medieteknik-kth/nlg.git
    ```

2.  **Installera**

    Öppna kommandotolken/terminalen eller powershell i den klonade mappen och installera alla dependencies.

    ```shell
    cd nlg
    yarn install
    ```
    Om du inte har yarn, installera yarn med
    ```shell
    npm install -g yarn
    ```

     Skapa sedan två environment-filer i root-mappen:
     `.env.development` och `.env.production`

     båda måste innehålla tre värden:
    
    ```shell
    GATSBY_GRAPHQL_IDE=playground
    CONTENTFUL_SPACE_ID=X
    CONTENTFUL_ACCESS_TOKEN=Y
    ```

    Fyll i X och Y med värden från Contentful!
    
    Mer information finns [här](https://www.contentful.com/help/find-space-id/) och [här](https://www.contentful.com/developers/docs/references/authentication/#the-content-management-api).

3.  **Starta sidan**

    Starta upp sidan på `http://localhost:8000`

    ```shell
    yarn start
    ```
    
## 🧐 Teknologier

- Gatsby
- Typescript
- Sass
- CSS-modules

## Mappstruktur

- Package by feature så långt det går

## Kodkonventioner

- Functional components
- Props & state interface ovanför komponenten
- Async/await

## Git-konventioner

- Commits skrivs i <a href="https://sv.wikipedia.org/wiki/Imperativ">imperativ</a>
- Om committen är broken, skriv det i meddelandet
- Micro-commits uppmanas
- Main och dev branches används
- Issues och projekt-vyn 
