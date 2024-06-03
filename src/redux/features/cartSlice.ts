import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: string;
    title: string;
    price: number;
    img: string;
    quantity: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<IProduct>) => {
            if(state.findIndex(item => item.id === action.payload.id) === -1){
                state.push(action.payload)
            }
            else{
                return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item)
            }
        },
        removeFromCart: (state, action:PayloadAction<string>) => {
            return state.filter(item=> item.id !== action.payload)
        }
    }

})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer