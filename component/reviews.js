import React,{useEffect} from 'react';
import {GiCancel} from 'react-icons/gi'
import {MdSearch,MdKeyboardArrowDown,MdStar} from 'react-icons/md'
import { makeStyles,Typography, Container,Button,Grid,Avatar} from '@material-ui/core'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Image from 'next/image';
import black from '../public/images/black.jpg'
import red from '../public/images/red.jpg'
import white from '../public/images/white.jpg'
import {Rating} from '@material-ui/core';
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data=[
    {
        id:1,
        img:'https://www.irishtimes.com/polopoly_fs/1.3937927.1561537947!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg',
        header:"Excellent sound",
        comnt:"Dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet",
		drc:'fade-down',
		time:'100',
        
    },
    {
        id:2,
        img:'https://www.irishtimes.com/polopoly_fs/1.3655809.1539009634!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg',
        header:"It's a very good product",
        comnt:"Dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet",
        drc:'fade-down',
		time:'300',
    },
    {
        id:3,
        img:'https://images.gr-assets.com/authors/1567767601p8/19527915.jpg',
        header:"5 stars indeed.",
        comnt:"Dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet",
		drc:'fade-down',
		time:'500',
    },
];
const useStyles = makeStyles((theme) => ({
    products:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		flexDirection: 'column',
		backgroundColor:"white",
		textAlign:'center',
	    padding:'4% 0',
	},
	slide:{
		display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		paddingTop:'10%',
	},
	reviews:{
		marginTop:'8%',
	},
	card:{
		justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
		[theme.breakpoints.down("sm")]: {
         flexDirection: 'column',
        },
	},
	img:{
        top: '10%',
	},
	inf:{
		padding:'5% 4% 8% 4%',
		border: '1px solid #ccc',
		borderRadius:'8px'
	},
	rate:{
		marginTop:'3%',
		[theme.breakpoints.down("sm")]: {
         marginTop:'-2%',
        },
		[theme.breakpoints.down("xs")]: {
         marginTop:'1%',
        },
	},
	star:{
		color:theme.palette.primary.main,
	    fontSize: '1.5rem'
    },
}));
const Reviews =()=>{
	const classes = useStyles();
	useEffect(()=>{
	  Aos.init({duration:2000});
    },[]);
    return(
      <section className={classes.products}>
	  <Container>
	  <Typography variant="h4" style={{fontWeight:'bold',color:"black"}}>Our users love us</Typography>
          <Typography variant="h2" style={{fontWeight:'bold',color:"black"}} gutterBottom>Customer Reviews</Typography>
	    
				  
				<Grid container spacing={4} className={classes.reviews}>
				  {Data.map((item)=>{
                   const{id,img,header,comnt,drc,time} = item
                   return(
				   
				    <Grid item key={id} xs={12} md={4} className={classes.card} data-aos={drc} data-aos-once="true" data-aos-delay={time}>
					   
					   <Avatar  src={img} className={classes.img}/>
					   
                      <div className={classes.inf}>
					   <div className={classes.rate}>
					     <MdStar className={classes.star}/><MdStar className={classes.star}/>
					     <MdStar className={classes.star}/><MdStar className={classes.star}/><MdStar className={classes.star}/>
					   </div>
                       <Typography variant="h5" style={{color:'black',fontWeight:'bold'}}>{header}</Typography>
                       <Typography variant="body1">{comnt}</Typography>
                     </div>
					</Grid>
					
					 )
                 })}
				</Grid>  
               
		 
	   </Container>
	  </section>
    )
}
export default Reviews