import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Products: [],
    filteredProducts:[],
    flag:false,
     search:"",
}

export const productSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    GetAllProducts:(state,actions)=>{
          state.Products = actions.payload;
    },
    SetFilteredProducts:(state,actions)=>{
      state.filteredProducts = actions.payload;
    },
    SetFlag:(state,actions)=>{
      state.flag = actions.payload
    },
    SetSearch:(state,actions)=>{
      state.search = actions.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {GetAllProducts,SetFilteredProducts ,SetFlag,SetSearch} = productSlice.actions

export default productSlice.reducer