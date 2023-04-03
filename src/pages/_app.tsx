import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../components/forms/datePicker/datePicker.scss";

import localFont from "next/font/local";

const font = localFont({
  variable: "--font-family",
  src: [
    {
      path: "../../public/assets/fonts/EuclidCircularBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/EuclidCircularBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/EuclidCircularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/EuclidCircularLightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/EuclidCircularMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/EuclidCircularMediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/EuclidCircularRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/EuclidCircularSemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.variable}>
      <Component {...pageProps} />
    </main>
  );
}
