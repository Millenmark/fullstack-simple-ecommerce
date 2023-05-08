import {Center, Wrap, WrapItem} from "@chakra-ui/react"
import { products } from "../../products"
import { ProductCard } from "../../components"

const ProductsPage = () => {
  return (
    <Wrap spacing={"2"} justify={"center"} minHeight={"100vh"}>
      {
        products.map((product, index) => (
          <WrapItem key={index}>
            <Center w={"250px"} h={"550px"} border={"2px solid red"}>
              {product.name}
            </Center>
          </WrapItem>
        ))
      }
    </Wrap>
  )
}

export default ProductsPage