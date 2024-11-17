import type { Metadata } from "next";

import "./globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ConfigProvider } from "antd";
import { Lato } from "next/font/google";

const openSans = Lato({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pyrAI",
  description: "Web-based platform for AI research and collaboration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <header>
        <script
          defer
          data-domain="mirarchitect.matrament.com"
          src="https://plausible.bartekadamczyk.eu/js/script.js"
        ></script>
      </header>
      <body>
        {/* <script>0</script> */}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#9bc1bc",
              borderRadius: 16,
              fontFamily: openSans.style.fontFamily,
              borderRadiusSM: 12,
              borderRadiusLG: 20,
            },
            components: {
              Button: {
                textHoverBg: "#f9f9f9",
                primaryColor: "#000000",
                fontFamily: openSans.style.fontFamily,
                defaultBorderColor: "#000000",

                // contentFontSize: 16,
              },
              Upload: {
                lineWidth: 0,
              },
              Table: {
                headerBorderRadius: 0,
                fontFamily: openSans.style.fontFamily,
                rowSelectedBg: "white",
                rowSelectedHoverBg: "#f9f9f9",
                rowHoverBg: "#F0FFFA",
              },
              Collapse: {
                contentPadding: "0px 0px",
                fontFamily: openSans.style.fontFamily,
                // colorBorder: "#dcdcdc",
              },
              Input: {
                fontFamily: openSans.style.fontFamily,
                // colorBorder: "#000000",
              },
              InputNumber: {
                fontFamily: openSans.style.fontFamily,
              },
              Select: {
                fontFamily: openSans.style.fontFamily,
                // optionFontSize: 16,
              },
              Modal: {
                borderRadiusSM: 16,
              },
            },
          }}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  );
}
