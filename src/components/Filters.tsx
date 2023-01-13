import { Select, MenuItem, InputLabel, Box, FormControl, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

type Props = {}

function Filters({ }: Props) {
    let productList: any = []
    let newProductList: any = []

    const [product, setProduct]: any = useState([])
    const [load, setLoad]: any = useState([])
    const [loading, setLoading]: any = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/product')
            .then(res => {
                const loadedProducts: any = [];
               
                productList = [...res.data._embedded.products]
                for (const key in productList) {
                    console.log("prroki9o9wfd", key);
                    loadedProducts.push({
                        // productName: productList[key].productName,
                        // productPrice: productList[key].productPrice,
                        // productImg: productList[key].productImg,
                        // productDesc: productList[key].productDesc,
                        productCategory: productList[key].productCategory
                    });
                    setProduct(loadedProducts);
                    // console.log("prrofd", product);
                    const loadProducts: any = [];
                    console.log("ssss",product);
                    for (const key2 in product) {
                        if((product[key2].productCategory!=productList[key].productCategory))
                        {
                            console.log("hiii", key);
                            loadProducts.push({
                                // productName: productList[key].productName,
                                // productPrice: productList[key].productPrice,
                                // productImg: productList[key].productImg,
                                // productDesc: productList[key].productDesc,
                                productCategory: productList[key2].productCategory
                            });
                        }
                        // if(productList[key2].productCategory!=product[key2].productCategory)
                        // {
                        //     console.log("hellod", key);
                        //     loadProducts.push({
                        //         // productName: productList[key].productName,
                        //         // productPrice: productList[key].productPrice,
                        //         // productImg: productList[key].productImg,
                        //         // productDesc: productList[key].productDesc,
                        //         productCategory: product[key2].productCategory
                        //     });
                        // }
                      
        
                    }
                    setLoad(loadProducts);
                    console.log("sss78987s",load);

                    const loadingProducts: any = [];
                    // console.log("ssss",load);
                    for (const key2 in load) {
                        if((load[key2].productCategory!=productList[key].productCategory)&&(product[key2].productCategory!=load[key2].productCategory))
                        {
                            // console.log("hiii", key);
                            loadingProducts.push({
                                // productName: productList[key].productName,
                                // productPrice: productList[key].productPrice,
                                // productImg: productList[key].productImg,
                                // productDesc: productList[key].productDesc,
                                productCategory: productList[key2].productCategory
                            });
                        }
                        // if(productList[key2].productCategory!=product[key2].productCategory)
                        // {
                        //     console.log("hellod", key);
                        //     loadProducts.push({
                        //         // productName: productList[key].productName,
                        //         // productPrice: productList[key].productPrice,
                        //         // productImg: productList[key].productImg,
                        //         // productDesc: productList[key].productDesc,
                        //         productCategory: product[key2].productCategory
                        //     });
                        // }
                      
        
                    }
                    setLoading(loadingProducts);
                    console.log("t67887",loading);
                    
                }
               
            })
           
    });
    
  
    return (
        <Fragment>

            <br />
            <Typography variant='h6'>
                Filters
            </Typography><br />

            {/* <InputLabel id="demo-simple-select-label">iii</InputLabel>
    <Select
        labelId="demo-simple-select-label"
        // id="demo-simple-select"
        // value={sort}
        label="Category"
        // onChange={handleChange}
      >
        <MenuItem value={1}>Price : Low to High</MenuItem>
        <MenuItem value={2}>Price : High to Low</MenuItem>
       
      </Select> */}
            <Box sx={{ minWidth: "10px" ,marginRight:"60rem"}}>
           
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={sort}
                        label="Category"
                    // onChange={handleChange}
                    >
                      
                         {product.map( (product: any) => (
                        <MenuItem value={product.productCategory}> {product.productCategory}</MenuItem>
                        ))}

                    </Select>
                </FormControl>
             
            </Box><br />

        </Fragment>


    )
}

export default Filters