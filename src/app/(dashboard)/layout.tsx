'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Building2, FileText, Settings, LogOut, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_USER } from '@/lib/mock-data';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<typeof MOCK_USER | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('fyniq_user');
    if (!storedUser) {
      router.push('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('fyniq_user');
    router.push('/login');
  };

  if (!user) {
    return null; // Show nothing while checking auth
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="bg-surface border-b border-border-subtle sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Nav */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-semibold text-text-primary">
                    FynIQ Portal
                  </h1>
                  <p className="text-xs text-text-tertiary">
                    CRE Lending Group
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                <Button
                  variant={pathname === '/dashboard' ? 'default' : 'ghost'}
                  className={pathname === '/dashboard' ? 'bg-accent-primary hover:bg-accent-hover text-white' : ''}
                  onClick={() => router.push('/dashboard')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Applications
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => alert('Settings page coming soon')}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </nav>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-3">
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full" />
              </Button>

              {/* User Profile */}
              <div className="flex items-center gap-3 pl-3 border-l border-border-subtle">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-text-primary">
                    {user.name}
                  </p>
                  <p className="text-xs text-text-tertiary">
                    {user.company}
                  </p>
                </div>
                <div className="w-9 h-9 bg-accent-light rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-accent-primary" />
                </div>
              </div>

              {/* Logout */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
