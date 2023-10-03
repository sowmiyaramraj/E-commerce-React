import React, { useContext, useState } from "react";
import { Cart } from "./cart";
import { ShopContext } from "../context/shop-context";
import { Card, CardContent, CardMedia } from "@mui/material";

export const Product=(props)=>{
    const {cartItem,addtocart,addtowishlist}=useContext(ShopContext);
    const {productName,productId,productImage,productDescription,productPrice}=props.data;
    const amount=cartItem[productId];

    return(
        <div><br/>
                <Card style={{width:"300px",height:"300px"}}>
                    <CardMedia component="img"
                            height="180"
                            width="200"
                            image={productImage}
                            alt="Product">
                    </CardMedia>
                    <CardContent>
                        {productName}<br/>
                        {productDescription}<br/>
                        ₹{productPrice}<br/>
                        <button className="addtocart" 
                        onClick={()=>addtocart(productId)}>
                        buy{amount>0 && <>({amount})</>}
                    </button> 
                    <button onClick={(e)=>addtowishlist(e,productId)} >add to wishlist</button>
                   </CardContent>
                </Card>
            </div>

    );
}
