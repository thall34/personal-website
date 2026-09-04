import type { Metadata } from "next";
import Footer from '../components/Footer';
import './globals.css';
import type { Viewport } from 'next';

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Created by Tyler Hall",
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
        {/* pages render in the main */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};