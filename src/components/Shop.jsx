import React from "react";
import Product from "./Product";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

function Shop({ children }) {
  return (
    <section className="w-[70%] my-8 mx-auto">
      <h2 className="text-[1.5rem] text-[#a59b8b] uppercase">
        Elegant Clothing For Everyone
      </h2>

      <ul className="mt-3 grid grid-cols-3 gap-5">{children}</ul>
    </section>
  );
}

export default Shop;
