import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        {/* Navbar Container */}
        <header className="w-full flex justify-center border-b">
          <div className="w-full max-w-[1280px]">
            <Navbar />
          </div>
        </header>

        {/* Main Content Container */}
        <main className="flex-grow w-full flex justify-center">
          <div className="w-full max-w-[1280px]">
            {children}
          </div>
        </main>

        {/* Footer Container */}
        <footer className="w-full flex justify-center bg-[#F9FAFB] border-t">
          <div className="w-full max-w-[1280px]">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}