import {Container,Grid,Badge,Typography} from '@material-ui/core'
import Image from 'next/image';
import React,{useState,useEffect} from 'react'
import Logo from '../../public/images/logo.png'
import {BiSearchAlt2} from 'react-icons/bi'
import {CgMenu,CgClose} from 'react-icons/cg'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {GrFacebookOption} from 'react-icons/gr'
import {AiFillYoutube} from 'react-icons/ai'
import {useSelector} from 'react-redux';
import {SelectProduct} from '../../features/productSlice'
import {selectTotalAmount} from "../../features/variableSlice"
import InfCard from '../modal/ModalCart'
import classNames from 'classnames';
import useStyles from './style';



const Nav=({basket})=> {
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
         <Container  className={!basket?classes.container:null}>
          <Grid container className={navbar?classes.conNav:classes.conNavBreak}>
          <Grid item xs={6} md={2} className={classes.logo}>
             <CgMenu className={classes.menu} onClick={toggleLinks} size={25}/>
               <Image src={Logo} />
          </Grid> 
          <Grid item xs={0} md={7}>
            <ul className={showLinks?classes.list:classNames(classes.list, classes.active)} >
			        <Typography variant="h4" className={classes.close}><CgClose onClick={toggleLinks} className={classes.iconClose}/></Typography>
              <li className={classes.listItem} onClick={toggleLinks}><Typography variant='button'className={classes.listItem} >HOME<MdKeyboardArrowDown size={20}/></Typography> </li>
			        <li className={classes.listItem} onClick={toggleLinks}><Typography variant='button'className={classes.listItem} >SHOP<MdKeyboardArrowDown size={20}/></Typography> </li>
		      	  <li className={classes.listItem} onClick={toggleLinks}><Typography variant='button'className={classes.listItem} >PRODUCT<MdKeyboardArrowDown size={20}/></Typography> </li>
			        <li className={classes.listItem} onClick={toggleLinks}><Typography variant='button'className={classes.listItem} >PAGES <MdKeyboardArrowDown size={20}/></Typography> </li>
			        <li className={classes.listItem} onClick={toggleLinks}><Typography variant='button'className={classes.listItem} >BLOG <MdKeyboardArrowDown size={20}/></Typography> </li>
			        <li className={classes.listItem} onClick={toggleLinks}><Typography variant='button'className={classes.listItem} >ELEMENT <MdKeyboardArrowDown size={20}/></Typography> </li>
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
		 <Grid item xs={1} md={2} className={classes.searchSctn}>
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
