import React,{useEffect} from 'react'
import {Grid,Typography,Container,makeStyles,Box} from '@material-ui/core'
import Image from 'next/image';
import headPh from '../public/images/headphone-1.png'
import {MdBluetooth} from 'react-icons/md'
import {FiSmartphone} from 'react-icons/fi'
import {FaBatteryFull} from 'react-icons/fa'
import {BiBellOff} from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
    feature:{
        backgroundImage: "url(../images/bg-1.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize:'cover',
        backgroundColor:'#f1f1f1',
        padding:'4% 0%',
        [theme.breakpoints.down("sm")]: {
            backgroundColor: '#f1f1f1',
			backgroundPosition: 'top',
			padding: '22% 0%',
        },
    },
    iconInf:{
		display:'flex',
		alignItems: 'center',
	},
    icon:{
        color:theme.palette.primary.main,
		marginRight:'2%',
		fontSize: '2rem',
    },
	divIcon:{
        flex:'0.3',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
	divDisc:{
        flex:'0.7',
    },
	hdIcon:{
		color:'white',
	},
    extraHead:{
        backgroundImage: "url(../images/bg-2.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize:'cover', 
        height:'100vh',
        position: "relative",
    },
    box:{
        position: "absolute",
        top: "20%",
        marginLeft:"15%",
        width: "27rem",
        color: "white",
        fontWeight:'bold',
		[theme.breakpoints.down("xs")]: {
           marginLeft:"4%",
        },
    },
    AllBtn:{
        display:'flex',
        marginTop:'2%',
    },
    btn:{
        color: 'black',
        textAlign: "center",
        border: '1px dashed',
        padding: '3%',
        borderRadius: '8px',
        marginRight: '6%',
		width: '6rem',
        '&:hover':{
            color:'white',
            backgroundColor:'black'
        }
    },
}));

const Feature=()=> {
    const classes = useStyles();
	useEffect(()=>{
	  Aos.init({duration:2000});
  },[]);
    return (
        <section style={{backgroundColor:'#f1f1f1'}}>
           <div className={classes.feature} >
            <Container>
                <Grid container spacing={5} >
                    <Grid item md={6} xs={12}>
                        <Image src={headPh} alt='headPh' />
                    </Grid>
                    <Grid item md={5} xs={12} data-aos="fade-left" data-aos-once="true">
                        <Typography variant="h5" style={{fontWeight:'bold',color:"white"}}>Hear your music, not the noise.</Typography>
                        <Typography variant="h2" style={{fontWeight:'bold',color:"white"}}>Natural Sound</Typography>
                        <Typography variant="subtitle1" gutterBottom style={{color:"#828080"}}>Morbi in sem quis dui placerat ornare. Pellentesque odio
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
          <Box className={classes.box} data-aos="fade-right" data-aos-once="true">
          <Typography variant="h4" style={{fontWeight:'bold',color:"black"}}>Listen all day</Typography>
          <Typography variant="h2" style={{fontWeight:'bold',color:"black"}}>20 + Hours of Playtime</Typography>
          <Typography variant="subtitle1" gutterBottom style={{color:"#828080"}}>Donec nec justo eget felis facilisis fermentum. Aliquam 
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
          </div>
        </section>
    )
}

export default Feature
