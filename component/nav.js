import { AppBar, Container, makeStyles ,Menu,Grid,IconButton,InputLabel,FormControl,Badge,Box,Typography,Button,Select,NativeSelect,MenuItem,FormHelperText} from '@material-ui/core'
import Image from 'next/image';
import React,{useState,useEffect} from 'react'
import Logo from '../public/images/logo.png'
import {BiSearchAlt2} from 'react-icons/bi'
import {CgMenu} from 'react-icons/cg'
import {HiOutlineShoppingCart,HiMenu} from 'react-icons/hi'
import {MdKeyboardArrowDown,MdOutlineCancel} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {GrFacebookOption} from 'react-icons/gr'
import {AiFillYoutube} from 'react-icons/ai'
import {useSelector,useDispatch} from 'react-redux';
import {SelectProduct} from '../features/productSlice'
import {selectTotalAmount} from "../features/variableSlice"
import InfCard from './ModalCart'
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
    home:{
      backgroundImage: "url(../images/home.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      backgroundSize:'cover',
      minHeight:'100vh',
    },
    firstNav:{
      backgroundColor:'black',
      position:"relative"
    },
	conNav:{
	   alignItems: 'center',
	},
	conNavBreak:{
	   alignItems: 'center',
	   padding: '1%',
	   [theme.breakpoints.down("sm")]: {
        paddingTop:'3%'
      },
	},
    nav:{
      color:'white',
      boxShodow:'none',
      width: '100%',
	  animationName: '$scroll',
      animationDuration: '.4s',
    },
	'@keyframes scroll':{
		'0%' :{
          opacity: 1,
          transform: 'translateY(0)',
        },
		'100%' :{
          opacity: 1,
          transform: 'translateY(-60px)',
        },
	},
    navActive:{
      backgroundColor:'black',
      color:'white',
      position:'fixed',
      width: '100%',
      zIndex:'10',
      padding:'5px',
	  top:'0%',
	  animationName: '$scrollNav',
      animationDuration: '.4s',
	  [theme.breakpoints.down("sm")]: {
        padding:'2%'
      },
    },
	'@keyframes scrollNav':{
		'0%' :{
          opacity: 0,
          transform: 'translateY(-60px)',
        },
		'100%' :{
          opacity: 1,
          transform: 'translateY(0)',
        },
	},
	logo:{
		display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
	},
    list:{
      listStyle:'none',
      display:'flex',
      flexDirection:'row',
      justifyContent: "space-around",
      fontSize:"0.9rem",
      [theme.breakpoints.down("sm")]:{
        flexDirection:'column',
		display:'flex',
		listStyle:'none',
		position:'absolute',
		left:'0',
		top: '-14px',
		textAlign:'center',
		backgroundColor:'#333',
		alignItems: 'flex-start',
		width: '18rem',
		height:'100vh',
		zIndex: '10',
		transform: 'translateX(-100%)',
		transition: 'transform 0.5s ease-in',
		animationName: '$animate',
         animationDuration: '4s',
      },
    },
	active:{
		[theme.breakpoints.down("sm")]:{
		 transform: 'translateX(0%)',
		 transition: 'transform 0.5s ease-in',
		 animationName: '$animate',
         animationDuration: '0.7s',
        },
	},
	'@keyframes animate':{
		'0%' :{
          opacity: 0,
        },
		'100%' :{
          opacity: 1,
        },
	},
	on:{
		[theme.breakpoints.down("sm")]: {
		  transform: 'translateX(0%)',
		  transition: 'transform 0.5s ease-in',
        },
	},
	itemSocial:{
	  [theme.breakpoints.up("md")]: {
        display:'none',
      },
	  [theme.breakpoints.down("sm")]: {
        marginBottom: '2%',
      },
	},
	iconsSocail:{
		display: 'flex',
        alignItems: 'center',
	},
	iconSocail:{
		width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '3%',
        cursor: 'pointer',
		'&:hover':{
         color:'black',
		 backgroundColor:'white'
        }
	},
    linksNav:{
      [theme.breakpoints.up("md")]: {
        display:'none'
      },
    },
    listItemActive:{
      color:theme.palette.primary.main,
      cursor:'pointer',
      fontWeight:'bold',
	  [theme.breakpoints.down("sm")]: {
        marginBottom: '15%'
      },
    },
    listItemAppNav:{
      color:'#ccc',
      cursor:'pointer',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      fontWeight:'bold',
      fontSize:"0.75rem",
      '&:hover':{
        color:theme.palette.primary.main,
      },
	  
	},
    menu:{
      marginRight:'4%',
      fontSize:'1.5rem',
      cursor:'pointer',
      [theme.breakpoints.up("md")]: {
        display:'none'
      },
    },
	cancel:{
		cursor:'pointer',
		width: '90%',
        position: 'relative',
		[theme.breakpoints.up("md")]: {
          display:'none'
      },
	},
	iconCancel:{
		position: 'absolute',
        right: '0px',
	},
    listItem:{
      cursor:'pointer',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      fontWeight:'bold',
      '&:hover':{
        color:theme.palette.primary.main,
      },
	  [theme.breakpoints.down("sm")]: {
        marginBottom: '2%',
		width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
	input:{
		borderRadius: '20px',
        outline: 'none',
        border: 'none',
        padding: '3%',
	},
    icon:{
      fontSize: "1.6rem",
	  cursor:'pointer',
    },
    box:{
      position: "absolute",
      top: "30%",
      marginLeft:"15%",
      width: "27rem",
      color: "white",
      fontWeight:'bold',
	  [theme.breakpoints.down("xs")]: {
        marginLeft:"2%",
      },
    },
    addBtn:{
      backgroundColor:theme.palette.primary.main,
      color:'white',
      borderRadius: '20px',
      padding: '2% 8%',
      marginRight:'2%',
      '&:hover':{
        backgroundColor:'#0000fb'
      }
    },
	linkToCart:{
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		cursor:'pointer',
		'&:hover':{
          color:theme.palette.primary.main
        }
	},
	searchSctn:{
		display: 'flex',
        justifyContent: 'center',
	},
    addDsc:{
      backgroundColor:'transparent',
      color:'white',
      border:'1px solid white',
      borderRadius: '20px',
      padding: '2% 8%',
      boxSizing:'none',
      '&:hover':{
        backgroundColor:theme.palette.primary.main,
        borderColor:'transparent'
      }
    },
}));
const Nav=()=> {
  const [navbar, setNavbar] = useState(false);
  const [showLinks, setShowLinks] = useState(true);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const product = useSelector(SelectProduct)
  const cartProducts = product.filter((product) => product.added);
  let totalAmount = useSelector(selectTotalAmount);
  
  const toggleLinks = () => {
        setShowLinks(!showLinks);
  };
  const toggle = () => {
        setOpen(!open);
  };
  
  
  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href');
    setShowLinks(!showLinks);
    window.scrollTo({
      left: 0,
      top: location - 64,
    })
  }
  
  const changeBackground=()=>{
    if(window.scrollY>=100){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

useEffect(() => {
  changeBackground()
  window.addEventListener('scroll',changeBackground)  
})
    return (
      
        <navbar  className={!navbar?classes.nav:classes.navActive} >
         <Container>
          <Grid container className={navbar?classes.conNav:classes.conNavBreak}>
          <Grid item xs={6} md={2} className={classes.logo}>
             <CgMenu className={classes.menu} onClick={toggleLinks} size={25}/>
               <Image src={Logo} />
          </Grid> 
          <Grid item xs={0} md={7}>
            <ul className={showLinks?classes.list:classNames(classes.list, classes.active)} onMouseLeave={toggleLinks}>
			
              <li className={classes.listItem}><Typography variant='button'className={classes.listItem} >HOME<MdKeyboardArrowDown size={20}/></Typography> </li>
			  <li className={classes.listItem}><Typography variant='button'className={classes.listItem} >SHOP<MdKeyboardArrowDown size={20}/></Typography> </li>
			  <li className={classes.listItem}><Typography variant='button'className={classes.listItem} >PRODUCT<MdKeyboardArrowDown size={20}/></Typography> </li>
			  <li className={classes.listItem}><Typography variant='button'className={classes.listItem} >PAGES <MdKeyboardArrowDown size={20}/></Typography> </li>
			  <li className={classes.listItem}><Typography variant='button'className={classes.listItem} >BLOG <MdKeyboardArrowDown size={20}/></Typography> </li>
			  <li className={classes.listItem}><Typography variant='button'className={classes.listItem} >ELEMENT <MdKeyboardArrowDown size={20}/></Typography> </li>
			   <li className={classes.itemSocial}>
					     <div className={classes.iconsSocail} >
                          <div className={classes.iconSocail}>
                             <BsTwitter size={20}/>
                          </div>
                          <div className={classes.iconSocail}>
                             <GrFacebookOption size={20}/>
                          </div>
                          <div className={classes.iconSocail}>
                             <FiInstagram size={20}/>
                          </div>
						  <div className={classes.iconSocail}>
                             <AiFillYoutube size={20}/>
                          </div>
                          
                        </div>
			  </li>
            </ul>
          </Grid>
		 <Grid item xs={1} md={1} className={classes.searchSctn}>
		  <BiSearchAlt2 className={classes.icon}/>
		 </Grid>
          <Grid item xs={5} md={2} className={classes.linkToCart} onMouseUp={toggle} >
              <Badge badgeContent={cartProducts.length} color="primary" className={classes.icon}>
                <HiOutlineShoppingCart color="action" />
               </Badge>
               <Typography variant="body1">${totalAmount}</Typography>
			   
          </Grid>          
          </Grid>
         </Container> 
          <InfCard on={open} onMouseLeave={()=>setOpen(!open)}/>		 
        </navbar>

        
      
    )
}

export default Nav
