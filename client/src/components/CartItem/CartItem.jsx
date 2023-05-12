import {
  CloseButton,
  Flex,
  Select,
  useColorModeValue as mode,
  Stack,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addNewCartItem } from "../../redux/actions/cartActions";

const CartItem = ({ cartItem }) => {
  const { name, image, price, stock, qty, id } = cartItem;
  const dispatch = useDispatch();

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify={"space-between"}
      align={"center"}
    >
      <Stack direction={"row"} spacing={"5"} width={"full"}>
        <Image
          rounded={"lg"}
          w={"120px"}
          h={"120px"}
          fit={"cover"}
          src={image}
          alt={name}
          draggable={"false"}
          loading={"lazy"}  
        />
        <Box>
          <Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CartItem;
