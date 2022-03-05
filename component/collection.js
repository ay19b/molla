import React from 'react'
import {GrDeliver} from 'react-icons/gr'
import {GiReturnArrow} from 'react-icons/gi'
import {ImEqualizer2} from 'react-icons/im'
import {FaRegEnvelopeOpen} from 'react-icons/fa'
import {MdPayment} from 'react-icons/md'
import {Grid,Typography,Container,makeStyles,Divider} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
	collection:{
		backgroundColor: 'black',
	},
    allColl:{
       padding:'2% 0% 0% 0%',
       display: 'flex',
    },
	coll:{
		textAlign:'center',
	},
    divIcon:{
        flex:'0.3',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    icon:{
      color:'white',
    },
    divDisc:{
        flex:'0.7',
		[theme.breakpoints.down("xs")]: {
          textAlign:'center',
        },
    },
}));
const Collection=()=> {
    const classes = useStyles();
    return (
        <section className={classes.collection}>
          <Container>
            <Grid container spacing={2} className={classes.allColl}>
              <Grid item  xs={6} sm={3} className={classes.coll}>
                <div className={classes.divIcon}>
                   <Typography variant="h3"><MdPayment className={classes.icon}/></Typography>  
                </div>
                <div className={classes.divDisc}>
                  <Typography variant="subtitle1" style={{color:"white"}}>Payment & delivery</Typography>  
                  <Typography variant="body2">free shopping for order over $50</Typography>  
                </div>
                
              </Grid>
              <Grid item  xs={6} sm={3} className={classes.coll}>
                <div className={classes.divIcon}>
                <Typography variant="h3"><GiReturnArrow className={classes.icon}/></Typography>  
                </div>
                <div className={classes.divDisc}>
                  <Typography variant="subtitle1"style={{color:"white"}}>Return & refund</Typography>  
                  <Typography>free 100% money back guarantee</Typography>
                </div>
              </Grid>
              <Grid item  xs={6} sm={3} className={classes.coll}>
                <div className={classes.divIcon}>
                <Typography variant="h3"><ImEqualizer2 className={classes.icon}/></Typography>  
                </div>
                <div className={classes.divDisc}>
                  <Typography variant="subtitle1"style={{color:"white"}}>Quallity Support</Typography>  
                  <Typography>alway online feedback 24/7</Typography>  
                </div>
              </Grid>
              <Grid item  xs={6} sm={3} className={classes.coll}>
                <div className={classes.divIcon}>
                <Typography variant="h3"><FaRegEnvelopeOpen className={classes.icon}/></Typography>  
                </div>
                <div className={classes.divDisc}>
                  <Typography variant="subtitle1"style={{color:"white"}}>Join Our Newsletter</Typography>  
                  <Typography>10% Off by subscribe to our newsletter</Typography>
                </div>
              </Grid>
            </Grid>
          </Container>  
		  <Divider style={{backgroundColor:'#686868'}}/>
        </section>
    )
}

export default Collection

