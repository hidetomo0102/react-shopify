import React, { useContext } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Grid,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { ShopContext } from "../context/shopContext";

export const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);
  return (
    <>
      <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems &&
              checkout.lineItems.map((item) => (
                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <CloseIcon
                      cursor="pointer"
                      onClick={() => removeLineItem(item.id)}
                    />
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image src={item.variant.image.src} />
                  </Box>
                  <Box
                    display="flex"
                    flexDir="column"
                    align="center"
                    justify="center"
                  >
                    <Text fontSize="sm" fontWeight="bold">
                      {item.title}
                    </Text>
                    <Text fontSize="sm">{item.variant.title}</Text>
                  </Box>
                  <Box>
                    <Text
                      height="100%"
                      display="flex"
                      align="center"
                      justifyContent="center"
                    >
                      {item.variant.price}
                    </Text>
                  </Box>
                </Grid>
              ))}
          </DrawerBody>

          <DrawerFooter>
            <Button w="100%" colorScheme="blue">
              <Link w="100%" href={checkout?.webUrl}>
                決済へ進む
              </Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
