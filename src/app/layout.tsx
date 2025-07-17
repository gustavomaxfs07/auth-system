import "./globals.css";
import { FooterComponent } from "@/components/ui/Footer";
import HeaderServer from "@/components/ui/HeaderServer";

export default function RootLayout({ children }: Readonly <{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <HeaderServer />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
