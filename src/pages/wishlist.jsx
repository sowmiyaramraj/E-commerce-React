import React,{useContext} from "react";
import {Products} from "../components/products";
import { ShopContext } from "../context/shop-context";
import { Wishlistitem } from "./wishlistitem";
export const Wishlist=()=>{
    const {wishlistItem,addtowistlist}=useContext(ShopContext);
   
    return(
        <div>
            <Typography style={{fontSize:"32px",fontStyle:"italic",color:"purple",alignItems:"center"}}>Wishlist</Typography>
           {Products.map((product=>{
            console.log(product.productId);
            
            if(wishlistItem[product.productId] === 1){
                return <Wishlistitem data={product}/>
            }
           }))}
        </div>
    );
}
