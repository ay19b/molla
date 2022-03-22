import React,{useState,useEffect} from 'react'
import {Typography, Container,Snackbar,Button} from '@material-ui/core'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Image from 'next/image';
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {useDispatch} from 'react-redux'
import {add} from "../../features/productSlice"
import Data from './dataProd'
import Aos from 'aos'
import 'aos/dist/aos.css'
import useStyles from './style';




const Products =()=>{
	const classes = useStyles();
	const AutoplaySlider = withAutoplay(AwesomeSlider);
    const dispatch = useDispatch();
    const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (item,newState) => () => {
    setState({ open: true, ...newState }),
	dispatch(add(item))
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
	useEffect(()=>{
	  Aos.init({duration:2000});
    },[]);
	
    return(
      <section className={classes.products}>
	  <Container>
	     <div data-aos="fade-down" data-aos-once="true">
	      <Typography variant="h4" style={{fontWeight:'bold',color:"black"}}>Material & Design</Typography>
          <Typography variant="h2" style={{fontWeight:'bold',color:"black"}} >Find Your Color</Typography>
          <Typography variant="subtitle1" gutterBottom>Featuring Active Noise Cancelling that gives
		      you the space to create with fully immersive sound. 
          </Typography>
		 </div>
	   <AwesomeSlider>
         {Data.map((item)=>{
			    
                const{id,img,price,hdr} = item;
                return(
                  <div key={id} className={classes.slide}>
                     <Image src={img} className={classes.img} width='300' height='350' loading="eager"/>
                     <div className={classes.disc}>
                       
					   <div className={classes.infProd}>
					     <Typography style={{color:'#9a9a9a'}} >Lorem ipsum dolor sit amet, consectetue elit. Donec odio. Quisque volutpat mattis eros. </Typography>
					     <Typography variant="h5" color='primary' style={{fontWeight:'bold',width: '100%'}}>${price}</Typography>
						 <Button variant="contained" color='primary' className={classes.btnAdd} startIcon={<HiOutlineShoppingCart />} onClick={handleClick(item,{vertical: 'top',horizontal: 'right',})}>add to card</Button>
					   </div>
                     </div>
                  </div>
                )
          })}
       </AwesomeSlider>
	   <Snackbar
           anchorOrigin={{ vertical, horizontal }}
		   autoHideDuration={1000}
           open={open}
           onClose={handleClose}
           message="Product added to Cart"
           key={vertical + horizontal}
        />
	   </Container>
	  </section>
    )
}
export default Products


