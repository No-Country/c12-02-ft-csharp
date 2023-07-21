import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../../firebase/firebase";

export const fetchProduct = () => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const querySnapshop = await getDocs(collection(db, "products"));
      const products = [];
      querySnapshop.forEach(pro => {
        products.push({ id: pro.id, ...pro.data() });
      });

      dispatch(setProduct(products));
    } catch (error) {
      console.log("error al obtener los productos" + error);
      dispatch(setLoading(false));
    }
  };
};

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false
  },
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setProduct, setLoading } = productSlice.actions;

export default productSlice.reducer;
