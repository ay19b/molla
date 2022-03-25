import React,{useState,useEffect} from 'react'
import {MdOutlineClose} from 'react-icons/md'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { makeStyles,Typography, Snackbar,Container,Button,Grid,Divider,TextField,Card,FormLabel,FormControl,FormControlLabel,RadioGroup,Radio} from '@material-ui/core'
import 'react-awesome-slider/dist/styles.css';
import Image from 'next/image';
import {useSelector,useDispatch} from 'react-redux';
import {SelectProduct} from '../features/productSlice'
import {selectTotalAmount} from "../features/variableSlice"
import {remove,incrementProduct,decrementProduct} from "../features/productSlice"
import {setTotalAmount} from "../features/variableSlice"
import NextLink from 'next/link'
import Head from 'next/head'
import Footer from '../component/footer/footer'
import Nav from '../component/nav/nav'




const useStyles = makeStyles((theme) => ({
	
    headerCart:{
		textAlign:'center',
		padding:'3%',
		backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize:'cover',
		backgroundImage:"url(../images/headerCart.jpg)",
		[theme.breakpoints.down('sm')]:{
			padding: '6rem 3% 3rem 3%',
		}
	},
	linkPages:{
		display:'flex',
		padding: '1% 0 1% 0',
	},
	linkHome:{
		marginRight: '1%',
		cursor:'pointer',
		fontWeight: 'inherit',
		color:'#a0a0a0',
	},
	infCart:{
		backgroundColor:"white",
		padding: '1% 0 4% 0',
	},
	headerTable:{
		marginBottom: '3%',
		marginTop: '8%',
		[theme.breakpoints.down("xs")]: {
         display:'none',
        },
	},
	products:{
		marginBottom: '3%',
		marginTop: '2%',
	},
	prod:{
		margin:'1% 0 1% 0',
		position: 'relative',
		[theme.breakpoints.down("xs")]: {
         flexDirection: 'column',
        },
	},
	item:{
		display:'flex',
		alignItems:'center',
		color: 'black',
		[theme.breakpoints.down("xs")]: {
         flexDirection: 'column',
         textAlign:'center',
		 marginBottom: '1%',
        },
	}, 
	header:{
		marginLeft: '7%',
		[theme.breakpoints.down('xs')]:{
			fontSize: '1.4rem',
			marginLeft:'0%',
		}
	},
	quantity:{
		display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
		border: '1px solid #ccc',
		[theme.breakpoints.down("xs")]: {
          width: '30%',
        },
	},
	calculTotal:{
		marginTop: '-7%',
		[theme.breakpoints.down("sm")]: {
         marginTop: '0%',
		 justifyContent: 'center',
         display: 'flex',
        },
	},
	card:{
		backgroundColor: '#f9f9f9 !important',
        padding: '3% 5% 3% 5%',
        display: 'block',
		[theme.breakpoints.down("sm")]: {
          width: '23rem',
        },
		[theme.breakpoints.down("xs")]: {
          width: '100%',
        },
	},
	subtotal:{
		marginBottom: '5%',
		marginTop: '5%',
		display: 'flex',
        justifyContent: 'space-between',
		color:'#4d4d4d'
	},
    btn:{
		border:'1px solid #3f51b5',
		color: '#3f51b5',
        width: '100%',
		marginTop: '4%',
		marginBottom: '3%',
		'&:hover':{
			color:'white',
			backgroundColor:'#3f51b5',
		}
	},
	closeIcon:{
		marginLeft:'6%',
		cursor:'pointer',
		color: '#ababab',
		[theme.breakpoints.down("xs")]: {
         position: 'absolute',
         top: '1%',
         right: '1%',
		 fontSize: '1.5rem',
        },
	},
    emptyCart:{
		backgroundColor:'white',
	},
	shopingCart:{
		fontSize:'10rem',
	},
	divdr:{
		width:'100%',
	},
}));
const Cart =()=>{
	const classes = useStyles();
	let totalAmount = useSelector(selectTotalAmount);
    const dispatch = useDispatch();
    const product = useSelector(SelectProduct)
    const cartProducts = product.filter((product) => product.added);
	const [value, setValue] = React.useState('0');
	const total= Number(parseFloat(value)+parseFloat(totalAmount));
	const [state, setState] = useState({
       open: false,
       vertical: 'top',
       horizontal: 'right',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (prod,newState) => () => {
      setState({ open: true, ...newState }),
	  dispatch(remove(prod))
    };

    const handleClose = () => {
       setState({ ...state, open: false });
    };
	

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
  
  
	let sum = cartProducts
    .map((product) => {
      let price = product.price;
      let quantity = product.quantity;
      let total = price * quantity;
      return total;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
	
	useEffect(() => {
    dispatch(setTotalAmount(Number(sum).toFixed(2)));
	console.log(typeof(value))
	console.log(typeof(totalAmount))
  }, [sum]);
  
  if(cartProducts.length==0){
      return(
	  <section>
	   <Nav basket='true'/>
	   
	   <div className={classes.headerCart}>
	    <Typography variant="h3">Shopping Cart</Typography>
		<Typography variant="h5" color='primary'>shop</Typography>
	   </div>
	   
	   <div className={classes.emptyCart}>
	   <Container>
	   <div className={classes.linkPages}>
	        <NextLink href="/" passHref >
				   <Typography variant='h6' className={classes.linkHome}>Home  &gt;</Typography> 			
		    </NextLink>
			<Typography variant='h6'>cart</Typography>
	    </div>
	    <Divider />
        <Grid
         container
         direction="column"
         justifyContent="space-between"
         alignItems="center"
		 style={{padding:'5%'}}
        >
          <AiOutlineShoppingCart className={classes.shopingCart}/>
		  <Typography gutterBottom>No products added to the cart</Typography>
          <NextLink href="/"><Button variant="contained" color='primary'>START YOUR SHOPPING</Button></NextLink>
        </Grid>
		</Container>
		</div>
		
		<Footer />
		</section>
      )
    }
	
    return(
      <section >
	   <Nav />
	   <div className={classes.headerCart}>
	    <Typography variant="h3" style={{color:'black'}}>Shopping Cart</Typography>
		<Typography variant="h5" color='primary'>shop</Typography>
	   </div>
	   <div className={classes.infCart}>
	   <Container>
	          <div className={classes.linkPages}>
	            <NextLink href="/" passHref >
				   <Typography variant='h6' className={classes.linkHome}>Home  &gt;</Typography> 			
				</NextLink>
			    <Typography variant='h6'>cart</Typography>
			  </div>
			  <Divider />
	     
	         <Grid container className={classes.headerTable}>
			  <Grid container item  xs={false} md={9} spacing={2}>
			   <Grid item md={5} sm={5}>Product</Grid>
			   <Grid item md={3} sm={2}>Price</Grid>
			   <Grid item md={2} sm={3}>Quantity</Grid>
			   <Grid item md={1} sm={2}>Total</Grid>
			   <Divider className={classes.divdr}/>
			  </Grid>
			  
			  <Grid item xs={3}></Grid>
			 </Grid>
			 
			 
			 
			   
			   
			 
			 <Grid container className={classes.products} spacing={2}>
			 

			 <Grid container item md={9} xs={12} sm={12} direction="column">
	    {product.filter((prod)=>prod.added).map((prod)=>{
			
			const totProd=prod.quantity * prod.price;
			
			
			
			return(
			
			 <>
			 <Head>
              <title>cart</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>  
             </Head>
			 
			 
			 
			 <Grid container direction="row" className={classes.prod} key={prod.id}>
			   <Grid item md={5} sm={5}className={classes.item} >
			     <Image src={prod.img} width='80' height='80' priority={true} alt={prod.hdr}/>
				 <Typography className={classes.header}>{prod.hdr}</Typography>
			   </Grid>
			   <Grid item md={3} sm={2} className={classes.item}>
			     <Typography>${prod.price}</Typography>
			   </Grid>
			   <Grid item md={2} sm={3} className={classes.item}>
			      <div className={classes.quantity}>
			      <Button disabled={prod.quantity==1} onClick={() => dispatch(decrementProduct(prod))}>-</Button>
				 
				    <TextField
                      id="outlined-size-small"
                      defaultValue="Small"
                      size="small"
					  value={prod.quantity}
                    />
                  <Button disabled={prod.quantity==10} onClick={() => dispatch(incrementProduct(prod))}>+</Button>
				  </div>
			   </Grid>
			   <Grid item md={2} sm={2} className={classes.item} direction="row" justifyContent="flex-start" alignItems="center">
			     <Typography color='primary'>${totProd.toFixed(2)}</Typography>
				 <MdOutlineClose onClick={handleClick(prod,{vertical: 'top',horizontal: 'right',})} className={classes.closeIcon}/>
			   </Grid>
			   
			  
             <Divider className={classes.divdr}/>
			</Grid>
			 
			 </>
			)
		})}
		   
		   </Grid>
		     <Grid item md={3} xs={12} className={classes.calculTotal}>
			 <Card className={classes.card}>
			 <Typography variant="h6">Cart Total</Typography>
			 <Divider />
			  <Typography variant="h6" className={classes.subtotal}>Subtotal: <span>${totalAmount}</span> </Typography>
			  <Divider />
			  <Typography variant="h6" className={classes.subtotal}>Shipping: </Typography>
			  <FormControl className={classes.subtotal}>
                <RadioGroup
                 aria-labelledby="demo-controlled-radio-buttons-group"
                 name="controlled-radio-buttons-group"
				 onChange={handleChange}
				 value={value}
                >
                <FormControlLabel value="0" control={<Radio />} label="Free Shipping" />
                <FormControlLabel value="10" control={<Radio />} label="Standard" />
                <FormControlLabel value="20" control={<Radio />} label="Express" />
               </RadioGroup>
             </FormControl>
			 <Divider />
			 <Typography variant="h6" className={classes.subtotal}>Total: <span>${total.toFixed(2)}</span> </Typography>
			 <Button className={classes.btn}>PROCEED TO CHECKED</Button>
			 </Card>
			 </Grid>
		
		
		 </Grid>
		  
	   </Container>
	   </div>
	   <Snackbar
          anchorOrigin={{ vertical, horizontal }}
	      autoHideDuration={1000}
          open={open}
          onClose={handleClose}
          message="Product Removed from Cart"
          key={vertical + horizontal}
        />
	   
	   <Footer />
	   
	  </section>
    )
}
export default Cart  