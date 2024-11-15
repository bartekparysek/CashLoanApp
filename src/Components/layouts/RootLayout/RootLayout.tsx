import { Footer } from "@/components/molecules/Footer";
import { Header } from "@/components/molecules/Header";
import "@/styles/tailwind.css";

export function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="preload"
        href="/fonts/poppins/Poppins-Light.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/Poppins-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/Poppins-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/Poppins-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/playfair/PlayfairDisplay-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/playfair/PlayfairDisplay-BoldItalic.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/playfair/PlayfairDisplay-Italic.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/playfair/PlayfairDisplay-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <body className="flex h-screen w-full flex-grow flex-col">
        <Header />
        <div className="flex h-full w-full items-center justify-center px-5 md:px-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

export function RootLayoutMetadata() {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    title: "CashLoanApp - Home",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
      other: {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
    },
  };
}
