import { memo, PropsWithChildren } from 'react'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar.tsx'
import { AppSidebar } from '@/pages/admin/layout/app-sidebar.tsx'

export const MemoizedLayout = memo(function Layout({
  children
}: Readonly<PropsWithChildren>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className={'h-dvh'}>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <div className="p-5 h-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
})
