import { createSlice } from "@reduxjs/toolkit";
import  initialProducts from '../../../data/data.json';


export const productSlice = createSlice({
    name:'products',
    initialState:{
        list:initialProducts
    },
    reducers:{
       
    }
})

export default productSlice.reducer;
