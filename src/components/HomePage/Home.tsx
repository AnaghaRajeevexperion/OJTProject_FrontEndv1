import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Button, Grid, MenuList } from '@mui/material';
import axios from 'axios';
import { Container } from '@mui/system';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { TextField, Input } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import SortIcon from "@mui/icons-material/Sort";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShareIcon from "@mui/icons-material/Share";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import Grid from '@material-ui/core/Grid';
import Rating from '@mui/material/Rating';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';

export default function Home() {
  type Product = {
    productName: string;
    description: string;
    amount: number;
    rating: number;
  };
  const [productList, setProductList] = useState<Product[] | null>(null);
  const [filterStatus, setFilterStatus] = React.useState(true)
  const [selectedName, setSelected] = useState([]);
  const [minAmount, setMinAmount] = useState<number>(0);
  const [maxAmount, setMaxAmount] = useState<number>(0);
  const [sortStatus, setSortStatus] = React.useState(true);
  let [sortAmount, setSortAmount] = useState<number>(0);


  console.log(selectedName)
  console.log(minAmount)
  console.log(maxAmount)


  useEffect(() => {
    async function ProductList() {

      const response = await axios.get('http://localhost:8080/products/all')
      const products = response.data;
      setProductList(products);

    }
    ProductList();
  }, []);


  const handleSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    axios.get('http://localhost:8080/products/productPrice/asc')
      .then(
        response => {
          const products = response.data;
          setProductList(products);
        }
      )
  };

  const changeSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    axios.get('http://localhost:8080/products/productPrice/desc')
      .then(
        response => {
          const products = response.data;
          setProductList(products);
        }
      )
  };

  const handleChange = (value: any) => {
    if (value != null) {
      axios.get('http://localhost:8080/products/all?productType=' + value)
        .then(
          response => {
            const products = response.data;
            setProductList(products);
          }
        )
    } else {
      axios.get('http://localhost:8080/products/all')
        .then(
          response => {
            const products = response.data;
            setProductList(products);
          }
        )
    }
  };
  if (!productList) {
    return <div>Loading</div>;
  }

  return (
    <Container sx={{ width: 1500, backgroundColor: 'white', marginTop: -3 }}>
      <Box sx={{ display: "flex" }}>
        <Box
          component="nav"
          sx={{
            flexShrink: 0,
            backgroundColor: 'white'
          }}
        >
          <IconButton onClick={() => { setFilterStatus(filterStatus) }}>
            <FilterAltIcon />
          </IconButton>
          {filterStatus && <Container>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={productList.map((item: any) => (
                item.productType
              ))}
              onChange={(event, value) => handleChange(value)}
              sx={{ width: 200 }}
              renderInput={(params) => <TextField {...params} label="Select Product Type" />}
            />
          </Container>}
          <IconButton sx={{ marginTop: 10 }}
            onClick={() => {
              setSortStatus(sortStatus);
            }}
          >
            <SortIcon />
          </IconButton>
          {
            sortStatus && (
              <Grid>
                <Grid>
                  <Button onClick={handleSort}>
                    <CurrencyRupeeIcon />
                    Low to High
                  </Button>
                </Grid>
                <Grid>
                  <Button onClick={changeSort}>
                    <CurrencyRupeeIcon />
                    High to Low
                  </Button>
                </Grid>
              </Grid>
            )
          }
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            minHeight: "100vh",
          }}
        >

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, width: 900 }}>
            <ImageList sx={{ width: 1600 }} cols={3} rowHeight={160}>
              {productList.map((product: any) => (
                <Box p={3}>
                  <Box height={'280px'} border={'1px solid #e8e8e8'}>
                    <Box component={'img'} src={product.picture} width={'100%'} height={'100%'} sx={{ objectFit: 'contain', objectPosition: 'center' }} />
                  </Box>
                  <Box p={0} pb={0}>
                    <Box my={2}>
                      <Typography sx={{ fontSize: 'medium', marginLeft: '13' }}>
                        {product.productName} <br></br> {product.productType}
                      </Typography>
                    </Box>
                    <Box my={2}>
                      <Typography fontSize={'medium'} fontWeight={'bold'}>
                        ₹{product.productPrice}
                      </Typography>
                    </Box>
                  </Box>
                  <Box px={2}>
                    <Button fullWidth variant={'outlined'}>Add to Cart {" "} <ShoppingCartIcon /></Button>
                  </Box>
                </Box>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Box>
    </Container >
  );
}