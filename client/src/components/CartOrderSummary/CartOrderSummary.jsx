import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link as ReactLink, useNavigate } from "react-router-dom";

const CartOrderSummary = () => {
  const [buttonLoading, setButtonLoading] = useState();
  const standardShipping = Number(4.999).toFixed(2);
  const cartItem = useSelector((state) => state.cart);
  const { subtotal } = cartItem;
  const navigate = useNavigate();

  const checkoutHandler = () => {
    setButtonLoading(true)
    navigate("/checkout")
  }

  return (
    <Stack
      spacing={"8"}
      borderWidth={"1px"}
      rounded={"lg"}
      padding={"8"}
      w={"full"}
    >
      <Heading>Order Summary</Heading>
      <Stack spacing={"6"}>
        <Flex justify={"space-between"}>
          <Text fontWeight={"medium"} color={mode("gray.600", "gray.400")}>
            Subtotal
          </Text>
          <Text fontWeight={"medium"}>{subtotal}</Text>
        </Flex>
        <Flex justify={"space-between"}>
          <Text fontWeight={"medium"} color={mode("gray.600", "gray.400")}>
            Shipping
          </Text>
          <Text fontWeight={"medium"}>
            {subtotal <= 1000 ? (
              standardShipping
            ) : (
              <Badge
                rounded={"full"}
                px={"2"}
                fontSize={"0.8em"}
                colorScheme="green"
              >
                Free
              </Badge>
            )}
          </Text>
        </Flex>
        <Flex fontSize={"lg"} fontWeight={"semibold"}>
          {subtotal <= 1000
            ? Number(subtotal) + Number(standardShipping)
            : subtotal}
        </Flex>
      </Stack>
      <Button
        as={ReactLink}
        colorScheme="orange"
        size={"lg"}
        fontSize={"md"}
        rightIcon={<FiArrowRight />}
        isLoading={buttonLoading} 
        onClick={() => checkoutHandler()}
      >Checkout</Button>
    </Stack>
  );
};

export default CartOrderSummary;
