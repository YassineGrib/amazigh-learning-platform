import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import { Providers } from '@/components/providers';
import { Navigation } from '@/components/navigation';
// import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Amazigh Learning Platform - Learn Berber Language",
  description: "A comprehensive web-based platform for learning the Amazigh (Berber) language with AI integration. Master Kabyle, Chaoui, Mozabite, and other dialects through interactive lessons, quizzes, and conversation practice.",
  keywords: "Amazigh, Berber, language learning, Kabyle, Chaoui, Mozabite, Tarifit, Tashelhit, North Africa",
  authors: [{ name: "Amazigh Learning Platform" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Amazigh Learning Platform",
    description: "Learn the beautiful Amazigh (Berber) language with our comprehensive platform",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 font-sans antialiased">
        <Providers>
          <div className="flex min-h-screen">
            <Navigation />
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
          {/* <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                style: {
                  background: '#22c55e',
                },
              },
              error: {
                style: {
                  background: '#ef4444',
                },
              },
            }}
          /> */}
        </Providers>
      </body>
    </html>
  );
}
