import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


const ProductList=()=>{
    let productList:any=[]
    const[product,setProduct]:any=useState([])

    useEffect(()=>
    {
        axios.get("http://localhost:8080/products")
        .then(res=>{
            const loadedProducts:any=[];
            productList=[...res.data._embedded.products];
            console.log(productList);
            for(const key in productList)
            {
                loadedProducts.push({
                    product_code:productList[key].product_code,
                    product_name:productList[key].product_name,
                    product_type:productList[key].product_type,
                    product_price:productList[key].product_price,
                    product_image:productList[key].picture
                });
            }
            setProduct(loadedProducts);
            console.log(product[0])
        })
    });

    return(
        <Grid container spacing={5}>
        {product.map((product: { product_image: string | undefined; product_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; product_type: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; product_price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <Grid item md={3}>
                    <Box
                        sx={{ width: "40%" ,height:"40%", marginTop:"2rem",marginLeft:"1rem"}}
                        component='img'
                        src={product.product_image} alt="no image"
                    />
                    <Typography variant='h6' sx={{ fontWeight: "bold" }}>
                        {product.product_name} {product.product_type}
                    </Typography>
                    {/* <Typography variant='body2'>
                    Innovative, accessible and effortless cosmetics for every woman. 
                    </Typography> */}
                    <Typography variant='h5' sx={{ fontWeight: "bold", color: "#ff6d00" }}>
                        $ {product.product_price}
                    </Typography>
                    {/* <Typography variant='subtitle2' sx={{ color: "gray" }}>
                        $5.78 for shipping
                    </Typography> */}
                    <Button variant="outlined" >
                        ADD TO CART
                    </Button>
                </Grid>
            ))}
        </Grid>
    )
}

export default ProductList
