import {Container,Grid,Box,Typography,Button} from '@material-ui/core'
import React,{useEffect} from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import Nav from '../nav/nav'
import Aos from 'aos'
import 'aos/dist/aos.css'
import useStyles from './style';


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
