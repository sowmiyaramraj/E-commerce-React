import React, {createContext, useContext, useState} from "react";
import {Products }from "../components/products";
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<=Products.length;i++){
        cart[i]=0;   
    }    
    return cart;
}

const getDefaultwishlistItem=()=>{
    let wishlist={};
    for(let i=1;i<=Products.length;i++){
        wishlist[i]=0;   
    }    
    return wishlist;
   
}
export const ShopContextProvider=(props)=>{
        const [cartItem,setCartItem]=useState(getDefaultCart());
        const [wishlistItem,setWishlistItem]=useState(getDefaultwishlistItem());

        const addtocart=(itemid)=>{
            setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}));           
          };
          const removefromcart=(itemid)=>{
            setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}));           
          };
          const updatecartitemcount=(newamount,itemid)=>{
            setCartItem((prev)=>({...prev,[itemid]:newamount}));
          }
          const addtowishlist=(e,itemid)=>{
            e.preventDefault();
            if(e.target.innerText=== "add to wishlist"){
                setWishlistItem((prev)=>({...prev,[itemid]:prev[itemid]+1}));           
                e.target.innerText = "Remove from wishlist";
                
            }else{
                setWishlistItem((prev)=>({...prev,[itemid]:prev[itemid]-1}));           
                e.target.innerText = "add to wishlist";
            }


          }
    console.log(wishlistItem);
    const gettotalcartamount=()=>{
      let totalamount=0;
      for(const item in cartItem){
        if(cartItem[item]>0){
          let itemInfo= Products.find((product)=>product.productId===Number(item));
          totalamount += cartItem[item] * itemInfo.productPrice;
        }
      }
      return totalamount; 

    }

    const contextvalue={wishlistItem,gettotalcartamount,cartItem,addtocart,removefromcart,updatecartitemcount,addtowishlist};
   
    return <ShopContext.Provider value={contextvalue}>
        {props.children}</ShopContext.Provider>
}

