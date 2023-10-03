import React,{useContext} from "react";
import { product } from "../components/products";
import { ShopContext } from "../context/shop-context";
import {Card,Box,Grid,Typography, CardMedia,CardContent, CardHeader  } from "@mui/material";
export const Wishlistitem=(props)=>{
    const {cartItem,addtocart,removefromcart,addtowishlist,updatecartitemcount,removefromwistlist}=useContext(ShopContext);
    const {productName,productId,productImage,productDescription,productPrice}=props.data;
    const amount=cartItem[productId];
    
    return(
        <div>
            <br/>
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
                    ₹{productPrice}
                </CardContent>
               
            </Card>
        </div>
       
    );
}
