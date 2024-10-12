import {createContext, useState} from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{

    const [cartItem,setCartItem]=useState({});

    const addProduct=(itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}));
        }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }

    const removeProduct=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue={
        food_list
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider