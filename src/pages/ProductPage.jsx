import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Box, Grid, Text, Button, Heading, Image } from "@chakra-ui/react";

import { ShopContext } from "../context/shopContext";

export const ProductPage = () => {
  const { handle } = useParams();

  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;
  return (
    <Box>
      <Grid gridTemplateColumns="repeat(2, 1fr)">
        <Image src={product.images[0].src} />
        <Box>
          <Heading>{product.title}</Heading>
          <Text>${product.variants[0].price}</Text>
          <Text>${product.description}</Text>
          <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
            カートへ追加
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
