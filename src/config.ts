// Zentrale Einstellungen der Website – hier anpassen.
export const SITE = {
  name: 'Vereinsordner',
  url: 'https://www.vereinsordner.li',
  title: 'Vereinsordner',
  description: 'Vereinsverwaltung, einfach gemacht',

  // Login zur Vue-App. Solange leer, ist "Anmelden" deaktiviert.
  // Später z. B.: appUrl: 'https://app.vereinsordner.li',
  appUrl: '',

  contactEmail: 'info@vereinsordner.li',

  // TODO: Formular-Endpunkt eintragen (siehe README, z. B. Formspree oder eigenes Backend)
  formEndpoint: 'https://formspree.io/f/DEINE-FORMULAR-ID',
};

export const NAV = [
  { href: '/#vereine', label: 'Für wen' },
  { href: '/#funktionen', label: 'Funktionen' },
  { href: '/#preise', label: 'Preise' },
  { href: '/#ueber-uns', label: 'Über uns' },
];
