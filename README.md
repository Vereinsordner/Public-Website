# Vereinsordner – Website

Die Marketing-Website von vereinsordner.li, gebaut mit [Astro](https://astro.build). Sie wird als statisches HTML ausgeliefert, braucht also keinen Server und lässt sich bei jedem Static-Hosting betreiben. Die App selbst läuft getrennt unter `app.vereinsordner.li`.

## Voraussetzungen

- Node.js 18.20 oder neuer (empfohlen: 20 oder 22)

## Loslegen

```bash
npm install
npm run dev        # Entwicklungsserver auf http://localhost:4321
npm run build      # erzeugt die fertige Seite im Ordner dist/
npm run preview    # zeigt den Build lokal an
```

## Wichtige Einstellungen

Alle zentralen Werte stehen in **`src/config.ts`**:

| Wert | Bedeutung |
|---|---|
| `appUrl` | Ziel des Buttons „Anmelden“ – solange leer, ist der Button deaktiviert (später z. B. `https://app.vereinsordner.li`) |
| `contactEmail` | Kontaktadresse in der Demo-Sektion, im Impressum und in der Datenschutzerklärung |
| `formEndpoint` | Wohin das Formular „Demo anfragen“ gesendet wird |
| `title`, `description` | Titel und Beschreibung für Google und für geteilte Links |

## Projektstruktur

```
public/              Logo, Favicon, robots.txt (werden unverändert ausgeliefert)
src/config.ts        zentrale Einstellungen
src/styles/          globale Styles und Design-Tokens (Farben aus dem Logo)
src/layouts/         Grundgerüst jeder Seite (Head, SEO, Header, Footer)
src/components/      die einzelnen Abschnitte der Startseite
src/pages/           Seiten: index, impressum, datenschutz, 404
```

Texte änderst du direkt in der jeweiligen Komponente unter `src/components/`, z. B. `About.astro` für „Über uns“.

## Datenschutz-Hinweis

Die Schrift *Plus Jakarta Sans* wird über das npm-Paket `@fontsource-variable/plus-jakarta-sans` mitgeliefert und vom eigenen Server ausgeliefert. Es gibt also keine Verbindung zu Google Fonts, und die Website setzt keine Cookies.
