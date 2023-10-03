import React,{ useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const CartItem=(props)=>{
    const {productName,productDescription,productId,productImage,productPrice}=props.data;
    const {addtocart,cartItem,removefromcart,updatecartitemcount}=useContext(ShopContext);
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
                <button onClick={()=>addtocart(productId)}>+</button>
            <input value={cartItem[productId]} onChange={(e)=>updatecartitemcount(Number(e.target.value) ,productId)}/>
            <button onClick={()=>removefromcart(productId)}>-</button>

            </Card>
        </div>
    );
}
