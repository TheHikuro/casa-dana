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
    APPLICATION: [
      {
        title: 'Dashboard',
        icon: 'house',
        url: '/'
      }
    ]
  }

  return { sidebarGroup }
}
