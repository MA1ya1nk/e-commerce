import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center min-h-screen bg-white">
        {/* Navbar sits at the very top */}
        <Navbar /> 
        
        {/* main flex-grow fills the space between nav and footer */}
        <main className="flex-grow w-full max-w-[1280px] flex flex-col items-center">
          {children}
        </main>

        {/* Footer sits at the bottom of the content */}
        <Footer />
      </body>
    </html>
  );
}