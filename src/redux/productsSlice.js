import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import products from '../data/products.json';

const productsSlice = createSlice({
    name: "productsSlice",
    initialState: {
        products: products,
        amountOfProductsToBuy: 0
    },
    reducers: {
        addProduct: (state) => {
            state.amountOfProductsToBuy = state.amountOfProductsToBuy + 1;
        }
    }
})

export const {addProduct} = productsSlice.actions
export default productsSlice.reducer