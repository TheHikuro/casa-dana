import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar'
import { useIdentityStore } from '@/pages/admin/admin.utils.ts'
import { UserFooter } from './user-footer'

export function LayoutSidebarFooter() {
  const {
    identity: { isConnected, email }
  } = useIdentityStore()

  return (
    <SidebarMenu>
      <SidebarMenuItem className="px-3">
        {isConnected ? <UserFooter email={email} /> : null}
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
