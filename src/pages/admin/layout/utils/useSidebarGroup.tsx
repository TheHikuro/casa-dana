import dynamicIconImports from 'lucide-react/dynamicIconImports'

type SidebarGroupType = {
  [key: string]: SingleSidebarGroupType[]
}

export type SingleSidebarGroupType = {
  title: string
  icon: keyof typeof dynamicIconImports
  url: string
  visible?: boolean
}

export function useSidebarGroup() {
  const sidebarGroup: SidebarGroupType = {
    CASADANA: [
      {
        title: 'Reservations',
        icon: 'book',
        url: '/admin'
      },
      {
        title: 'Utilisateurs',
        icon: 'user',
        url: '/admin/users'
      },
      {
        title: 'Prix',
        icon: 'dollar-sign',
        url: '/admin/prices'
      }
    ]
  }

  return { sidebarGroup }
}
