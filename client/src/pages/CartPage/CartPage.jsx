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
import { Link as ReactLink } from "react-router-dom";

const CartPage = () => {
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
          <Stack></Stack>
        </Box>
      )}
    </Wrap>
  );
};

export default CartPage;
