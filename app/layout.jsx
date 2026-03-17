import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/components/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// ✅ Removed ": Metadata" type annotation
export const metadata = {
  title: 'ShopRise',
  description: 'Marketplace',
};

// ✅ Removed ": { children: React.ReactNode }" type definition
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className="min-h-screen">
             {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}