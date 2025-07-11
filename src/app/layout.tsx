import { HeaderComponent } from "@/components/ui/Header";
import "./globals.css";
import { FooterComponent } from "@/components/ui/Footer";

export default function RootLayout({ children }: Readonly <{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
