import { RootLayout, RootLayoutMetadata } from "@/components/layouts/RootLayout";
import type { Viewport } from "next";

export default RootLayout;

export { RootLayoutMetadata as generateMetadata };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
