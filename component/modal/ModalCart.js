import React,{useState,useEffect} from 'react'
import {MdOutlineClose} from 'react-icons/md'
import {Typography,Snackbar,Button,Grid,Divider,Card} from '@material-ui/core'
import 'react-awesome-slider/dist/styles.css';
import Image from 'next/image';
import {useSelector,useDispatch} from 'react-redux';
import {SelectProduct} from '../../features/productSlice'
import {selectTotalAmount} from "../../features/variableSlice"
import {remove} from "../../features/productSlice"
import {setTotalAmount} from "../../features/variableSlice"
import NextLink from 'next/link'
import useStyles from './style';




const InfCard =({on,onMouseLeave})=>{
	const classes = useStyles();
	let totalAmount = useSelector(selectTotalAmount);
    const dispatch = useDispatch();
    const product = useSelector(SelectProduct)
    const cartProducts = product.filter((product) => product.added);
	const [value, setValue] = React.useState('0');
	const total= Number(parseFloat(value)+parseInt(totalAmount));
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
	  <Card className={on ?classes.card:classes.cardDisp} onMouseLeave={onMouseLeave}>
	    <Typography>no product</Typography>
	  </Card>
      )
    }
	
    return(
	<>
      <Card className={on ?classes.card:classes.cardDisp} onMouseLeave={onMouseLeave} >
	   <Grid container >
	    {product.filter((prod)=>prod.added).map((prod)=>{
			if(prod.quantity==0){
                dispatch(remove(prod))
            } 
			const totProd=prod.quantity * prod.price;

			return(
			
			 <>
			 <Grid container item direction="row"  key={prod.id} spacing={1} style={{marginBottom:'2%'}}>
			   
			   <Grid item xs={7} >
			     <Typography variant="button" gutterBottom>{prod.hdr}</Typography>
			     <Typography variant="caption" display="block" gutterBottom>{prod.quantity} X ${prod.price}</Typography>
			   </Grid>
			   <Grid item xs={4} direction="row">
			     <Image src={prod.img} width='70' height='70'/>
			   </Grid>
			   <Grid item xs={1} direction="row" className={classes.closeIconSctn}>
				 <MdOutlineClose onClick={handleClick(prod,{vertical: 'top',horizontal: 'right',})} className={classes.closeIcon}/>
				 
			   </Grid>
			   <Divider style={{width:"100%"}}/>
			</Grid>
			 
			 </>
			)
		})}
		   
		   </Grid>
		   
		   <Typography  className={classes.subtotal}>Subtotal: <span>${totalAmount}</span> </Typography>
		   <Grid container spacing={6}>
		    <Grid item xs={6}>
			 <NextLink href="/cart" passHref>
			  <Button variant="contained" color='primary'>view card</Button>
			  </NextLink>
			</Grid>
			<Grid item xs={6}><Button variant="outlined">checkout</Button></Grid>
		   </Grid>
		   <Snackbar
             anchorOrigin={{ vertical, horizontal }}
	         autoHideDuration={1000}
             open={open}
             onClose={handleClose}
             message="Product Removed from Cart"
             key={vertical + horizontal}
           />
		 </Card>  
		 
	</>	     
    )
}
export default InfCard