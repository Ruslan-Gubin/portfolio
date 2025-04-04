import { fontUbuntu } from "@/shared/utils/init-fonts";

import "./styles/globals.scss";
import styles from "./styles/pages/Layout.module.scss";
import { getMetadata } from "@/shared/utils/get-metadata";
import { LayoutHeader } from "@/widgets/layout/layout-header/LayoutHeader";
import { LayoutFooter } from "@/widgets/layout/layout-footer/LayoutFooter";

export const generateMetadata = async () =>
  getMetadata({
    title: "Layout title",
    description: "Generate by create next app",
  });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontUbuntu.variable}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={styles.layoutWrapper}>
        <LayoutHeader />
        <main className={styles.layoutMainContent}>{children}</main>
        <LayoutFooter />
      </body>
    </html>
  );
}
