import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
  title: "swink",
  description: "Unifying Voting and Finance",
};

const ManropeFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ManropeFont.className}>
      <body>{children}</body>
    </html>
  );
}
