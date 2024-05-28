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
    icon: 'fa fa-book',
    children: [
      {
        name: 'Verbali',
        url: '/verbali',
        icon: 'icon-book-open',
        children: [
          {
            name: 'Elenco',
            url: '/verbali/elenco',
            icon: 'fa fa-list'
          },
        ]
       },
      {
        name: 'Contratti',
        url: '/contratti',
        icon: 'icon-docs',
        children: [
          {
            name: 'Elenco',
            url: '/contratti/elenco',
            icon: 'fa fa-list'
          },
        ]
      },
      {
        name: 'Allegati',
        url: '/allegati',
        icon: 'icon-folder-alt',
        children: [
          {
            name: 'Elenco',
            url: '/allegati/elenco',
            icon: 'fa fa-list'
          },
        ]
      }
    ]
  }
];
