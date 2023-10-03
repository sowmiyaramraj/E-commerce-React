import React,{useContext} from "react";
import {Products} from "../components/products";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./cartitem";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Cart=()=>{
    const navigate=useNavigate();
    const {cartItem,addtocart,gettotalcartamount}=useContext(ShopContext);
    const totalamount=gettotalcartamount();
    return(
        <div>
        <div>
            <Typography style={{fontSize:"32px",fontStyle:"italic",color:"purple",alignItems:"center"}}>Cart</Typography>

           {Products.map((product=>{
            
            if(cartItem[product.productId] !== 0){
                return <CartItem data={product}/>
            }else{
                <p>No item to display</p>
            }
           }))}
        </div>
        <div>
        <p>Subtotal: {totalamount}</p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button>Place Order</button>
      </div>
      </div>
        );
}
