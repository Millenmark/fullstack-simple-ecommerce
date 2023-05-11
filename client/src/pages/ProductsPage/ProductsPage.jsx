import {
  Center,
  Spinner,
  Stack,
  Wrap,
  WrapItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../../components";
import { getProducts } from "../../redux/actions/productActions";
import { useEffect } from "react";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
        <Alert status="error" >
          <AlertIcon/>
          <AlertTitle>Oops!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        products.map((product, index) => (
          <WrapItem key={index}>
            <Center w={"250px"} h={"550px"}>
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))
      )}
    </Wrap>
  );
};

export default ProductsPage;
