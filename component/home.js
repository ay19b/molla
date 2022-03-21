import { AppBar, Container, makeStyles , Snackbar,Menu,Grid,IconButton,InputLabel,FormControl,Badge,Box,Typography,Button,Select,NativeSelect,MenuItem,FormHelperText} from '@material-ui/core'
import {CloseIcon} from '@material-ui/icons'
import Image from 'next/image';
import React,{useState,useEffect} from 'react'
import Logo from '../public/images/logo.png'
import {ShoppingCartIcon,MailIcon} from "@material-ui/icons"
import {BiSearchAlt2} from 'react-icons/bi'
import {HiOutlineShoppingCart,HiMenu} from 'react-icons/hi'
import {MdKeyboardArrowDown,MdOutlineCancel} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {GrFacebookOption} from 'react-icons/gr'
import {AiFillYoutube} from 'react-icons/ai'
import {CgClose,CgMenu} from 'react-icons/cg'
import NextLink from 'next/link'
import {useSelector,useDispatch} from 'react-redux';
import {SelectProduct} from '../features/productSlice'
import {selectTotalAmount} from "../features/variableSlice"
import InfCard from './ModalCart'
import Nav from './nav'
import Aos from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
    home:{
      backgroundImage: "url(../images/home.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      backgroundSize:'cover',
      height:'100vh',
    },
    box:{
      position: "absolute",
      top: "12rem",
      marginLeft:"8rem",
      width: "27rem",
      color: "white",
      fontWeight:'bold',
      [theme.breakpoints.down("sm")]: {
        marginLeft:"4rem",
      },
	  [theme.breakpoints.down("xs")]: {
        marginLeft:"2%",
        width:'100%',
      },
    },
	
	allBtn:{
		display:'flex',
		justifyContent:'center',
	},
    addBtn:{
      backgroundColor:theme.palette.primary.main,
      color:'white',
      borderRadius: '20px',
      padding: '4% 8%',
      marginRight:'2%',
	    border: '1px solid transparent',
      width: '12rem',
      '&:hover':{
        backgroundColor:'#0000fb'
      },
	  [theme.breakpoints.down("xs")]: {
        padding: '2% 8%',
		 width: '13rem',
      },
    },
    addDsc:{
      backgroundColor:'transparent',
      color:'white',
      border:'1px solid white',
      borderRadius: '20px',
      padding: '4% 8%',
      boxSizing:'none',
	  width: '12rem',
      '&:hover':{
        backgroundColor:theme.palette.primary.main,
        borderColor:'transparent'
      },
	  [theme.breakpoints.down("xs")]: {
        padding: '2% 8%',
		width: '13rem',
      },
    },
}));
const Navbar=()=> {
    const classes = useStyles();
	useEffect(()=>{
	  Aos.init({duration:2000});
    },[]);
	
    return (
      <section className={classes.home}>
        <Nav basket='false'/>

        
		   <Container>
       <Box className={classes.box} data-aos="fade-right" data-aos-once="true">
          <Typography variant="h4" style={{fontWeight:'bold'}}>Hear it First</Typography>
          <Typography variant="h2" style={{fontWeight:'bold'}} >Control Your Sound</Typography>
          <Typography variant="body1" gutterBottom>Featuring Active Noise Cancelling
            that gives you the space to create with fully
            immersive sound.
          </Typography>
		  <Grid container spacing={2} rowSpacing={4}>
		     <Grid item xs={12} sm={6}>
			    <Button startIcon={<HiOutlineShoppingCart />} className={classes.addBtn}>add to card</Button>
			 </Grid>
			 <Grid item xs={12} sm={6}>
			    <Button className={classes.addDsc}>Discover Now</Button>
			 </Grid>
		  </Grid>
      </Box>
		 </Container>  
        
      </section> 
      
    )
}

export default Navbar
