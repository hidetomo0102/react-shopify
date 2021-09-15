import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/shopContext";

export const ProductPage = () => {
  const { handle } = useParams();

  const { fetchProductWithHandle, additemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};
