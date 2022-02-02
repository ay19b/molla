import React,{useState,useEffect} from 'react'
import { makeStyles,Typography, Container,Snackbar,Button} from '@material-ui/core'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Image from 'next/image';
import {HiOutlineShoppingCart,HiMenu} from 'react-icons/hi'
import {useDispatch} from 'react-redux'
import {add} from "../features/productSlice"
import Data from './dataProd'
import Aos from 'aos'
import 'aos/dist/aos.css'







const useStyles = makeStyles((theme) => ({
    products:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		flexDirection: 'column',
		backgroundColor:"white",
		textAlign:'center',
		height:'100%',
		padding:'4% 0',
	},
	slide:{
		display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		paddingTop:'10%',
	},
	img:{
		width:'100%',
		height:'100%',
	},
	disc:{
		paddingTop: '15%',
	},
	infProd:{
		display:'flex',
		flexWrap:'wrap',
		justifyContent: 'center',
		margin:'4% 0',
	},
	btnAdd:{
		borderRadius:'13px',
		padding:'0.4rem 1.5rem',
	},
}));
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
                       <Typography variant="h4" style={{color:'black'}}>{hdr}</Typography>
					   <div className={classes.infProd}>
					     <Typography variant="h5" color='primary' style={{fontWeight:'bold',marginRight:'3%'}}>${price}</Typography>
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


