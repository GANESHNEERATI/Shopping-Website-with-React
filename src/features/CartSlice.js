import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
  },
  reducers: {
    product__add: (state, action) => {
      state.product.push(action.payload);
    },
    product__remove: (state, action) => {
      console.log(action.payload.id);
      const index = state.product.findIndex(
        (basketItem) => basketItem.product_id === action.payload.id
      );
      let newBasket = [...state.product];
      if (index >= 0) {
        newBasket.splice(index, 1);
        state.product = newBasket;
      } else {
        console.warn(
          `cant remove product(id:${action.payload.id}) as its not in basket`
        );
      }
    },
  },
});

export const { product__add, product__remove } = cartSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of

export const selectProduct = (state) => state.cart.product;
export default cartSlice.reducer;
