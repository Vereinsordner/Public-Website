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
| `appUrl` | Ziel des Buttons „Anmelden“ (`https://app.vereinsordner.li`) |
| `contactEmail` | Kontaktadresse in der Demo-Sektion, im Impressum und in der Datenschutzerklärung |
| `formEndpoint` | Wohin das Formular „Demo anfragen“ gesendet wird |
| `title`, `description` | Titel und Beschreibung für Google und für geteilte Links |

## Formular „Demo anfragen“ einrichten

Das Formular schickt seine Daten per `POST` an `formEndpoint`. Ist JavaScript aktiv, wird es ohne Seitenwechsel gesendet und zeigt danach eine Bestätigung an. Es gibt zwei Möglichkeiten:

**A) Formular-Dienst, ganz ohne eigenen Server (am schnellsten)**
1. Auf [formspree.io](https://formspree.io) ein Formular anlegen.
2. Die Adresse `https://formspree.io/f/xxxxxx` in `formEndpoint` eintragen.
3. Die Felder `_subject` (Betreff) und `_gotcha` (Spamschutz) wertet Formspree automatisch aus.

**B) Eigener Endpunkt im Kotlin-Backend**
- `formEndpoint` auf z. B. `https://app.vereinsordner.li/api/demo-request` setzen.
- Der Endpunkt nimmt `multipart/form-data` mit den Feldern `name`, `email`, `verein`, `art`, `nachricht` und `datenschutz` an. Ist `_gotcha` ausgefüllt, sollte er die Anfrage verwerfen, weil sie von einem Bot stammt.
- Er antwortet bei Erfolg mit Status 2xx und muss CORS für `https://www.vereinsordner.li` erlauben.

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

## Noch offen (TODO)

- [ ] `formEndpoint` und `contactEmail` in `src/config.ts` prüfen bzw. eintragen
- [ ] Impressum und Datenschutzerklärung ausfüllen und rechtlich prüfen lassen
- [ ] Foto für „Über uns“ einsetzen (Anleitung oben in `src/components/About.astro`)
- [ ] Vorschaubild `public/og-image.png` (1200 × 630 px) erstellen und in `src/layouts/BaseLayout.astro` aktivieren
- [ ] Optional: Sitemap mit `npx astro add sitemap` ergänzen

## Online stellen

Zum Beispiel mit **Netlify** oder **Cloudflare Pages**:

1. Das Projekt in ein Git-Repository pushen und beim Anbieter verbinden.
2. Als Build-Befehl `npm run build` und als Ausgabeordner `dist` angeben.
3. Die Domain `vereinsordner.li` / `www.vereinsordner.li` beim Anbieter hinterlegen und die angezeigten DNS-Einträge bei deinem Domain-Registrar setzen.
4. `app.vereinsordner.li` bleibt davon unberührt und zeigt weiterhin auf die App.

## Datenschutz-Hinweis

Die Schrift *Plus Jakarta Sans* wird über das npm-Paket `@fontsource-variable/plus-jakarta-sans` mitgeliefert und vom eigenen Server ausgeliefert. Es gibt also keine Verbindung zu Google Fonts, und die Website setzt keine Cookies.
