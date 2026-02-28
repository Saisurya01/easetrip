'use client';

import { AuthProvider } from '@/lib/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
