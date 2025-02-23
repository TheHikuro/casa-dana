import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar.tsx'
import { SingleSidebarGroupType } from '../utils'
import { useNavigate } from 'react-router'

export function LayoutSidebarContent({
  items
}: {
  items: SingleSidebarGroupType[]
}) {
  const redirect = useNavigate()
  return (
    <SidebarMenu>
      {items.map((item: SingleSidebarGroupType) => {
        return (
          <SidebarMenuItem
            key={item.title}
            onClick={() => redirect(item.url)}
            className="cursor-pointer"
          >
            <SidebarMenuButton asChild>
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}
