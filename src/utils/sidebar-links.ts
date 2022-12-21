export type SidebarLink = {
  url: string;
  name: string;
  icon: string;
  iconDrop?: string;
  submenu?: {
    url: string;
    name: string;
  }[]
}


export const sidebarLinks: SidebarLink[] = [
  {name: 'Home', url: '/', icon: 'home'},
  {name: 'Cadastro beneficiário', url: 'cadastro-beneficiario', icon: 'account_circle'},
  {name: 'Agendamento', url: '/', icon: 'event'},
  {name: 'Painel Administrativo', url: '/', icon: 'supervised_user_circle', iconDrop: 'keyboard_arrow_down', submenu: [
    {name: 'Cadastrar Hospital', url: 'cadastro-hospital'},
    {name: 'Cadastrar Médico', url: '/'},
    {name: 'Cadastrar Especialidade', url: '/'}
  ]}
]
