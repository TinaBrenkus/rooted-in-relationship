import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const crimsonText = Crimson_Text({ 
  weight: ['400', '600'],
  subsets: ["latin"],
  variable: '--font-crimson'
});

export const metadata: Metadata = {
  title: "Rooted In Relationship - Early Childhood Special Education Consulting",
  description: "Evidence-based behavior strategies rooted in relationship, not punishment. Supporting children, parents, and teachers with compassionate, effective approaches.",
  keywords: "early childhood, special education, behavior support, child development, positive behavior, relationship-based, consulting",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${crimsonText.variable} antialiased bg-stone-50`}>
        {children}
      </body>
    </html>
  );
}
