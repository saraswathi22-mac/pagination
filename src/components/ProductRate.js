"use client";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

export default function ProductRate({ rate, count }) {
  return (
    <div className="card">
      <Rating style={{ maxWidth: 100 }} value={rate} readOnly /> {count} reviews
    </div>
  );
}
