import React,{useEffect} from 'react'
import {Grid,Typography,Container,Box} from '@material-ui/core'
import Image from 'next/image';
import headPh from '../../public/images/headphone-1.png'
import {MdBluetooth} from 'react-icons/md'
import {FiSmartphone} from 'react-icons/fi'
import {FaBatteryFull} from 'react-icons/fa'
import {BiBellOff} from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'
import useStyles from './style';


const Feature=()=> {
    const classes = useStyles();
	useEffect(()=>{
	  Aos.init({duration:2000});
  },[]);
    return (
        <section className={classes.sectionFeature}>
          <div className={classes.feature} >
            <Container>
                <Grid container spacing={5} >
                    <Grid item md={6} xs={12}>
                        <Image src={headPh} alt='headPh' />
                    </Grid>
                    <Grid item md={5} xs={12} data-aos="fade-left" data-aos-once="true">
                        <Typography variant="h5" className={classes.headerItem}>Hear your music, not the noise.</Typography>
                        <Typography variant="h2" className={classes.headerItem}>Natural Sound</Typography>
                        <Typography variant="subtitle1" gutterBottom className={classes.boxParag}>Morbi in sem quis dui placerat ornare. Pellentesque odio
                          nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
                          Cras consequat.
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6} className={classes.iconInf}>
							    <div className={classes.divIcon}>
                                 <BiBellOff className={classes.icon}/>
                                </div>
                                <div className={classes.divDisc}>
                                   <Typography className={classes.hdIcon} variant="subtitle1">Noise Cancelling</Typography> 
                                </div>
                            </Grid>
							<Grid item xs={6} md={6} className={classes.iconInf}>
							    <div className={classes.divIcon}>
                                 <FaBatteryFull className={classes.icon}/>
                                </div>
                                <div className={classes.divDisc}>
                                   <Typography className={classes.hdIcon} variant="subtitle1">Playtime 20 + Hours</Typography>
                                </div>
                            </Grid>
							<Grid item xs={6} md={6} className={classes.iconInf}>
							    <div className={classes.divIcon}>
                                 <MdBluetooth className={classes.icon}/>
                                </div>
                                <div className={classes.divDisc}>
                                   <Typography className={classes.hdIcon} variant="subtitle1">Wireless</Typography>
                                </div>
                            </Grid>
							<Grid item xs={6} md={6} className={classes.iconInf}>
							    <div className={classes.divIcon}>
                                 <FiSmartphone className={classes.icon}/>
                                </div>
                                <div className={classes.divDisc}>
                                   <Typography className={classes.hdIcon} variant="subtitle1">Phone Functionality</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
				  
                </Grid>
            </Container>
          </div>  
          <div className={classes.extraHead}>
           <Container> 
             <Box className={classes.box} data-aos="fade-right" data-aos-once="true">
               <Typography variant="h4" className={classes.boxItemHeader}>Listen all day</Typography>
               <Typography variant="h2" className={classes.boxHeader}>20 + Hours of Playtime</Typography>
               <Typography variant="subtitle1" gutterBottom className={classes.boxParag}>Donec nec justo eget felis facilisis fermentum. Aliquam 
                  porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque felis. 
               </Typography>
               <div className={classes.AllBtn}>
                  <div className={classes.btn}>
                   <Typography variant="subtitle1">CHARGE</Typography>
                   <Typography variant="h4">2</Typography>
                   <Typography variant="subtitle1">HOURS</Typography>
                  </div>
                  <div className={classes.btn}>
                   <Typography variant="subtitle1">PLAYTIME</Typography>
                   <Typography variant="h4">20</Typography>
                   <Typography variant="subtitle1">HOURS</Typography>
                  </div>
               </div>
            </Box>
          </Container>
         </div>
           
        </section>
    )
}

export default Feature
