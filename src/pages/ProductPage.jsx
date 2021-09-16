import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import {
  Box,
  Grid,
  Text,
  Button,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/react";

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
    <Box p="2rem">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
        <Flex justifyContent="center" alignItems="center">
          <Image src={product.images[0].src} />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px="2rem"
        >
          <Heading pb="2rem">{product.title}</Heading>
          <Text fontWeight="bold" pb="2rem">
            ${product.variants[0].price}
          </Text>
          <Text color="gray.500" pb="2rem">
            ${product.description}
          </Text>
          <Button
            w="10rem"
            backgroundColor="#ff38BD"
            color="white"
            _hover={{ opacity: "70%" }}
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
          >
            カートへ追加
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};
