// Zentrale Einstellungen der Website – hier anpassen.
export const SITE = {
  name: 'Vereinsordner',
  url: 'https://www.vereinsordner.li',
  title: 'Vereinsordner – Vereinsverwaltung, einfach gemacht',
  description:
    'Mitglieder, Instrumente, Uniformen und Musiknoten an einem Ort – übersichtlich, sicher und für Vereine jeder Grösse.',

  // Login zur Vue-App
  appUrl: 'https://app.vereinsordner.li',

  // TODO: Kontaktadresse prüfen
  contactEmail: 'info@vereinsordner.li',

  // TODO: Formular-Endpunkt eintragen (siehe README, z. B. Formspree oder eigenes Backend)
  formEndpoint: 'https://formspree.io/f/DEINE-FORMULAR-ID',
};

export const NAV = [
  { href: '/#funktionen', label: 'Funktionen' },
  { href: '/#vereine', label: 'Für wen' },
  { href: '/#preise', label: 'Preise' },
  { href: '/#ueber-uns', label: 'Über uns' },
];
