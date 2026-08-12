import type { Metadata } from "next";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
import type { Viewport } from 'next';

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Created by Tyler Hall",
  // viewport: 'width=device-width, initial-scale=1',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* pages render in the main */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};