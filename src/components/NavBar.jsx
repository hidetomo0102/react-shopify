import React, { useContext } from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { MdMenu, MdShoppingBasket } from "react-icons/md";

import { ShopContext } from "../context/shopContext";

export const NavBar = () => {
  const { openCart, OpenMenu, checkout } = useContext(ShopContext);
  return (
    <Flex
      backgroundColor="#FFABE2"
      flexDirection="row"
      justifyContent="space-between"
      p="2rem"
    >
      <Icon fill="white" cursor="pointer" as={MdMenu} h={30} w={30}></Icon>
      <Image
        src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
        w={100}
        h={100}
        cursor="pointer"
      />
      <Icon
        fill="white"
        as={MdShoppingBasket}
        w={30}
        h={30}
        cursor="pointer"
        onClick={() => openCart()}
      />
    </Flex>
  );
};
