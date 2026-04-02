import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT. Bahana Totalindo Teknik - Engineering Excellence",
  description: "General Contractor specializing in Civil Construction, MEP, HVAC, and Interior Design with uncompromising precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-primary">
        {children}
      </body>
    </html>
  );
}
