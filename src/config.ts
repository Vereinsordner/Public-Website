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

  formEndpoint: 'https://submit-form.com/EZVj9tyWy',
};

export const NAV = [
  { href: '/#vereine', label: 'Für wen' },
  { href: '/#funktionen', label: 'Funktionen' },
  { href: '/#preise', label: 'Preise' },
  { href: '/#ueber-uns', label: 'Über uns' },
];
