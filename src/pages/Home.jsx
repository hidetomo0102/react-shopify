import { Box, Image, Text, Grid } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";

import { ShopContext } from "../context/shopContext";

export const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Box>
      <Hero />
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.title}>
            <Box _hover={{ opacity: "80%" }} textAlign="center" pb="2rem">
              <Image src={product.images[0].src} />
              <Text fontWeight="semibold" pt="1rem">
                {product.title}
              </Text>
              <Text>${product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};
