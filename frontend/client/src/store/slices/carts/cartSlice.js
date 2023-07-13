import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  carrito: [],
  pagarCarrito: [],
  total: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.carrito = [...state.carrito, { product: action.payload, cantidad: 1, estado: false }];
      state.totalCount += 1;
    },
    removeProductToCart: (state, action) => {
      const productId = action.payload;
      state.totalCount === 0 ? (state.totalCount = 0) : (state.totalCount -= 1);
      state.carrito = state.carrito.filter(pro => pro["product"].id !== productId);
      state.pagarCarrito = state.pagarCarrito.filter(pro => pro.product.id !== productId);
      state.total = state.pagarCarrito.reduce(
        (acomulador, pro) => acomulador + pro.product.price * pro.cantidad,
        0
      );
      if (state.carrito.length === 0) state.quantity = 0;
    },
    cantidadProductToCart: (state, action) => {
      const { id, quantity, isSelected } = action.payload;
      state.carrito = state.carrito.map(pro => {
        if (pro["product"].id === id) {
          return { ...pro, cantidad: quantity, estado: isSelected };
        }
        return pro;
      });
    },
    totalProductToCart: (state) => {
      state.pagarCarrito = state.carrito.filter(pro => pro.estado === true);
      state.total = state.pagarCarrito.reduce(
        (acomulador, pro) => acomulador + pro.product.price * pro.cantidad,
        0
      );
    },

    totalPayToCar: (state) => {
      state.total = state.pagarCarrito.reduce(
        (acomulador, pro) => acomulador + pro.product.price * pro.cantidad,
        0
      );
    }
  }
});

export const {
  addProductToCart,
  removeProductToCart,
  totalProductToCart,
  cantidadProductToCart,
  totalPayToCar
} = cartSlice.actions;

export default cartSlice.reducer;
