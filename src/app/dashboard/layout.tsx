import { dashboardConfig } from '@/config/dashboard';
import { siteConfig } from '@/config/site';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SidebarNav } from '@/components//dashboard/sidebar-nav';
import { SiteFooter } from '@/components/dashboard/site-footer';
import { SiteHeader } from '@/components/dashboard/site-header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="border-b">
          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
              <ScrollArea className="h-full py-6 pr-6 lg:py-8">
                <SidebarNav items={dashboardConfig.sidebarNav} />
              </ScrollArea>
            </aside>

            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">
                  {siteConfig.name} components
                </h1>
              </div>
              <div className="flex flex-1 items-center justify-center rounded-lg border-2 border-dashed shadow-sm">
                {children}
              </div>
            </main>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
