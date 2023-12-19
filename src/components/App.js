"use client";

import Header from "./Header";
import CartSidebar from "./Sidebar";

export default function App({ children }) {
  return (
    <div>
      <div className="mr-44">
        <Header />
        <main className="p-4">{children}</main>
      </div>
      <CartSidebar />
    </div>
  );
}
