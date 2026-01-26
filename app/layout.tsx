import Header from "@/components/header";
import Footer from "@/components/footer";

// Importar base.css primero para que Tailwind se cargue correctamente
import "@/public/base.css";
import "@/public/admin.css";
import "@/public/auth.css";
import "@/public/help.css";
import "@/public/colecction.css";
import "@/public/footer.css";
import "@/public/gallery.css";
import "@/public/index.css";
import "@/public/artwork-detail.css";
import "@/public/recognition.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Oracle of Art</title>
      </head>
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
