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
    npm install
    ```
    
     Skapa sedan en environment-fil i rot-mappen (.env) med två konstanter:
     ```
     CONTENTFUL_SPACE_ID=ditt_space_id_från_contentful
     CONTENTFUL_ACCESS_TOKEN=din_access_token_från_contentful
     ```
     (fyll i ditt_space_id_från_contentful och din_access_token_från_contentful med dina egna värden)
3.  **Starta sidan**

    Starta upp sidan på `http://localhost:8000`

    ```shell
    npm start
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
