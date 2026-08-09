import type { Metadata } from "next";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Created by Tyler Hall",
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