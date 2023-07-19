import { createSlice } from "@reduxjs/toolkit";
import { collection,getDocs } from "firebase/firestore/lite";
import { db } from "../../../firebase/firebase";

export const fetchProduct = () => {
  return async dispatch => {
    try {
      const querySnapshop = await getDocs(collection(db, "products"));
      const products = [];
      querySnapshop.forEach(pro =>{
        products.push({id:pro.id, ...pro.data()})
      })
      
      dispatch(setProduct(products));
      
    } catch (error) {
      console.log("error al obtener los productos"+error)
    }
  };
};

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: []
  },
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
