import axios from "axios";
import { addCartItem, setError, setLoading } from "../slices/cart";

export const addNewCartItem = (id, qty) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND}/api/products/${id}`
    );
    const itemToAdd = {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      qty,
    };
    dispatch(addCartItem(itemToAdd));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occurred"
      )
    );
  }
};
