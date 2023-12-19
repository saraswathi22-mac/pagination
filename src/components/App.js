"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import CartSidebar from "./Sidebar";
import { hideLoading } from "@/redux/slices/CartSlice";

export default function App({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideLoading());
  }, [dispatch]);
  
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
