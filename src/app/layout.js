import { Inter } from "next/font/google";
import "./globals.css";
import App from "@/components/App";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zenith World",
  description:
    "An e-commerce site for listing the items, item details, cart and checkout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
