import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },

  {
    title: true,
    name: 'Dafne'
  },
  {
    name: 'Volumi',
    url: '/volumi',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Verbali',
        url: '/verbali',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Elenco',
            url: '/verbali/inserimento',
            icon: 'icon-puzzle'
          },
        ]
      },
      {
        name: 'Allegati',
        url: '/volumi',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Elenco',
            url: '/volumi/inserimento',
            icon: 'icon-puzzle'
          },
        ]
      }
    ]
  }
];
