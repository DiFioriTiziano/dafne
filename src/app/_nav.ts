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
    name: 'Shared'
  },
  {
    name: 'Shared',
    url: '/shared/test',
    icon: 'icon-drop'
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
            name: 'Inserimento',
            url: '/verbali/inserimento',
            icon: 'icon-puzzle'
          },
          {
            name: 'Modifica',
            url: '/verbali/modifica',
            icon: 'icon-puzzle'
          }
        ]
      },
      {
        name: 'Allegati',
        url: '/volumi',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Inserimento',
            url: '/volumi/inserimento',
            icon: 'icon-puzzle'
          },
          {
            name: 'Modifica',
            url: '/volumi/modifica',
            icon: 'icon-puzzle'
          }
        ]
      }
    ]
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    class: 'mt-auto',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
