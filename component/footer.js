import { makeStyles,Typography, Container,Grid,Link} from '@material-ui/core'
import black from '../public/images/black.jpg'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {GrFacebookOption} from 'react-icons/gr'
import {AiFillYoutube} from 'react-icons/ai'





const useStyles = makeStyles((theme) => ({
	footer:{
		backgroundColor: 'black',
	},
    icons:{
		display: 'flex',
        alignItems: 'center',
        marginTop: '8%'
	},
	icon:{
		width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '3%',
        
        cursor: 'pointer',
		'&:hover':{
         color:black,
		 backgroundColor:'white'
        }
	},
	headerList:{
		color:'white',
	},
	listItem:{
		listStyle:'none',
	},
	item:{
		marginBottom: '2%',
		color: '#bbb',
	},
	lastFooter:{
		textAlign: 'center',
		marginTop:'1%',
	}
}));
const Footer =()=>{
	const classes = useStyles();
    return(
      <section className={classes.footer}>
	  <Container>
				<Grid container spacing={2}>
				  <Grid item sm={6} xs={12} md={3}>
				     
					 <ul className={classes.listItem}>
					   <Typography variant="h5" className={classes.headerList}>About Molla</Typography>
					   <li className={classes.item}>
					      <Typography variant="body1">Praesent dapibus, neque id cursus ucibus,
					        tortor neque egestas augue, eu vulputate magna eros eu erat.
					       </Typography>
					   </li>
					   <li className={classes.item}>
					     <div className={classes.icons} >
                          
						  <li className={classes.item}><Link href="#" underline="hover" color="inherit"><Typography variant='h6' className={classes.icon}><BsTwitter /></Typography></Link></li>
						  <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6' className={classes.icon}><GrFacebookOption /></Typography></Link></li>
						  <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6' className={classes.icon}><FiInstagram /></Typography></Link></li>
						  <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6' className={classes.icon}><AiFillYoutube/></Typography></Link></li>
                        </div>
					   </li>
					 </ul>
				     
					 
				</Grid>
				  
				  <Grid item sm={6} xs={12} md={3}>
				     <ul className={classes.listItem}>
					   <Typography variant="h5" className={classes.headerList}>Useful Links</Typography>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>About Molla</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>How to shop on Molla</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>FAQ</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Contact us</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Log in</Typography></Link></li>
					  </ul> 
				  </Grid>
				  
				  <Grid item sm={6} xs={12} md={3}>
				     <ul className={classes.listItem}>
					   <Typography variant="h5" className={classes.headerList}>Customer Service</Typography>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Payment Methods</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Money-back guarantee!</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Returns</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Shipping</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Terms and conditions</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Privacy Policy</Typography></Link></li>
					   
					 </ul>
				  </Grid>
				  
				  <Grid item sm={6} xs={12} md={3}>
				     <ul className={classes.listItem}>
					   <Typography variant="h5" className={classes.headerList}>My Account</Typography>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Sign In</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>View Cart</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>My Wishlist</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Track My Order</Typography></Link></li>
					   <li className={classes.item}><Link href="#" underline="hover"color="inherit"><Typography variant='h6'>Help</Typography></Link></li>
					 </ul>
				  </Grid>
				</Grid>
				<div className={classes.lastFooter}>
				 <Typography variant='h6'>Copyright © 2022. All Rights Reserved.</Typography>
				</div>
               
		 
	   </Container>
	  </section>
    )
}
export default Footer;