import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "admin",
  description: "admin",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
