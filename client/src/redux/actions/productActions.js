import axios from "axios";
import { setProducts, setError, setLoading } from "../slices/products";

const backendUrl = "http://localhost:5000";

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`${backendUrl}/api/products`);
    dispatch(setProducts(data));
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
