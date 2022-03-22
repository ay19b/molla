import React,{useEffect} from 'react';
import {Typography, Container,Grid,Divider} from '@material-ui/core'
import Image from 'next/image';
import bannerOne from '../../public/images/banner-1.jpg'
import bannerTwo from '../../public/images/banner-2.jpg'
import bannerThree from '../../public/images/banner-3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import useStyles from './style';




const Gallery =()=>{
	const classes = useStyles();
	useEffect(()=>{
	  Aos.init({duration:2000});
    },[]);
    return(
      <section className={classes.gallery}>
	  <Container>
				<Grid container spacing={4} >  
				    <Grid item  xs={12} md={5} className={classes.grid} data-aos="fade-right" data-aos-once="true">
					   <Typography variant="h4" style={{fontWeight:'bold',color:"black"}}>Our users love us</Typography>
                       <Typography variant="h2" style={{fontWeight:'bold',color:"black"}} gutterBottom>Customer Reviews</Typography>
					   <Typography variant="body1"gutterBottom>Donec nec justo eget felis facilisis fermentum. Aliquam
                            porttitor mauris sit amet orci. Aenean dignissim
                            pellentesque felis. 
					   </Typography>
					   <Image src={bannerOne} />
					</Grid>
					
					<Grid item  xs={12} md={7} className={classes.grid} data-aos="fade-left" data-aos-once="true">
					   <Image src={bannerTwo} style={{marginBottom:'5% !important'}}/>
					   <Divider style={{padding: '2%',backgroundColor:'white'}}/>
					   <Image src={bannerThree} />
					</Grid>
				</Grid>  
	   </Container>
	  </section>
    )
}
export default Gallery