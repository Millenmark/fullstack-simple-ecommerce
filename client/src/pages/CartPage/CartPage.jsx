import {
  Box,
  Flex,
  Heading,
  Stack,
  HStack,
  Link,
  useColorModeValue,
  Spinner,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  Wrap,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link as ReactLink } from "react-router-dom";
import { CartItem, CartOrderSummary } from "../../components";

const CartPage = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { loading, error, cart } = cartInfo;

  const getHeadingContent = () =>
    cart.length === 1 ? "(1 Item)" : `(${cart.length} Items)`;

  const color = useColorModeValue("orange.500", "orange.200");

  return (
    <Wrap spacing={"2"} justify={"center"} minHeight={"100vh"}>
      {loading ? (
        <Stack direction={"row"} spacing={4}>
          <Spinner
            mt={20}
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="orange.500"
            size="xl"
          />
        </Stack>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Oops!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status="warning">
          <AlertIcon />
          <AlertTitle>Your cart is empty</AlertTitle>
          <AlertDescription>
            <Link as={ReactLink} to={"/products"}>
              Click here to see our products
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx={"auto"}
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            spacing={{ base: "8", lg: "16" }}
          >
            <Stack spacing={{ base: "column", md: "10" }} flex={"2"}>
              <Heading fontSize={"2xl"} fontWeight={"extrabold"}>
                Shopping cart {getHeadingContent()}
              </Heading>

              <Stack spacing={"6"}>
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </Stack>
            </Stack>
            <Flex direction={"column"} align={"center"} flex={"1"}>
              <CartOrderSummary />
              <HStack mt={"6"} fontWeight={"semibold"}>
                <p>or</p>
                <Link as={ReactLink} to={"/products"} color={color}>
                  Continue Shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      )}
    </Wrap>
  );
};

export default CartPage;
