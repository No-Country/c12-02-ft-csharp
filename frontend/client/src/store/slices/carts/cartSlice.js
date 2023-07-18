import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  carrito: [],
  pagarCarrito: [],
  total: 0,
  x: "hola"
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
      state.totalCount -= 1;
      state.carrito = state.carrito.filter(pro => pro["product"].id !== productId);
      state.pagarCarrito = state.pagarCarrito.filter(pro => pro.product.id !== productId);
    },
    removeProductToPay: (state, action) => {
      const { id, estado } = action.payload;
      state.total = 0;
      if (estado) {
        state.pagarCarrito = state.pagarCarrito.filter(pro => pro.product.id !== id);
        state.carrito.forEach(pro => {
          if (pro.product.id === id) {
            pro.estado = false;
          }
        });
        state.pagarCarrito.forEach(pro => (state.total += pro.product.price * pro.cantidad));
      }
    },
    incrementDecrement: (state, action) => {
      const { estado, id } = action.payload;
      state.carrito.forEach(pro => {
        if (pro.product.id === id) {
          if (estado) {
            pro.cantidad++;
          }
          if (pro.cantidad > 1 && !estado) {
            pro.cantidad--;
          }
        }
      });
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
    totalProductToCart: state => {
      state.pagarCarrito = state.carrito.filter(pro => pro.estado === true);
      state.total = state.pagarCarrito.reduce(
        (acomulador, pro) => acomulador + pro.product.price * pro.cantidad,
        0
      );
    },

    totalPayToCar: state => {
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
  totalPayToCar,
  incrementDecrement,
  removeProductToPay
} = cartSlice.actions;

export default cartSlice.reducer;
