import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("carrito") !== null ? JSON.parse(localStorage.getItem("carrito")) : [];

const totalAmount =
  localStorage.getItem("total") != null ? JSON.parse(localStorage.getItem("total")) : 0;

const totalQuantity =
  localStorage.getItem("totalCount") != null ? JSON.parse(localStorage.getItem("totalCount")) : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("carrito", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalCount", JSON.stringify(totalQuantity));
};

const initialState = {
  totalCount: totalQuantity,
  carrito: items,
  pagarCarrito: [],
  total: totalAmount
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.carrito = [...state.carrito, { product: action.payload, cantidad: 1, estado: false }];
      state.totalCount += 1;
      setItemFunc(state.carrito.map(item => item),state.total, state.totalCount)
    },
    removeProductToCart: (state, action) => {
      const productId = action.payload;
      state.totalCount -= 1;
      state.carrito = state.carrito.filter(pro => pro["product"].id !== productId);
      state.pagarCarrito = state.pagarCarrito.filter(pro => pro.product.id !== productId);
      state.total = state.pagarCarrito.reduce(
        (acomulador, pro) => acomulador + pro.product.price * pro.cantidad,
        0
      );
      setItemFunc(state.carrito.map(item => item),state.total, state.totalCount)
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
      setItemFunc(state.carrito.map(item => item),state.total, state.totalCount)
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
      setItemFunc(state.carrito.map(item => item),state.total, state.totalCount)
    },
    totalProductToCart: state => {
      state.pagarCarrito = state.carrito.filter(pro => pro.estado === true);
      state.total = state.pagarCarrito.reduce(
        (acomulador, pro) => acomulador + pro.product.price * pro.cantidad,
        0
      );
      setItemFunc(state.carrito.map(item => item),state.total, state.totalCount)
    },

    totalPayToCar: state => {
      state.total = state.pagarCarrito.reduce(
        (acomulador, pro) => acomulador + pro.product.price * pro.cantidad,
        0
      );
      setItemFunc(state.carrito.map(item => item),state.total, state.totalCount)
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
