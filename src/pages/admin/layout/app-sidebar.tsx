import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel
} from '@/components/ui/sidebar'
import { useSidebarGroup } from '@/pages/admin/layout/utils'
import { LayoutSidebarContent } from './_components/sidebar-content'
import { LayoutSidebarFooter } from '@/pages/admin/layout/_components/sidebar-footer.tsx'

export function AppSidebar() {
  const { sidebarGroup } = useSidebarGroup()
  return (
    <Sidebar>
      <SidebarContent>
        {Object.keys(sidebarGroup).map((category) => {
          const items = sidebarGroup[category]
          return (
            <SidebarGroup key={category}>
              <SidebarGroupLabel>{category}</SidebarGroupLabel>
              <SidebarGroupContent>
                <LayoutSidebarContent items={items} />
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
      </SidebarContent>
      <LayoutSidebarFooter />
    </Sidebar>
  )
}
