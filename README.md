# ITFIT Vault – statický web

Moderní, minimalistický statický web pro ITFIT Vault s jednotným layoutem, responzivitou a sdílenými styly.

## Struktura

```
.
├── assets/
│   ├── itfit_placeholder_gym.svg
│   ├── main.js
│   └── styles.css
├── about/
│   └── index.html
├── vault/
│   ├── index.html
│   ├── hubnuti/index.html
│   ├── trenink-zaklady/index.html
│   └── mobilita/index.html
└── index.html
```

## Lokální spuštění

Jednoduše otevři `index.html` v prohlížeči, nebo spusť lokální server:

```bash
python -m http.server 8000
```

Poté otevři `http://localhost:8000`.

## Build

Projekt je čisté HTML/CSS/JS, build není potřeba.

## Nasazení

Nahraj celý obsah repozitáře na statický hosting (Netlify, Vercel, GitHub Pages, S3…).
U hostingů, které podporují čistý statický hosting, stačí nastavit root na kořen repozitáře.

## Poznámky

- Všechny CTA vedou na placeholder `#buy`.
- Nadstavby (coaching, školení pro firmy) jsou zmíněné pouze jako možnost po vstupu / na dotaz.
